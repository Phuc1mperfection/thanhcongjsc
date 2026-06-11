import { useEffect, useRef, useState } from "react";
import * as PageFlip from "page-flip";
import * as pdfjsLib from "pdfjs-dist";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Set PDF.js worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export function CatalogueViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pagesContainerRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip.PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPDF() {
      try {
        setLoading(true);
        setError(null);

        const pdf = await pdfjsLib.getDocument({
          url: "/catalogues/catalogue-thanhcong.pdf",
        }).promise;
        const numPages = pdf.numPages;
        setTotalPages(numPages);

        if (cancelled) return;

        // Render all pages first
        const renderedPages: HTMLDivElement[] = [];
        const scale = 1.2; // Use 1.2 for better performance vs quality balance

        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale });

          const pageDiv = document.createElement("div");
          pageDiv.className = "page";
          if (i === 1) pageDiv.setAttribute("data-density", "hard");

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.objectFit = "contain";

          await page.render({ canvas, viewport } as any).promise;

          pageDiv.appendChild(canvas);
          renderedPages.push(pageDiv);
        }

        if (cancelled) return;

        // Insert pages into the container
        const shelf = pagesContainerRef.current;
        if (!shelf) return;

        shelf.innerHTML = "";
        for (const pg of renderedPages) {
          shelf.appendChild(pg);
        }

        setLoading(false);

        // Wait a bit more to ensure DOM is fully painted
        setTimeout(() => {
          if (cancelled) return;

          const allPages = shelf.querySelectorAll(".page");
          if (allPages.length === 0) return;

          try {
            // Destroy previous instance if exists
            if (pageFlipRef.current) {
              pageFlipRef.current.destroy();
              pageFlipRef.current = null;
            }

            const pf = new PageFlip.PageFlip(shelf, {
              width: 600,
              height: 800,
              size: "stretch",
              minWidth: 200,
              maxWidth: 700,
              minHeight: 300,
              maxHeight: 1000,
              drawShadow: true,
              flippingTime: 600,
              usePortrait: false,
              showCorners: true,
              clickEvent: true,
              startPage: 0,
              maxShadowOpacity: 0.5,
              mobileScrollSupport: false,
            });

            pf.loadFromHTML(allPages);

            pf.on("flip", (e) => {
              setCurrentPage(e.data);
            });

            pageFlipRef.current = pf;

            // Force a render update
            pf.flip(0);
          } catch (e) {
            console.error("PageFlip init error:", e);
          }
        }, 300);
      } catch (err) {
        if (!cancelled) {
          console.error("PDF load error:", err);
          setError(
            "Không thể tải file PDF. Vui lòng kiểm tra lại file trong thư mục public/catalogues/"
          );
          setLoading(false);
        }
      }
    }

    loadPDF();

    return () => {
      cancelled = true;
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }
    };
  }, []);

  const goPrev = () => {
    pageFlipRef.current?.flipPrev();
  };

  const goNext = () => {
    pageFlipRef.current?.flipNext();
  };

  return (
    <div className="min-h-screen bg-deep/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-deep hover:text-gold transition font-semibold"
            >
              <ArrowLeft size={18} />
              <span>Quay lại trang chủ</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-sm text-ink-soft hidden sm:block">
                {totalPages > 0
                  ? `Trang ${currentPage + 1} / ${totalPages}`
                  : ""}
              </span>

              <a
                href="/catalogues/catalogue-thanhcong.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground hover:brightness-95 transition"
              >
                <Download size={16} />
                Tải PDF
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        {!loading && !error && totalPages > 0 && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={goPrev}
              className={`inline-flex items-center gap-2 rounded-lg border border-deep/20 bg-white px-4 py-2 text-sm font-semibold text-deep hover:border-gold hover:text-gold transition ${
                currentPage <= 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
              disabled={currentPage <= 0}
            >
              <ChevronLeft size={16} />
              Trước
            </button>

            <span className="text-sm text-ink-soft sm:hidden">
              Trang {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={goNext}
              className={`inline-flex items-center gap-2 rounded-lg border border-deep/20 bg-white px-4 py-2 text-sm font-semibold text-deep hover:border-gold hover:text-gold transition ${
                currentPage >= totalPages - 1 ? "opacity-40 cursor-not-allowed" : ""
              }`}
              disabled={currentPage >= totalPages - 1}
            >
              Sau
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Book area */}
        <div className="relative flex justify-center" ref={containerRef}>
          {/* Loading overlay - positioned absolutely over the book area */}
          {loading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-deep/5 rounded-sm" style={{ minHeight: "500px" }}>
              <Loader2 size={40} className="animate-spin text-gold" />
              <p className="text-ink-soft text-sm">Đang tải catalogue...</p>
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center gap-4 py-24 max-w-lg text-center">
              <div className="text-4xl">📄</div>
              <p className="text-red-500 font-semibold">{error}</p>
              <p className="text-ink-soft text-sm">
                Hãy đảm bảo file PDF được đặt tại{" "}
                <code className="bg-secondary px-1 rounded">
                  public/catalogues/catalogue-thanhcong.pdf
                </code>
              </p>
              <a
                href="/catalogues/catalogue-thanhcong.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground hover:brightness-95 transition mt-2"
              >
                <Download size={16} />
                Tải PDF trực tiếp
              </a>
            </div>
          )}

          {/* Book shelf - the actual container for page-flip */}
          <div
            ref={pagesContainerRef}
            className="relative shadow-2xl rounded-sm overflow-hidden bg-white"
            style={{
              width: "100%",
              maxWidth: "800px",
              height: loading ? 0 : "70vh",
              minHeight: loading || error ? "0" : "500px",
              visibility: loading ? "hidden" : "visible",
            }}
          />
        </div>
      </div>

      <style>{`
        .page {
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          overflow: hidden;
        }
        .page canvas {
          display: block;
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
        }
        .stf__parent {
          width: 100% !important;
          height: 100% !important;
        }
        .stf__block {
          width: 100% !important;
          height: 100% !important;
        }
        .stf__item {
          width: auto !important;
        }
        .stf__book-wrapper {
          width: 100% !important;
          height: 100% !important;
        }
        .stf__hard {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}
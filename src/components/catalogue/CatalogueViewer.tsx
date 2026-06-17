import { Download, FileText, ExternalLink } from "lucide-react";

const PDF_URL = "/catalogues/catalogue-thanhcong.pdf";

export function CatalogueViewer() {
  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-border bg-white px-4 md:px-6 py-3 rounded-t-2xl">
        <div className="flex items-center gap-2 text-sm font-medium text-deep">
          <FileText size={16} className="text-gold" />
          <span className="hidden sm:inline">Thanh Cong JSC Catalogue.pdf</span>
          <span className="sm:hidden">Catalogue.pdf</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-deep transition px-2 py-1.5 rounded-md hover:bg-secondary"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">Mở rộng</span>
          </a>
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep hover:text-gold transition px-3 py-1.5 rounded-md bg-gold/10 hover:bg-gold/20"
          >
            <Download size={13} />
            Tải PDF
          </a>
        </div>
      </div>

      {/* PDF Embed */}
      <div className="relative bg-secondary">
        <iframe
          src={`${PDF_URL}#toolbar=1&navpanes=0&scrollbar=1`}
          title="Thanh Cong JSC Product Catalogue PDF Viewer"
          className="w-full rounded-b-2xl border-0"
          style={{ height: "75vh", minHeight: "500px" }}
          loading="lazy"
        >
          <div className="flex flex-col items-center justify-center gap-4 py-24 px-8 text-center">
            <div className="text-4xl">📄</div>
            <p className="text-ink-soft">
              Trình duyệt của bạn không hỗ trợ hiển thị PDF trực tuyến. Vui lòng tải file PDF
              về máy để xem.
            </p>
            <a
              href={PDF_URL}
              download
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              <Download size={16} /> Tải Catalogue PDF
            </a>
          </div>
        </iframe>
      </div>
    </div>
  );
}
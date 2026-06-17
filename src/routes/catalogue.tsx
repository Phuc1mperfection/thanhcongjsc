import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  Eye,
  FileText,
  Hammer,
  Layers,
  Mail,
  Mountain,
  ShieldCheck,
  Volume2,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import catalogueCover from "@/assets/catalogue-cover.jpg";

const PDF_URL = "/catalogues/catalogue-thanhcong.pdf";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue sản phẩm | Thanh Cong JSC" },
      {
        name: "description",
        content:
          "Xem và tải catalogue sản phẩm Thanh Cong JSC: khe co giãn, gối cầu, giải pháp địa kỹ thuật, tường chống ồn, bảo dưỡng và vật tư kỹ thuật cho công trình hạ tầng giao thông.",
      },
      { property: "og:title", content: "Catalogue sản phẩm | Thanh Cong JSC" },
      {
        property: "og:description",
        content:
          "Catalogue sản phẩm và giải pháp kỹ thuật hạ tầng giao thông của Thanh Cong JSC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/catalogue" },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
  component: CataloguePage,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[800ms] ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const productGroups = [
  {
    icon: Layers,
    title: "Khe co giãn",
    desc: "Giải pháp khe co giãn cho công trình cầu đường, hỗ trợ hấp thụ chuyển vị do nhiệt độ, tải trọng, rung động và dịch chuyển kết cấu.",
    items: [
      "Khe co giãn dạng cao su",
      "Khe co giãn dạng ray",
      "Khe co giãn răng lược",
      "Khe co giãn dạng module",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Gối cầu",
    desc: "Nhóm sản phẩm gối cầu hỗ trợ truyền tải trọng, cho phép chuyển vị và xoay trong quá trình khai thác công trình.",
    items: [
      "Gối chậu / Pot Bearing",
      "Gối chỏm cầu / Spherical Bearing",
      "Gối cao su đàn hồi",
      "Gối đĩa / Disc Bearing",
    ],
  },
  {
    icon: Mountain,
    title: "Giải pháp địa kỹ thuật",
    desc: "Giải pháp phục vụ gia cố nền đất, ổn định mái dốc, chống xói, chống đá rơi và nâng cao độ bền vững công trình.",
    items: [
      "Lưới chống đá rơi",
      "Lưới chống xói",
      "Lưới địa gia cường",
      "Gia cố mái taluy",
    ],
  },
  {
    icon: Volume2,
    title: "Tường chống ồn",
    desc: "Hệ thống kiểm soát tiếng ồn cho tuyến giao thông, khu đô thị, khu công nghiệp và các khu vực nhạy cảm về môi trường.",
    items: [
      "Tường chống ồn tiêu âm",
      "Tường chống ồn phản âm",
      "Giải pháp kết hợp tiêu âm và phản âm",
    ],
  },
  {
    icon: Wrench,
    title: "Bảo dưỡng & Vật tư kỹ thuật",
    desc: "Cung cấp vật tư thay thế, phụ kiện kỹ thuật, neo, bu lông và hỗ trợ bảo trì cho các hạng mục hạ tầng giao thông.",
    items: [
      "Bảo trì hạng mục cầu đường",
      "Thay thế vật tư kỹ thuật",
      "Cung cấp phụ kiện, neo, bu lông",
      "Tư vấn vật tư theo yêu cầu dự án",
    ],
  },
];

const overviewItems = [
  {
    icon: BookOpen,
    value: "05",
    label: "Nhóm sản phẩm chính",
  },
  {
    icon: FileText,
    value: "PDF",
    label: "Xem trực tuyến & tải về",
  },
  {
    icon: Hammer,
    value: "B2B",
    label: "Phục vụ dự án hạ tầng",
  },
  {
    icon: CheckCircle2,
    value: "TC",
    label: "Thanh Cong JSC",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

function CataloguePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 md:pt-20">
        <Hero />
        <CatalogueStats />
        <CatalogueContent />
        <HighlightStrip />
        <PdfViewer />
        <DownloadCTA />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#F8F7F3]">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2E2C70 1px, transparent 1px), linear-gradient(to bottom, #2E2C70 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-deep/10 blur-3xl" />
      </div>

      <div className="container-tc relative py-20 md:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-deep/15 bg-white/70 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-deep shadow-sm">
              <BookOpen size={14} className="text-gold" />
              Catalogue sản phẩm
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-deep leading-[1.05] tracking-tight">
              Catalogue{" "}
              <span className="relative inline-block text-gold">
                Thanh Cong JSC
                <span className="absolute left-0 right-0 -bottom-1 h-[6px] rounded-full bg-gradient-to-r from-gold/40 via-gold/25 to-deep/25" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 text-base md:text-lg text-ink-soft leading-8 max-w-2xl">
              Xem và tải catalogue sản phẩm của Thanh Cong JSC, bao gồm các nhóm giải pháp kỹ
              thuật cho cầu đường, hạ tầng giao thông, địa kỹ thuật, tường chống ồn, bảo dưỡng
              và vật tư kỹ thuật liên quan.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogue-viewer"
                className="inline-flex items-center gap-2 rounded-md bg-deep px-6 py-3 text-sm font-semibold text-white shadow-card hover:brightness-110 transition"
              >
                <Eye size={16} />
                Xem catalogue
              </a>

              <a
                href={PDF_URL}
                download
                aria-label="Tải catalogue sản phẩm Thanh Cong JSC PDF"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-card hover:brightness-95 transition"
              >
                <Download size={16} />
                Tải PDF
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Khe co giãn", "Gối cầu", "Địa kỹ thuật", "Tường chống ồn"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-deep/10 bg-white px-4 py-2 text-xs font-medium text-deep shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-deep/10 via-transparent to-gold/25 blur-2xl" />

            <div className="relative rounded-[2rem] bg-white p-4 shadow-card-hover border border-deep/10 rotate-[-2deg]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-secondary">
                <img
                  src={catalogueCover}
                  alt="Catalogue sản phẩm Thanh Cong JSC"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F16]/40 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-deep backdrop-blur">
                  Catalogue PDF
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-4 text-deep shadow-card backdrop-blur">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    Thanh Cong JSC
                  </div>
                  <div className="mt-1 font-display text-lg font-bold leading-snug">
                    Giải pháp kỹ thuật hạ tầng giao thông
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 hidden md:flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card-hover border border-border">
              <FileText size={20} className="text-gold" />
              <div className="text-xs">
                <div className="font-semibold text-deep">PDF Catalogue</div>
                <div className="text-ink-soft">Có thể xem hoặc tải về</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OVERVIEW BAR
───────────────────────────────────────────── */

function CatalogueStats() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-tc py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 80}>
                <div className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold mb-3">
                    <Icon size={20} />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-deep">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-soft uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CATALOGUE CONTENT
───────────────────────────────────────────── */

function CatalogueContent() {
  return (
    <section className="container-tc py-20 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-deep/15 bg-deep/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-deep">
            <Layers size={13} className="text-gold" />
            Nội dung Catalogue
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
            Những gì có trong catalogue
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Tổng quan các nhóm sản phẩm và lĩnh vực giải pháp kỹ thuật chính của Thanh Cong JSC
            phục vụ công trình cầu đường, hạ tầng giao thông và công trình đô thị.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal key={group.title} delay={index * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-card-hover hover:-translate-y-1 hover:border-gold transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-deep transition">
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-sm text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-deep">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {group.desc}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-deep/85">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 h-[2px] w-10 bg-gold group-hover:w-20 transition-all duration-500" />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HIGHLIGHT STRIP
───────────────────────────────────────────── */

function HighlightStrip() {
  const items = [
    {
      num: "01",
      title: "Khe co giãn & Gối cầu",
      text: "Hệ thống khe co giãn và gối cầu đạt tiêu chuẩn quốc tế, phù hợp với mọi loại cầu đường từ nhỏ đến lớn.",
    },
    {
      num: "02",
      title: "Giải pháp toàn diện",
      text: "Từ tư vấn, thiết kế đến cung cấp vật tư và giám sát lắp đặt — đồng hành trọn vẹn cùng dự án.",
    },
    {
      num: "03",
      title: "Hỗ trợ kỹ thuật",
      text: "Đội ngũ kỹ sư giàu kinh nghiệm luôn sẵn sàng hỗ trợ tư vấn giải pháp phù hợp cho từng dự án cụ thể.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-deep/5 border-y border-border">
      <div className="container-tc py-14 md:py-18">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => (
            <Reveal key={item.num} delay={index * 100}>
              <div className="flex gap-5">
                <span className="font-display text-3xl font-bold text-gold/40 shrink-0 leading-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PDF VIEWER
───────────────────────────────────────────── */

function PdfViewer() {
  return (
    <section
      id="catalogue-viewer"
      className="bg-secondary/50 border-y border-border py-20 md:py-24 scroll-mt-28"
    >
      <div className="container-tc">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-deep/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-deep">
              <Eye size={13} className="text-gold" />
              Xem trực tuyến
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
              Xem catalogue trực tuyến
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Quý khách có thể xem trực tiếp catalogue sản phẩm Thanh Cong JSC trên website hoặc
              tải file PDF để lưu trữ, gửi hồ sơ và tham khảo cho dự án.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-deep/15 bg-white px-5 py-3 text-sm font-semibold text-deep hover:border-gold hover:text-gold transition"
              >
                Mở trong tab mới
                <ArrowRight size={16} />
              </a>

              <a
                href={PDF_URL}
                download
                aria-label="Tải catalogue sản phẩm Thanh Cong JSC PDF"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground hover:brightness-95 transition"
              >
                Tải PDF
                <Download size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-card-hover">
            <div className="flex items-center justify-between border-b border-border bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-deep">
                  <FileText size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-deep">
                    Catalogue sản phẩm Thanh Cong JSC
                  </div>
                  <div className="text-xs text-ink-soft">
                    Xem trước file PDF
                  </div>
                </div>
              </div>

              <a
                href={PDF_URL}
                download
                className="hidden sm:inline-flex items-center gap-2 rounded-md bg-deep px-4 py-2 text-xs font-semibold text-white hover:brightness-110 transition"
              >
                <Download size={14} />
                Tải xuống
              </a>
            </div>

            <div className="bg-[#f3f3f3] p-2 md:p-4">
              <object
                data={`${PDF_URL}#toolbar=1&navpanes=0&scrollbar=1`}
                type="application/pdf"
                className="h-[520px] md:h-[680px] lg:h-[760px] w-full rounded-2xl bg-white"
                aria-label="Trình xem catalogue sản phẩm Thanh Cong JSC"
              >
                <iframe
                  src={`${PDF_URL}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Trình xem catalogue sản phẩm Thanh Cong JSC"
                  className="h-[520px] md:h-[680px] lg:h-[760px] w-full rounded-2xl bg-white"
                />

                <div className="rounded-2xl bg-white p-8 text-center">
                  <p className="text-ink-soft">
                    Trình duyệt của bạn có thể không hỗ trợ xem PDF trực tiếp. Vui lòng tải
                    catalogue bằng nút bên dưới.
                  </p>

                  <a
                    href={PDF_URL}
                    download
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
                  >
                    Tải Catalogue PDF
                    <Download size={16} />
                  </a>
                </div>
              </object>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DOWNLOAD CTA
───────────────────────────────────────────── */

function DownloadCTA() {
  return (
    <section className="relative overflow-hidden bg-deep text-white">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" />

      <div className="container-tc relative py-20 md:py-24 grid lg:grid-cols-[1.4fr_auto] gap-10 items-center">
        <Reveal>
          <div>
            <div className="h-px w-12 bg-gold mb-5" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Tải catalogue sản phẩm
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed max-w-2xl">
              Lưu catalogue PDF để tham khảo nhóm sản phẩm, ứng dụng kỹ thuật và các lĩnh vực
              giải pháp cho dự án hạ tầng của bạn.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={PDF_URL}
            download
            aria-label="Tải catalogue sản phẩm Thanh Cong JSC PDF"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground hover:brightness-95 transition shadow-lg"
          >
            <Download size={18} />
            Tải Catalogue PDF
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT CTA
───────────────────────────────────────────── */

function ContactCTA() {
  return (
    <section className="container-tc py-20 md:py-24">
      <Reveal>
        <div className="rounded-3xl border border-border bg-white p-8 md:p-12 lg:p-14 shadow-sm grid lg:grid-cols-[1.3fr_auto] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Tư vấn dự án
            </div>

            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-deep">
              Cần tư vấn giải pháp cho dự án?
            </h2>

            <p className="mt-4 text-ink-soft max-w-2xl leading-relaxed">
              Liên hệ Thanh Cong JSC để được tư vấn sản phẩm, hỗ trợ giải pháp kỹ thuật và báo
              giá phù hợp với yêu cầu công trình.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-deep px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
            >
              <Mail size={16} />
              Liên hệ tư vấn
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-deep/20 bg-white px-6 py-3 text-sm font-semibold text-deep hover:bg-secondary transition"
            >
              Xem sản phẩm
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
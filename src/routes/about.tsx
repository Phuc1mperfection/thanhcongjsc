import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Handshake,
  Leaf,
  Award,
  Layers,
  Wrench,
  PackageSearch,
  Lightbulb,
  HardHat,
  Factory,
  Mail,
  Phone,
  Globe,
  MapPin,
  FileText,
  User,
  Briefcase,
  Quote,
  Compass,
  Target,
  Cog,
  Hammer,
  Mountain,
  Volume2,
  LifeBuoy,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Thanh Cong JSC" },
      {
        name: "description",
        content:
          "Thanh Cong JSC — Đối tác cung cấp vật tư, thiết bị và giải pháp kỹ thuật cho công trình cầu đường, hạ tầng giao thông, địa kỹ thuật và đô thị tại Việt Nam.",
      },
      { property: "og:title", content: "Giới thiệu — Thanh Cong JSC" },
      {
        property: "og:description",
        content:
          "Doanh nghiệp kỹ thuật hạ tầng — vật tư, thiết bị và giải pháp cho các công trình cầu đường, giao thông và đô thị.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://bridge-builder-vision.lovable.app/about",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://bridge-builder-vision.lovable.app/about",
      },
    ],
  }),
  component: AboutPage,
});

/* ---------- Reveal on scroll helper ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[800ms] ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </As>
  );
}

/* ---------- Decorative engineering background ---------- */
function TechBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-deep/10 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-gold/15 blur-3xl animate-pulse-slow" />
    </div>
  );
}

/* ---------- Hero engineering illustration (SVG) ---------- */
function HeroVisual() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* outer frame */}
      <div className="absolute inset-0 rounded-[2rem] border border-deep/10 bg-gradient-to-br from-secondary via-white to-accent/40 shadow-card-hover overflow-hidden">
        {/* grid */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 480" fill="none">
          <defs>
            <pattern id="hgrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" stroke="#2E2C70" strokeOpacity="0.08" strokeWidth="1" />
            </pattern>
            <linearGradient id="cable" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#DA9E29" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#DA9E29" stopOpacity="1" />
              <stop offset="100%" stopColor="#DA9E29" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <rect width="600" height="480" fill="url(#hgrid)" />
          {/* deck */}
          <path d="M40 320 H560" stroke="#2E2C70" strokeWidth="3" />
          <path d="M40 332 H560" stroke="#2E2C70" strokeOpacity="0.4" strokeWidth="1.5" />
          {/* pylons */}
          <path d="M180 320 L180 90" stroke="#2E2C70" strokeWidth="4" />
          <path d="M420 320 L420 90" stroke="#2E2C70" strokeWidth="4" />
          {/* cables */}
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 180 + i * 30;
            return (
              <line
                key={`l-${i}`}
                x1="180"
                y1="100"
                x2={x}
                y2="320"
                stroke="url(#cable)"
                strokeWidth="1.5"
              />
            );
          })}
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 420 - i * 30;
            return (
              <line
                key={`r-${i}`}
                x1="420"
                y1="100"
                x2={x}
                y2="320"
                stroke="url(#cable)"
                strokeWidth="1.5"
              />
            );
          })}
          {/* nodes */}
          {[120, 260, 340, 480].map((x) => (
            <circle key={x} cx={x} cy="320" r="5" fill="#DA9E29" />
          ))}
          <circle cx="180" cy="90" r="6" fill="#2E2C70" />
          <circle cx="420" cy="90" r="6" fill="#2E2C70" />
          {/* base */}
          <path d="M40 360 H560" stroke="#2E2C70" strokeOpacity="0.2" strokeDasharray="4 6" />
        </svg>

        {/* floating product blocks */}
        <div className="absolute top-6 left-6 rounded-xl bg-white/90 backdrop-blur border border-deep/10 px-3 py-2 shadow-card animate-float">
          <div className="text-[10px] uppercase tracking-widest text-ink-soft">Module</div>
          <div className="text-xs font-semibold text-deep">Gối cầu · Pot Bearing</div>
        </div>
        <div
          className="absolute bottom-20 right-6 rounded-xl bg-white/90 backdrop-blur border border-deep/10 px-3 py-2 shadow-card animate-float"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="text-[10px] uppercase tracking-widest text-ink-soft">Joint</div>
          <div className="text-xs font-semibold text-deep">Khe co giãn · Modular</div>
        </div>
        <div className="absolute top-1/2 left-8 -translate-y-1/2 rounded-xl bg-deep text-white px-3 py-2 shadow-card animate-pulse-slow">
          <div className="text-[10px] uppercase tracking-widest text-gold">Solution</div>
          <div className="text-xs font-semibold">Geotech · Slope</div>
        </div>

        {/* corner accents */}
        <span className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-gold rounded-tr-xl" />
        <span className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-deep rounded-bl-xl" />
      </div>
    </div>
  );
}

/* ---------- Sticky section nav ---------- */
const SECTIONS = [
  { id: "tong-quan", label: "Tổng quan" },
  { id: "loi-ngo", label: "Lời ngỏ" },
  { id: "tam-nhin-su-menh", label: "Tầm nhìn & Sứ mệnh" },
  { id: "gia-tri-cot-loi", label: "Giá trị cốt lõi" },
  { id: "linh-vuc-hoat-dong", label: "Lĩnh vực hoạt động" },
  { id: "san-pham-chinh", label: "Sản phẩm chính" },
  { id: "so-do-to-chuc", label: "Sơ đồ tổ chức" },
  { id: "thong-tin-cong-ty", label: "Thông tin công ty" },
];

function StickyNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id);
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-background/85 backdrop-blur-md border-y border-border">
      <div className="container-tc">
        <nav
          aria-label="Mục lục trang giới thiệu"
          className="flex gap-1 overflow-x-auto no-scrollbar py-2"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 px-3 py-2 text-xs md:text-sm font-medium rounded-md whitespace-nowrap transition relative ${
                active === s.id
                  ? "text-deep bg-secondary"
                  : "text-ink-soft hover:text-deep hover:bg-secondary/60"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute left-3 right-3 -bottom-[5px] h-[2px] bg-gold rounded" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ label, symbol }: { label: string; symbol: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-display text-4xl md:text-5xl font-bold text-deep">{symbol}</span>
      <span className="text-xs md:text-sm text-ink-soft uppercase tracking-wider">{label}</span>
    </div>
  );
}

/* ============================================================ */
/*                         PAGE                                  */
/* ============================================================ */

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <StickyNav />
        <Overview />
        <Letter />
        <VisionMission />
        <CoreValues />
        <Fields />
        <MainProducts />
        <OrgChart />
        <CompanyInfo />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const heroImageSrc = "/images/about-hero.jpg";

  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] text-deep">
      {/* Light editorial background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] grid-bg" />
        <div className="absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#2E2C70]/10 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#DA9E29]/18 blur-3xl animate-float" />
      </div>

      <div className="container-tc relative min-h-[calc(100vh-5rem)] py-16 md:py-20 lg:py-24">
        <div className="grid min-h-[680px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left image block */}
          <Reveal>
            <figure className="group relative m-0 aspect-[5/4] overflow-hidden rounded-[0.8rem] border border-deep/10 bg-white shadow-card-hover lg:aspect-[23/28]">
              <img
                src={heroImageSrc}
                alt="Thanh Cong JSC - giải pháp kỹ thuật hạ tầng giao thông"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F16]/45 via-transparent to-transparent" />

              {/* Top label */}
              <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-[#2E2C70] backdrop-blur">
                Infrastructure · Engineering
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-4 text-[#2E2C70] shadow-card backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DA9E29]">
                  Thanh Cong JSC
                </div>
                <div className="mt-1 font-display text-lg font-bold">
                  Uy tín – Chất lượng – Hợp tác phát triển
                </div>
              </div>

              {/* Corner accents */}
              <span className="absolute right-5 top-5 h-10 w-10 rounded-tr-2xl border-r-2 border-t-2 border-[#DA9E29]" />
              <span className="absolute bottom-5 left-5 h-10 w-10 rounded-bl-2xl border-b-2 border-l-2 border-[#2E2C70]" />
            </figure>
          </Reveal>

          {/* Right editorial text */}
          <div className="py-6 lg:py-20">
            <Reveal delay={120}>
              <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#DA9E29]">
                <span className="h-px w-10 bg-[#DA9E29]" />
                Giới thiệu Thanh Cong JSC
              </div>
            </Reveal>

            <Reveal delay={220}>
              <h1 className="m-0 mb-[1rem] md:mb-[1.5rem] lg:mb-[2rem] text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold leading-[1.25] md:leading-[1.1] lg:leading-[1] tracking-[-0.01em] text-left">
                <span className="inline-block mb-[-0.3em] pb-[0.3em] [transition:background-position_600ms_cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,rgba(218,158,41,0.78)_0%,rgba(218,158,41,0.78)_42%,#15152A_56%,#2E2C70_82%,#2E2C70_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent hover:bg-[position:0%_0]">
                  Đồng hành cùng những công trình hạ tầng bền vững
                </span>
              </h1>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
                Công ty Cổ phần Kinh doanh Thương mại và Xây dựng Thành Công cung cấp vật tư, thiết
                bị và giải pháp kỹ thuật cho các công trình cầu đường, hạ tầng giao thông, địa kỹ
                thuật và công trình đô thị.
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Vật tư kỹ thuật", "Giải pháp hạ tầng", "Bảo dưỡng & thay thế"].map(
                  (item, index) => (
                    <span
                      key={item}
                      style={{ animationDelay: `${index * 160}ms` }}
                      className="inline-flex items-center gap-2 rounded-full border border-deep/10 bg-white px-4 py-2 text-xs font-medium text-deep shadow-sm transition hover:border-[#DA9E29]/70 hover:text-[#2E2C70]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#DA9E29]" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal delay={520}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#linh-vuc-hoat-dong"
                  className="group inline-flex items-center gap-3 text-base font-bold text-deep"
                >
                  <span className="bg-current bg-[linear-gradient(90deg,rgba(218,158,41,0.75)_0%,rgba(218,158,41,0.75)_48%,#2E2C70_55%,#2E2C70_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent transition-[background-position] duration-500 ease-out group-hover:bg-[position:0%_0]">
                    Khám phá năng lực
                  </span>

                  <svg
                    height="8"
                    viewBox="0 0 27 8"
                    width="27"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      clipRule="evenodd"
                      d="M23.172.464l3.182 3.182a.5.5 0 010 .708l-3.182 3.182a.5.5 0 11-.707-.708L24.793 4.5H0v-1h24.793l-2.328-2.328a.5.5 0 11.707-.708z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="#san-pham-chinh"
                  className="group inline-flex items-center gap-3 text-base font-bold text-ink-soft transition hover:text-[#DA9E29]"
                >
                  Xem sản phẩm chính
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------------- Overview ---------------- */
function Overview() {
  const highlights = [
    {
      icon: Target,
      title: "Giải pháp phù hợp từng dự án",
      desc: "Lựa chọn vật tư và phương án kỹ thuật theo yêu cầu cụ thể của từng công trình.",
    },
    {
      icon: Layers,
      title: "Sản phẩm phục vụ công trình hạ tầng",
      desc: "Hệ sản phẩm cho cầu đường, giao thông, địa kỹ thuật và công trình đô thị.",
    },
    {
      icon: LifeBuoy,
      title: "Đồng hành cung cấp, bảo trì và thay thế",
      desc: "Hỗ trợ xuyên suốt vòng đời dự án — từ cung ứng đến bảo trì vật tư.",
    },
  ];
  return (
    <section id="tong-quan" className="relative section-pad bg-background scroll-mt-32">
      <div className="container-tc grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20">
        <div className="relative">
          <Reveal>
            <span className="eyebrow eyebrow-line">Tổng quan</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep leading-tight">
              Tổng quan về <span className="text-gold">Thanh Cong JSC</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Thanh Cong JSC là doanh nghiệp hoạt động trong lĩnh vực cung cấp vật tư, thiết bị và
              giải pháp kỹ thuật phục vụ các công trình xây dựng và hạ tầng. Chúng tôi tập trung vào
              chất lượng sản phẩm, hiệu quả kỹ thuật, độ bền công trình và khả năng đồng hành cùng
              khách hàng trong từng giai đoạn triển khai dự án.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Với định hướng phát triển bền vững, Thanh Cong JSC xây dựng hệ thống cung ứng ổn định,
              lựa chọn các sản phẩm phù hợp với yêu cầu kỹ thuật của từng công trình, đồng thời chú
              trọng nâng cao chất lượng dịch vụ, năng lực phối hợp và trách nhiệm trong quá trình
              thực hiện dự án.
            </p>
          </Reveal>
        </div>

        <div className="space-y-5">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120}>
              <article className="group relative rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-gold transition-all duration-300">
                <span className="absolute left-0 top-6 bottom-6 w-[3px] bg-gold rounded-r" />
                <div className="flex items-start gap-4 pl-3">
                  <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-secondary text-deep group-hover:bg-deep group-hover:text-white transition">
                    <h.icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-deep">{h.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Lời ngỏ ---------------- */
function Letter() {
  return (
    <section id="loi-ngo" className="relative section-pad scroll-mt-32">
      <div className="container-tc">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2E2C70] via-[#28265f] to-[#1f1d54] text-white shadow-card-hover">
            <div className="absolute inset-0 grid-bg opacity-[0.08]" />
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gold" />

            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 p-8 md:p-14">
              <div className="shrink-0">
                <div className="grid place-items-center h-16 w-16 rounded-2xl bg-gold/15 border border-gold/30">
                  <Quote className="text-gold" size={28} />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
                  Lời ngỏ
                </span>
                <p className="mt-5 font-display text-xl md:text-2xl leading-relaxed text-white/95">
                  Kính gửi Quý Đối tác và Quý Khách hàng, Thanh Cong JSC trân trọng cảm ơn sự quan
                  tâm, tin tưởng và hợp tác của Quý vị trong suốt thời gian qua. Với phương châm{" "}
                  <span className="text-gold">"Uy tín – Chất lượng – Hợp tác phát triển"</span>,
                  chúng tôi cam kết không ngừng hoàn thiện năng lực, mở rộng hợp tác và mang lại
                  những giá trị thiết thực cho khách hàng, đối tác và các công trình hạ tầng.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />
                  <span className="text-sm uppercase tracking-widest text-white/80">
                    Trân trọng cảm ơn!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Vision & Mission ---------------- */
function VisionMission() {
  const cards = [
    {
      icon: Compass,
      eyebrow: "01 — Tầm nhìn",
      title: "Tầm nhìn",
      desc: "Trở thành doanh nghiệp uy tín tại Việt Nam trong lĩnh vực cung cấp vật tư, thiết bị và giải pháp kỹ thuật cho các công trình xây dựng và hạ tầng. Thanh Cong JSC hướng tới xây dựng hệ thống cung ứng chuyên nghiệp, mở rộng hợp tác trong và ngoài nước, từng bước khẳng định vị thế trên thị trường.",
    },
    {
      icon: Target,
      eyebrow: "02 — Sứ mệnh",
      title: "Sứ mệnh",
      desc: "Cung cấp sản phẩm, vật tư và giải pháp kỹ thuật chất lượng, đáp ứng yêu cầu của các dự án xây dựng và hạ tầng. Chúng tôi đồng hành cùng khách hàng nhằm góp phần nâng cao hiệu quả đầu tư, đảm bảo tiến độ, chất lượng và tính bền vững của công trình.",
    },
  ];
  return (
    <section id="tam-nhin-su-menh" className="relative section-pad bg-secondary/60 scroll-mt-32">
      <div className="container-tc">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow eyebrow-line">Định hướng</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
              Tầm nhìn & Sứ mệnh
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 140}>
              <article className="group relative h-full rounded-3xl bg-white border border-border p-8 md:p-10 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-gold transition-all duration-500 overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-ink-soft uppercase">
                    {c.eyebrow}
                  </span>
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-secondary text-deep group-hover:bg-deep group-hover:text-gold transition-all duration-500 group-hover:rotate-6">
                    <c.icon size={26} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-bold text-deep">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Core Values ---------------- */
function CoreValues() {
  const values = [
    {
      n: "01",
      icon: ShieldCheck,
      title: "Uy tín",
      desc: "Đặt chữ Tín làm nền tảng cho mọi cam kết, minh bạch trong hợp tác và nhất quán trong hành động.",
    },
    {
      n: "02",
      icon: Award,
      title: "Chất lượng",
      desc: "Cam kết cung cấp sản phẩm và dịch vụ đáp ứng tiêu chuẩn kỹ thuật, phù hợp yêu cầu của từng dự án.",
    },
    {
      n: "03",
      icon: Lightbulb,
      title: "Sáng tạo",
      desc: "Không ngừng đổi mới tư duy, cải tiến giải pháp và ứng dụng công nghệ nhằm nâng cao hiệu quả cho khách hàng.",
    },
    {
      n: "04",
      icon: Handshake,
      title: "Hợp tác",
      desc: "Đề cao tinh thần hợp tác minh bạch, tin cậy và cùng phát triển với khách hàng, đối tác và cộng đồng.",
    },
    {
      n: "05",
      icon: Leaf,
      title: "Phát triển bền vững",
      desc: "Hướng tới sự cân bằng giữa hiệu quả kinh doanh, trách nhiệm xã hội và bảo vệ môi trường.",
    },
  ];
  return (
    <section id="gia-tri-cot-loi" className="relative section-pad scroll-mt-32">
      <div className="container-tc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow eyebrow-line">Giá trị cốt lõi</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
                Năm giá trị định hình cách chúng tôi làm việc
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-widest text-ink-soft">
              <span className="h-px w-10 bg-gold" /> 05 giá trị
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <article className="group relative h-full rounded-2xl bg-white border border-border p-6 hover:-translate-y-2 hover:shadow-card-hover hover:border-gold transition-all duration-500 overflow-hidden">
                <span className="absolute top-0 right-0 h-12 w-12 rounded-bl-3xl bg-gold/10 group-hover:bg-gold/30 transition-colors" />
                <span className="absolute top-3 right-3 text-gold">
                  <v.icon size={18} />
                </span>
                <div className="font-display text-3xl font-bold text-gold/80">{v.n}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.desc}</p>
                <span className="absolute inset-x-6 bottom-4 h-[2px] bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fields ---------------- */
function Fields() {
  const items = [
    { icon: PackageSearch, title: "Thương mại vật tư xây dựng" },
    { icon: Factory, title: "Cung cấp thiết bị cho công trình hạ tầng" },
    { icon: Cog, title: "Cung cấp giải pháp kỹ thuật cho dự án xây dựng" },
    { icon: Wrench, title: "Cung cấp vật tư, phụ kiện và thiết bị kỹ thuật" },
    { icon: Sparkles, title: "Tư vấn giải pháp phù hợp theo yêu cầu dự án" },
    { icon: HardHat, title: "Bảo trì, thay thế vật tư cho công trình hạ tầng" },
  ];
  return (
    <section
      id="linh-vuc-hoat-dong"
      className="relative section-pad bg-secondary/50 scroll-mt-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="container-tc relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow eyebrow-line">Lĩnh vực</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
              Lĩnh vực hoạt động
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-ink-soft">
              Hệ sinh thái sản phẩm và dịch vụ phục vụ toàn bộ vòng đời công trình hạ tầng.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <article
                className={`group h-full p-7 md:p-8 transition-colors duration-500 ${
                  i % 2 === 0 ? "bg-white" : "bg-secondary/70"
                } hover:bg-white`}
              >
                <div className="flex items-start justify-between">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-deep transition">
                    <it.icon size={22} />
                  </div>
                  <span className="font-display text-sm text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-deep leading-snug">
                  {it.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep">
                  <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
                  <ArrowRight
                    size={16}
                    className="text-gold transition-transform group-hover:translate-x-1"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Main Products ---------------- */
function MainProducts() {
  const products = [
    {
      id: "expansion-joints",
      icon: Layers,
      title: "Khe co giãn",
      desc: "Giải pháp khe co giãn giúp hấp thụ chuyển vị do nhiệt độ, tải trọng và dao động, bảo vệ kết cấu và đảm bảo công trình vận hành êm thuận.",
      items: [
        "Khe co giãn dạng cao su / Rubber Expansion Joints",
        "Khe co giãn dạng ray / Rail-Type Expansion Joints",
        "Khe co giãn răng lược / Finger Expansion Joints",
        "Khe co giãn dạng module / Modular-Type Expansion Joints",
      ],
    },
    {
      id: "bridge-bearings",
      icon: Hammer,
      title: "Gối cầu",
      desc: "Gối cầu truyền tải trọng từ kết cấu nhịp xuống mố, trụ và cho phép chuyển vị trong quá trình khai thác, góp phần đảm bảo an toàn và tuổi thọ công trình.",
      items: [
        "Gối chậu / Pot Bearing",
        "Gối chỏm cầu / Spherical Bearing",
        "Gối cao su đàn hồi / Elastomeric Rubber Bearing",
        "Gối đĩa / Disc Bearing",
      ],
    },
    {
      id: "geotechnical",
      icon: Mountain,
      title: "Giải pháp địa kỹ thuật",
      desc: "Các giải pháp địa kỹ thuật hỗ trợ gia cố nền đất, ổn định mái dốc, chống xói và tăng khả năng chịu tải cho công trình.",
      items: [
        "Lưới thép chống đá lăn, đá rơi / Rockfall Protection Systems",
        "Lưới chống xói / Erosion Control Systems",
        "Lưới địa gia cường cốt sợi thủy tinh / Fiberglass Geogrids",
        "Tường chắn có cốt / Reinforced Retaining Walls",
        "Gia cố mái taluy",
      ],
    },
    {
      id: "noise-barriers",
      icon: Volume2,
      title: "Tường chống ồn",
      desc: "Tường chống ồn được lắp đặt dọc tuyến giao thông, khu đô thị và khu công nghiệp nhằm giảm tiếng ồn, cải thiện môi trường sống và chất lượng không gian đô thị.",
      items: [
        "Tường chống ồn tiêu âm",
        "Tường chống ồn phản âm",
        "Giải pháp kết hợp tiêu âm và phản âm",
      ],
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Bảo dưỡng & Vật tư",
      desc: "Thanh Cong JSC cung cấp dịch vụ bảo trì, thay thế hạng mục giao thông, vật tư kỹ thuật và phụ kiện liên quan, góp phần nâng cao hiệu quả khai thác công trình.",
      items: [
        "Bảo trì hạng mục cầu đường",
        "Thay thế vật tư kỹ thuật",
        "Cung cấp phụ kiện, neo, bu lông và vật tư liên quan",
        "Tư vấn giải pháp kỹ thuật theo dự án",
      ],
    },
  ];

  return (
    <section id="san-pham-chinh" className="relative section-pad scroll-mt-32">
      <div className="container-tc">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow eyebrow-line">Sản phẩm chính</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
              Giải pháp kỹ thuật cho công trình hạ tầng
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-ink-soft">
              Thanh Cong JSC cung cấp các nhóm sản phẩm và giải pháp kỹ thuật phục vụ công trình cầu
              đường, hạ tầng giao thông, địa kỹ thuật và đô thị.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16 md:space-y-24">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.id}>
                <article className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  {/* Visual */}
                  <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
                    <div className="group relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary via-white to-accent/40 shadow-card hover:shadow-card-hover transition-all duration-500">
                      <div className="absolute inset-0 grid-bg opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                        <div className="relative grid place-items-center h-40 w-40 rounded-3xl bg-white shadow-card-hover border border-border">
                          <p.icon className="text-deep" size={64} strokeWidth={1.2} />
                          <span className="absolute -inset-2 rounded-3xl border border-gold/30 animate-pulse-slow" />
                        </div>
                      </div>
                      <span className="absolute top-5 left-5 text-[11px] font-semibold tracking-[0.22em] uppercase text-deep bg-white/80 backdrop-blur px-3 py-1 rounded-full">
                        0{i + 1} / 0{products.length}
                      </span>
                      <span className="absolute bottom-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-deep text-gold">
                        <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={reverse ? "lg:order-1" : ""}>
                    <span className="font-display text-sm text-gold tracking-widest uppercase">
                      Nhóm sản phẩm {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-deep">
                      {p.title}
                    </h3>
                    <div className="mt-3 h-[3px] w-16 bg-gold" />
                    <p className="mt-5 text-ink-soft leading-relaxed">{p.desc}</p>

                    <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                      {p.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-sm text-deep/90 rounded-lg px-3 py-2 hover:bg-secondary transition"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/products"
                      className="group/btn mt-7 inline-flex items-center gap-2 rounded-md bg-deep px-5 py-3 text-sm font-semibold text-deep-foreground hover:brightness-110 transition shadow-card"
                    >
                      Xem chi tiết
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Organization Chart ---------------- */
function OrgChart() {
  const departments = [
    "Phòng Kinh doanh",
    "Phòng Kỹ thuật",
    "Phòng Dự án",
    "Phòng Cung ứng",
    "Phòng Hành chính – Kế toán",
  ];
  return (
    <section id="so-do-to-chuc" className="relative section-pad bg-secondary/60 scroll-mt-32">
      <div className="container-tc">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow eyebrow-line">Tổ chức</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
              Sơ đồ tổ chức
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-14 flex flex-col items-center">
            {/* Top node */}
            <div className="relative z-10 rounded-2xl bg-deep text-white px-8 py-5 shadow-card-hover text-center min-w-[240px]">
              <div className="text-[11px] uppercase tracking-widest text-gold">Lãnh đạo</div>
              <div className="mt-1 font-display text-xl font-bold">Ban Giám đốc</div>
            </div>

            {/* connector */}
            <div className="h-10 w-px bg-gold" />
            <div className="hidden md:block h-px w-[80%] max-w-4xl bg-gold/60" />

            {/* Departments */}
            <div className="mt-0 md:-mt-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 w-full max-w-5xl">
              {departments.map((d, i) => (
                <Reveal key={d} delay={i * 100}>
                  <div className="relative pt-10">
                    <span className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-10 w-px bg-gold/60" />
                    <div className="group rounded-2xl bg-white border border-border p-5 text-center shadow-card hover:shadow-card-hover hover:border-gold hover:-translate-y-1 transition-all duration-500">
                      <div className="mx-auto grid place-items-center h-10 w-10 rounded-xl bg-secondary text-deep group-hover:bg-gold group-hover:text-deep transition">
                        <Briefcase size={18} />
                      </div>
                      <div className="mt-3 font-display text-sm md:text-base font-semibold text-deep">
                        {d}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Company Info ---------------- */
function CompanyInfo() {
  const rows: { icon: React.ElementType; label: string; value: React.ReactNode }[] = [
    {
      icon: FileText,
      label: "Tên doanh nghiệp",
      value: "Công ty CP Kinh doanh Thương mại và Xây dựng Thành Công",
    },
    {
      icon: FileText,
      label: "Tên tiếng Anh",
      value: "Thanh Cong Trading and Construction Joint Stock Company",
    },
    {
      icon: MapPin,
      label: "Địa chỉ trụ sở",
      value: "Số 17 Ngõ 189/82 Đường Nguyễn Ngọc Vũ, P. Yên Hòa, TP. Hà Nội, Việt Nam",
    },
    { icon: FileText, label: "Mã số thuế", value: "0109817495" },
    {
      icon: Briefcase,
      label: "Lĩnh vực hoạt động",
      value:
        "Thương mại vật tư xây dựng; cung cấp thiết bị cho công trình hạ tầng; cung cấp giải pháp kỹ thuật cho các dự án, công trình xây dựng",
    },
    { icon: User, label: "Người đại diện", value: "Ông Hoàng Chí Công – Giám đốc" },
    {
      icon: Phone,
      label: "Hotline",
      value: (
        <a href="tel:+84393120936" className="hover:text-gold">
          0393 120 936
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      value: (
        <>
          <a href="mailto:info@thanhcongjsc.com" className="hover:text-gold">
            info@thanhcongjsc.com
          </a>{" "}
          /{" "}
          <a href="mailto:contact@thanhcongjsc.com" className="hover:text-gold">
            contact@thanhcongjsc.com
          </a>
        </>
      ),
    },
    {
      icon: Globe,
      label: "Website",
      value: (
        <a href="https://thanhcongjsc.com" className="hover:text-gold">
          thanhcongjsc.com
        </a>
      ),
    },
  ];
  return (
    <section id="thong-tin-cong-ty" className="relative section-pad scroll-mt-32">
      <div className="container-tc grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
        <div>
          <Reveal>
            <span className="eyebrow eyebrow-line">Hồ sơ doanh nghiệp</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep">
              Thông tin công ty
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Thông tin pháp nhân và đầu mối liên hệ chính thức của Thanh Cong JSC. Quý đối tác và
              khách hàng có thể liên hệ trực tiếp qua các kênh dưới đây để được hỗ trợ tư vấn vật
              tư, thiết bị và giải pháp kỹ thuật cho dự án.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-deep to-[#1f1d54] text-white p-6 shadow-card-hover">
              <div className="text-[11px] tracking-widest uppercase text-gold">Hotline</div>
              <a
                href="tel:+84393120936"
                className="block mt-1 font-display text-3xl font-bold hover:text-gold transition"
              >
                0393 120 936
              </a>
              <div className="mt-4 text-sm text-white/80">
                Sẵn sàng tư vấn giải pháp kỹ thuật cho dự án.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="rounded-3xl border border-border bg-white shadow-card overflow-hidden">
            <ul className="divide-y divide-border">
              {rows.map((r) => (
                <li
                  key={r.label}
                  className="group flex items-start gap-4 p-5 md:p-6 hover:bg-secondary/60 transition"
                >
                  <div className="shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-secondary text-deep group-hover:bg-gold group-hover:text-deep transition">
                    <r.icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1 grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-4">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-ink-soft pt-0.5">
                      {r.label}
                    </span>
                    <span className="text-sm md:text-[15px] text-deep font-medium break-words">
                      {r.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative section-pad">
      <div className="container-tc">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2E2C70] via-[#28265f] to-[#1f1d54] text-white p-10 md:p-16 shadow-card-hover">
            <div className="absolute inset-0 grid-bg opacity-[0.08]" />
            <svg
              className="absolute right-0 top-0 h-full w-1/2 opacity-30 pointer-events-none"
              viewBox="0 0 400 400"
              fill="none"
            >
              <defs>
                <linearGradient id="c2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#DA9E29" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#DA9E29" stopOpacity="0" />
                </linearGradient>
              </defs>
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 40}
                  x2="400"
                  y2={i * 40 - 120}
                  stroke="url(#c2)"
                  strokeWidth="1"
                />
              ))}
            </svg>
            <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.4fr_auto] items-center gap-8">
              <div>
                <span className="text-[11px] tracking-[0.22em] uppercase text-gold">
                  Tư vấn dự án
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Cần tư vấn giải pháp cho dự án của bạn?
                </h2>
                <p className="mt-4 text-white/80 max-w-2xl">
                  Liên hệ Thanh Cong JSC để được tư vấn sản phẩm, vật tư và giải pháp kỹ thuật phù
                  hợp với yêu cầu công trình.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-95 transition"
                >
                  Liên hệ tư vấn <ArrowRight size={16} />
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

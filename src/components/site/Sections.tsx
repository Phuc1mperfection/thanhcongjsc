import { ArrowRight, Download, ShieldCheck, Layers, Wrench, ChevronRight, Building2, Construction, Mountain, Volume2, HardHat, Activity, Ruler, BadgeCheck, Mail, MessageSquare, FileText, Globe, Phone, MapPin } from "lucide-react";
import heroBridge from "@/assets/hero-bridge.jpg";
import imgExpansion from "@/assets/product-expansion.jpg";
import imgBearing from "@/assets/product-bearing.jpg";
import imgGeo from "@/assets/product-geo.jpg";
import imgNoise from "@/assets/product-noise.jpg";
import imgMaintenance from "@/assets/product-maintenance.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 mask-[radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="absolute top-0 right-0 w-160 h-160 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="container-tc relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow eyebrow-line">
            <span className="inline-block h-0.5 w-7 bg-gold" />
            Engineering · Infrastructure · Vietnam
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-deep leading-[1.05] tracking-tight">
            Giải pháp kỹ thuật <span className="text-gold">hạ tầng giao thông</span> cho công trình bền vững
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Thanh Cong JSC cung cấp sản phẩm, vật tư và giải pháp kỹ thuật cho cầu đường,
            hạ tầng giao thông, địa kỹ thuật và công trình đô thị.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-deep px-6 py-3.5 text-sm font-semibold text-deep-foreground hover:brightness-110 transition shadow-[0_8px_24px_-12px_rgba(46,44,112,0.5)]"
            >
              Xem sản phẩm <ArrowRight size={16} />
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 rounded-md border border-deep/15 bg-white px-6 py-3.5 text-sm font-semibold text-deep hover:border-gold hover:text-gold transition"
            >
              <Download size={16} /> Tải catalogue
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ["5+", "Nhóm sản phẩm"],
              ["20+", "Hạng mục kỹ thuật"],
              ["100%", "Tư vấn theo dự án"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-gold pl-4">
                <dt className="text-2xl md:text-3xl font-display font-bold text-deep">{n}</dt>
                <dd className="text-xs uppercase tracking-wider text-ink-soft mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold/40 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-deep/5 rounded-2xl -z-10" />
            <div className="relative overflow-hidden rounded-2xl shadow-(--shadow-card-hover) ring-1 ring-deep/10">
              <img
                src={heroBridge}
                alt="Cầu dây văng hiện đại - hạ tầng giao thông Việt Nam"
                width={1536}
                height={1152}
                className="w-full h-105 md:h-130 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  <span className="h-[2px] w-6 bg-gold" /> Tiêu biểu
                </div>
                <div className="mt-2 text-white font-display font-semibold text-lg">
                  Cầu dây văng & công trình nhịp lớn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const cards = [
    { icon: Layers, title: "Giải pháp kỹ thuật phù hợp từng dự án", desc: "Tư vấn lựa chọn sản phẩm và cấu hình kỹ thuật theo yêu cầu thực tế của từng công trình." },
    { icon: ShieldCheck, title: "Sản phẩm phục vụ công trình hạ tầng trọng điểm", desc: "Đáp ứng yêu cầu kỹ thuật cho cầu đường, cao tốc, cầu vượt đô thị và hạ tầng giao thông." },
    { icon: Wrench, title: "Đồng hành trong cung cấp, bảo trì và thay thế vật tư", desc: "Hỗ trợ dài hạn về cung cấp, kiểm tra, bảo trì và thay thế hạng mục trong khai thác." },
  ];
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-tc">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow"><span className="h-[2px] w-7 bg-gold" /> Về chúng tôi</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-deep tracking-tight">
              Về Thanh Cong JSC
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Thanh Cong JSC là đơn vị cung cấp sản phẩm, vật tư và giải pháp kỹ thuật phục vụ
              các công trình cầu đường, hạ tầng giao thông và công trình đô thị. Chúng tôi tập
              trung vào chất lượng sản phẩm, hiệu quả kỹ thuật, độ bền công trình và sự đồng hành
              lâu dài cùng khách hàng.
            </p>
            <a href="#products" className="mt-6 inline-flex items-center gap-2 text-deep font-semibold hover:text-gold transition">
              Khám phá sản phẩm & giải pháp <ArrowRight size={16} />
            </a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-1 gap-4">
            {cards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-5 rounded-xl border border-border bg-card p-6 hover:border-gold/60 hover:shadow-[var(--shadow-card)] transition"
              >
                <div className="shrink-0 h-12 w-12 rounded-lg bg-deep text-deep-foreground grid place-items-center group-hover:bg-gold group-hover:text-gold-foreground transition">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-deep text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Product = {
  id: string;
  title: string;
  english?: string;
  image: string;
  description: string;
  keywords: string[];
  applications: string[];
  items: string[];
  cta: string;
};

const PRODUCTS: Product[] = [
  {
    id: "khe-co-gian",
    title: "Khe co giãn",
    english: "Expansion Joints",
    image: imgExpansion,
    description:
      "Khe co giãn là hạng mục kỹ thuật tại các vị trí giãn đoạn, giúp hấp thụ chuyển vị do nhiệt độ, tải trọng và dao động. Giải pháp này bảo vệ kết cấu, hạn chế hư hỏng và đảm bảo công trình vận hành êm thuận.",
    keywords: ["Rubber", "Rail-Type", "Finger", "Modular"],
    applications: ["Cầu đường bộ", "Cao tốc", "Cầu vượt đô thị"],
    items: [
      "Khe co giãn dạng cao su / Rubber Expansion Joints",
      "Khe co giãn dạng ray / Rail-Type Expansion Joints",
      "Khe co giãn răng lược / Finger Expansion Joints",
      "Khe co giãn dạng module / Modular-Type Expansion Joints",
    ],
    cta: "Xem chi tiết",
  },
  {
    id: "goi-cau",
    title: "Gối cầu",
    english: "Bridge Bearings",
    image: imgBearing,
    description:
      "Gối cầu là bộ phận quan trọng truyền tải trọng từ kết cấu nhịp xuống mố, trụ và cho phép các chuyển vị trong quá trình khai thác. Sử dụng gối cầu chất lượng cao giúp đảm bảo an toàn, ổn định và tăng tuổi thọ công trình.",
    keywords: ["Pot", "Spherical", "Elastomeric", "Disc"],
    applications: ["Cầu nhịp lớn", "Cầu vượt", "Hạ tầng giao thông"],
    items: [
      "Gối chậu / Pot Bearing",
      "Gối chỏm cầu / Spherical Bearing",
      "Gối cao su đàn hồi / Elastomeric Rubber Bearing",
      "Gối đĩa / Disc Bearing",
    ],
    cta: "Xem chi tiết",
  },
  {
    id: "dia-ky-thuat",
    title: "Giải pháp địa kỹ thuật",
    english: "Geotechnical Solutions",
    image: imgGeo,
    description:
      "Các giải pháp địa kỹ thuật được áp dụng để gia cố nền đất, ổn định mái dốc và tăng khả năng chịu tải. Nhờ đó, công trình đảm bảo an toàn và nâng cao độ bền vững trong thi công và khai thác.",
    keywords: ["Rockfall", "Erosion", "Geogrid", "Retaining Wall"],
    applications: ["Đường đèo", "Mái taluy", "Nền đường"],
    items: [
      "Lưới thép chống đá lăn, đá rơi / Rockfall Protection Systems",
      "Lưới chống xói / Erosion Control Systems",
      "Lưới địa gia cường cốt sợi thủy tinh / Fiberglass Geogrids",
      "Tường chắn có cốt / Reinforced Retaining Walls",
      "Gia cố mái taluy",
    ],
    cta: "Liên hệ tư vấn",
  },
  {
    id: "tuong-chong-on",
    title: "Tường chống ồn",
    english: "Noise Barriers",
    image: imgNoise,
    description:
      "Tường chống ồn được lắp đặt dọc các tuyến giao thông, khu đô thị và khu công nghiệp nhằm giảm tiếng ồn từ phương tiện và hoạt động công nghiệp. Giải pháp này giúp cải thiện môi trường sống và nâng cao chất lượng không gian đô thị.",
    keywords: ["Tiêu âm", "Phản âm", "Kết hợp"],
    applications: ["Cao tốc đô thị", "Khu dân cư", "Khu công nghiệp"],
    items: [
      "Tường chống ồn tiêu âm",
      "Tường chống ồn phản âm",
      "Giải pháp kết hợp tiêu âm và phản âm",
    ],
    cta: "Xem chi tiết",
  },
  {
    id: "bao-duong",
    title: "Bảo dưỡng & Cung cấp vật tư",
    english: "Maintenance & Supply",
    image: imgMaintenance,
    description:
      "Thanh Cong JSC cung cấp dịch vụ bảo trì, thay thế hạng mục giao thông, vật tư và giải pháp kỹ thuật, góp phần nâng cao độ bền và hiệu quả khai thác công trình.",
    keywords: ["Bảo trì", "Thay thế", "Phụ kiện", "Tư vấn"],
    applications: ["Cầu đường khai thác", "Hạng mục thay thế", "Tư vấn kỹ thuật"],
    items: [
      "Bảo trì hạng mục cầu đường",
      "Thay thế vật tư kỹ thuật",
      "Cung cấp phụ kiện, neo, bu lông và vật tư liên quan",
      "Tư vấn giải pháp kỹ thuật theo dự án",
    ],
    cta: "Liên hệ tư vấn",
  },
];

export function Products() {
  return (
    <section id="products" className="section-pad bg-secondary/40">
      <div className="container-tc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow"><span className="h-[2px] w-7 bg-gold" /> Danh mục</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-deep tracking-tight max-w-2xl">
              Sản phẩm & Giải pháp
            </h2>
            <p className="mt-4 text-ink-soft max-w-2xl">
              Năm nhóm sản phẩm và giải pháp kỹ thuật trọng tâm, đáp ứng yêu cầu thiết kế và khai thác
              của công trình hạ tầng giao thông.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p, idx) => (
            <article
              key={p.id}
              id={p.id}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/60 hover:shadow-[var(--shadow-card-hover)] transition-all ${
                idx === PRODUCTS.length - 1 && PRODUCTS.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`grid ${idx === PRODUCTS.length - 1 && PRODUCTS.length % 2 === 1 ? "md:grid-cols-2" : ""}`}>
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-deep">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {p.english}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-display font-bold text-2xl">{p.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-sm text-ink-soft leading-relaxed">{p.description}</p>

                  <div className="mt-5">
                    <div className="text-[11px] uppercase tracking-wider text-deep font-semibold mb-2">
                      Hạng mục
                    </div>
                    <ul className="space-y-1.5">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-ink">
                          <ChevronRight size={14} className="text-gold mt-1 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.keywords.map((k) => (
                      <span
                        key={k}
                        className="text-[11px] px-2 py-1 rounded-md bg-secondary text-deep font-medium"
                      >
                        {k}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-4">
                    <div className="text-xs text-ink-soft">
                      <span className="font-semibold text-deep">Ứng dụng:</span>{" "}
                      {p.applications.join(" · ")}
                    </div>
                    <a
                      href="#contact"
                      className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-deep hover:text-gold transition"
                    >
                      {p.cta} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Applications() {
  const apps = [
    { icon: Construction, label: "Cầu đường bộ" },
    { icon: Activity, label: "Cầu cao tốc" },
    { icon: Building2, label: "Cầu vượt đô thị" },
    { icon: Ruler, label: "Công trình hạ tầng giao thông" },
    { icon: HardHat, label: "Khu công nghiệp" },
    { icon: Mountain, label: "Công trình đô thị và dân sinh" },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container-tc">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center inline-flex">
            <span className="h-[2px] w-7 bg-gold" /> Phạm vi ứng dụng
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-deep tracking-tight">
            Ứng dụng trong công trình
          </h2>
          <p className="mt-4 text-ink-soft">
            Giải pháp kỹ thuật của Thanh Cong JSC phục vụ nhiều loại hình công trình hạ tầng và đô thị.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {apps.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-gold/60 transition"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition" />
              <div className="h-11 w-11 rounded-lg bg-deep/5 grid place-items-center text-deep group-hover:bg-gold group-hover:text-gold-foreground transition">
                <Icon size={22} />
              </div>
              <div className="mt-4 font-display font-semibold text-deep">{label}</div>
              <div className="mt-2 h-0.5 w-8 bg-gold/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capability() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Độ bền cao",
      desc: "Giải pháp phù hợp với điều kiện môi trường khắc nghiệt và yêu cầu khai thác lâu dài.",
    },
    {
      icon: Activity,
      title: "An toàn kết cấu",
      desc: "Hỗ trợ truyền tải trọng, hấp thụ chuyển vị, giảm rung động và bảo vệ công trình.",
    },
    {
      icon: BadgeCheck,
      title: "Phù hợp tiêu chuẩn kỹ thuật",
      desc: "Sản phẩm được định hướng theo các tiêu chuẩn thiết kế cầu đường và hạ tầng hiện hành.",
    },
    {
      icon: Wrench,
      title: "Dễ bảo trì và thay thế",
      desc: "Giải pháp thuận tiện cho thi công, kiểm tra, bảo trì và thay thế trong quá trình khai thác.",
    },
  ];
  return (
    <section id="capability" className="section-pad relative bg-deep text-deep-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gold/10 rounded-full blur-3xl" />
      <div className="container-tc relative">
        <div className="max-w-2xl">
          <div className="eyebrow text-gold">
            <span className="h-[2px] w-7 bg-gold" /> Năng lực
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Năng lực và giá trị kỹ thuật
          </h2>
          <p className="mt-4 text-white/75">
            Tập trung vào chất lượng sản phẩm, độ bền công trình và hiệu quả khai thác lâu dài.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:border-gold/60 hover:bg-white/[0.06] transition"
            >
              <div className="h-12 w-12 rounded-lg bg-gold text-gold-foreground grid place-items-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Catalogue() {
  return (
    <section id="catalogue" className="section-pad bg-white">
      <div className="container-tc">
        <div className="rounded-3xl bg-gradient-to-br from-secondary/60 via-white to-gold-soft/40 border border-border p-8 md:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="h-[2px] w-7 bg-gold" /> Tài liệu
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-deep tracking-tight">
              Tải catalogue sản phẩm
            </h2>
            <p className="mt-4 text-ink-soft max-w-xl leading-relaxed">
              Xem thông tin chi tiết về sản phẩm, cấu tạo, đặc điểm kỹ thuật và ứng dụng trong
              catalogue của Thanh Cong JSC.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/catalogues/catalogue-thanhcong.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:brightness-95 transition"
              >
                <Download size={16} /> Tải catalogue PDF
              </a>
              <a
                href="/catalogue"
                className="inline-flex items-center gap-2 rounded-md border border-deep/20 bg-white px-6 py-3.5 text-sm font-semibold text-deep hover:border-gold hover:text-gold transition"
              >
                <FileText size={16} /> Xem catalogue
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-ink-soft">
              <div className="flex items-center gap-2"><FileText size={14} className="text-gold" /> Định dạng PDF</div>
              <div className="flex items-center gap-2"><BadgeCheck size={14} className="text-gold" /> Cập nhật mới nhất</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 bg-gold/10 rounded-2xl rotate-3" />
              <div className="absolute -inset-3 bg-deep/5 rounded-2xl -rotate-3" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[var(--shadow-card-hover)] ring-1 ring-deep/10 bg-deep">
                <img
                  src={imgExpansion}
                  alt="Catalogue Thanh Cong JSC"
                  loading="lazy"
                  width={600}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/60 to-deep/95" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Catalogue 2025</div>
                    <div className="mt-3 font-display font-bold text-2xl leading-tight">
                      Sản phẩm & Giải pháp kỹ thuật hạ tầng giao thông
                    </div>
                  </div>
                  <div>
                    <div className="h-[2px] w-12 bg-gold mb-3" />
                    <div className="font-display font-bold">THANH CONG <span className="text-gold">JSC</span></div>
                    <div className="text-xs text-white/70 mt-1">thanhcongjsc.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-secondary/40">
      <div className="container-tc grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="h-[2px] w-7 bg-gold" /> Liên hệ</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-deep tracking-tight">
            Liên hệ tư vấn dự án
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed max-w-md">
            Liên hệ Thanh Cong JSC để được tư vấn sản phẩm, giải pháp kỹ thuật và báo giá phù hợp
            với yêu cầu công trình.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { Icon: Globe, label: "Website", value: "thanhcongjsc.com" },
              { Icon: Mail, label: "Email", value: "info@thanhcongjsc.com", href: "mailto:info@thanhcongjsc.com" },
              { Icon: Phone, label: "Điện thoại", value: "[Cập nhật số điện thoại]" },
              { Icon: MapPin, label: "Địa chỉ", value: "[Cập nhật địa chỉ công ty]" },
            ].map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-deep text-deep-foreground grid place-items-center">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft">{label}</div>
                  {href ? (
                    <a href={href} className="font-semibold text-deep hover:text-gold">{value}</a>
                  ) : (
                    <div className="font-semibold text-deep">{value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:info@thanhcongjsc.com"; }}
            className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-card)]"
          >
            <h3 className="font-display font-semibold text-deep text-xl">Gửi yêu cầu tư vấn</h3>
            <p className="mt-1 text-sm text-ink-soft">Vui lòng cung cấp thông tin để chúng tôi liên hệ lại.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Họ và tên" name="name" required />
              <Field label="Công ty / Đơn vị" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Số điện thoại" name="phone" />
            </div>
            <div className="mt-4">
              <Field label="Sản phẩm / Giải pháp quan tâm" name="topic" placeholder="VD: Khe co giãn, gối cầu..." />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-deep uppercase tracking-wider mb-1.5">
                Nội dung yêu cầu
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep/30 focus:border-deep"
                placeholder="Mô tả ngắn về dự án, hạng mục và yêu cầu kỹ thuật..."
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-95 transition"
              >
                <MessageSquare size={16} /> Gửi yêu cầu tư vấn
              </button>
              <a
                href="mailto:info@thanhcongjsc.com"
                className="inline-flex items-center gap-2 rounded-md border border-deep/20 bg-white px-6 py-3 text-sm font-semibold text-deep hover:border-gold hover:text-gold transition"
              >
                <Mail size={16} /> Gửi email
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-deep uppercase tracking-wider mb-1.5">
        {label}{required && <span className="text-gold"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep/30 focus:border-deep"
      />
    </div>
  );
}

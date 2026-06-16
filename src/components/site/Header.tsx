import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/brand/logo.png";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const NAV: NavItem[] = [
  { href: "/#home", label: "Trang chủ" },
  {
    href: "/about",
    label: "Giới thiệu",
    children: [
      { href: "/about#tong-quan", label: "Tổng quan" },
      { href: "/about#tam-nhin-su-menh", label: "Tầm nhìn & Sứ mệnh" },
      { href: "/about#gia-tri-cot-loi", label: "Giá trị cốt lõi" },
      { href: "/about#linh-vuc-hoat-dong", label: "Lĩnh vực hoạt động" },
      { href: "/about#san-pham-chinh", label: "Sản phẩm chính" },
      { href: "/about#so-do-to-chuc", label: "Sơ đồ tổ chức" },
      { href: "/about#thong-tin-cong-ty", label: "Thông tin công ty" },
    ],
  },
  { href: "/products", label: "Sản phẩm & Giải pháp" },
  { href: "/#capability", label: "Năng lực" },
  { href: "/#catalogue", label: "Catalogue" },
  { href: "/#contact", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-tc flex h-16 md:h-20 items-center justify-between">
        <a href="/#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Thanh Cong JSC" className="w-20" />
          <div className="leading-tight">
            <div className="text-deep font-display font-bold text-base tracking-tight">
              THANH CONG <span className="text-gold">JSC</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Engineering · Infrastructure
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) =>
            n.children ? (
              <div key={n.href} className="relative group">
                <Link
                  to={n.href}
                  className="px-3 py-2 text-sm font-medium text-ink hover:text-deep inline-flex items-center gap-1"
                >
                  {n.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="w-64 rounded-xl border border-border bg-background shadow-card-hover overflow-hidden py-2">
                    {n.children.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2.5 text-sm text-ink hover:bg-secondary hover:text-deep transition"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 text-sm font-medium text-ink hover:text-deep relative group"
              >
                {n.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground hover:brightness-95 transition"
          >
            Liên hệ tư vấn
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-tc py-4 flex flex-col gap-1">
            {NAV.map((n) =>
              n.children ? (
                <div key={n.href}>
                  <button
                    onClick={() => setMobileSub((p) => (p === n.href ? null : n.href))}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium text-ink hover:bg-secondary"
                  >
                    {n.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileSub === n.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSub === n.href && (
                    <div className="pl-3 border-l-2 border-gold ml-3 my-1 flex flex-col">
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm font-medium text-deep hover:bg-secondary rounded-md"
                      >
                        Trang giới thiệu
                      </a>
                      {n.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="px-3 py-2 text-sm text-ink-soft hover:bg-secondary hover:text-deep rounded-md"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm font-medium text-ink hover:bg-secondary"
                >
                  {n.label}
                </a>
              )
            )}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-4 py-3 text-sm font-semibold text-gold-foreground"
            >
              Liên hệ tư vấn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand/logo.png";

const NAV = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Giới thiệu" },
  { href: "#products", label: "Sản phẩm & Giải pháp" },
  { href: "#capability", label: "Năng lực" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="/" className="flex items-center gap-3 group">
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
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-ink hover:text-deep relative group"
            >
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
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
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-ink hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
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

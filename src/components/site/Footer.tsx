/* eslint-disable prettier/prettier */
import { Mail, Globe, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="container-tc py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-md p-1.5">
              <img src={logo} alt="Thanh Cong JSC" width={36} height={36} className="h-9 w-9" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base">
                THANH CONG <span className="text-gold">JSC</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                Engineering · Infrastructure 
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Cung cấp sản phẩm, vật tư và giải pháp kỹ thuật cho cầu đường, hạ tầng giao thông,
            địa kỹ thuật và công trình đô thị.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Điều hướng
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              ["#home", "Trang chủ"],
              ["#about", "Giới thiệu"],
              ["#products", "Sản phẩm & Giải pháp"],
              ["#capability", "Năng lực"],
              ["#catalogue", "Catalogue"],
              ["#contact", "Liên hệ"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="hover:text-gold transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Sản phẩm
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              "Khe co giãn",
              "Gối cầu",
              "Giải pháp địa kỹ thuật",
              "Tường chống ồn",
              "Bảo dưỡng & Vật tư",
            ].map((s) => (
              <li key={s}>
                <a href="#products" className="hover:text-gold transition">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Liên hệ
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <Globe size={16} className="text-gold mt-0.5 shrink-0" />
              <span>thanhcongjsc.com</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-gold mt-0.5 shrink-0" />
              <a href="mailto:info@thanhcongjsc.com" className="hover:text-gold">
                info@thanhcongjsc.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-gold mt-0.5 shrink-0" />
              <span>[Cập nhật số điện thoại]</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>[Cập nhật địa chỉ công ty]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tc py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Thanh Cong JSC. Tất cả quyền được bảo lưu.</div>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-gold/60" />
            <span>Giải pháp kỹ thuật hạ tầng giao thông</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

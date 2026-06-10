import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Subcategory {
  name: string;
  icon: string;
}

interface Product {
  id: string;
  nameEn: string;
  nameVn: string;
  image: string;
  icon: string;
  accent: string;
  description: string;
  subcategories: Subcategory[];
  applications: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
}

// Generate placeholder background based on product
function getPlaceholderStyle(accent: string, id: string) {
  const colors: Record<string, string> = {
    "expansion-joints": "from-blue-600 to-blue-400",
    "bridge-bearings": "from-amber-600 to-amber-400",
    geotechnical: "from-slate-700 to-slate-500",
    "noise-barriers": "from-orange-600 to-orange-400",
    maintenance: "from-slate-600 to-slate-400",
  };

  return colors[id] || accent;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const gradientClass = getPlaceholderStyle(product.accent, product.id);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl transition-all duration-700 hover:shadow-2xl"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Hero Background with Image or Placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} transition-all duration-500 group-hover:scale-105`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
                              linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 30px 30px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex flex-col h-full transition-all duration-700 ${isExpanded ? "p-8" : "p-8 justify-end"}`}
      >
        {/* Top Section - Always Visible */}
        <div className="space-y-4">
          {/* Category Label */}
          <div className="inline-flex w-fit">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80 drop-shadow-lg">
              {product.nameEn}
            </span>
          </div>

          {/* Main Title & Description */}
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
              {product.nameVn}
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-md drop-shadow-md">
              {product.description}
            </p>
          </div>
        </div>

        {/* Expandable Section */}
        {isExpanded && (
          <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Subcategories */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 drop-shadow-md">
                Hạng mục
              </p>
              <div className="flex flex-wrap gap-2">
                {product.subcategories.map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 drop-shadow-md"
                  >
                    {sub.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-3 border-t border-white/20 pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 drop-shadow-md">
                Ứng dụng
              </p>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-white/90 flex items-center gap-2 drop-shadow-md"
                  >
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Button - Bottom */}
        <div className={`transition-all duration-700 ${isExpanded ? "mt-8" : "mt-auto"}`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-white/30 transition-all duration-300 group/btn drop-shadow-lg"
          >
            <span>{isExpanded ? "Thu gọn" : "Khám phá"}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Min Height */}
      <style>{`
        .group { min-height: 420px; }
        @media (min-width: 768px) {
          .group { min-height: 500px; }
        }
      `}</style>
    </div>
  );
}

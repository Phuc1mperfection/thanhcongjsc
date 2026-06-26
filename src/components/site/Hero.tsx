"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const METRICS = [
  ["05+", "Nhóm sản phẩm"],
  ["20+", "Hạng mục kỹ thuật"],
  ["100%", "Tư vấn theo dự án"],
] as const;

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const bridgeRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current || !bridgeRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        timeline
          .from("[data-hero-display]", {
            yPercent: 115,
            duration: 1.15,
            stagger: 0.1,
          })
          .from(
            bridgeRef.current,
            {
              y: 110,
              scale: 0.94,
              opacity: 0,
              duration: 1.35,
              ease: "power4.out",
            },
            0.08,
          )
          .from(
            "[data-hero-copy] > *",
            {
              y: 24,
              opacity: 0,
              duration: 0.75,
              stagger: 0.08,
            },
            0.42,
          )
          .from(
            "[data-hero-meta]",
            { x: 22, opacity: 0, duration: 0.7 },
            0.65,
          )
          .from(
            "[data-hero-metric]",
            { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 },
            0.72,
          );

        gsap.to(bridgeRef.current, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }, rootRef);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative isolate min-h-[780px] overflow-hidden bg-[#f3f1eb] pt-16 md:pt-20 lg:h-[90svh] lg:min-h-[760px]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,44,112,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(46,44,112,.09) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 left-[7%] -z-10 w-px bg-deep/10" />
      <div className="pointer-events-none absolute inset-y-0 right-[7%] -z-10 w-px bg-deep/10" />
      <div className="pointer-events-none absolute left-[7%] right-[7%] top-[28%] -z-10 h-px bg-deep/10" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[17%] z-0 select-none lg:top-[11%]"
      >
        <div className="overflow-hidden px-[3vw]">
          <div
            data-hero-display
            className="whitespace-nowrap font-display text-[clamp(5.4rem,15.8vw,15rem)] font-black leading-[0.8] tracking-[-0.085em] text-deep/[0.075]"
          >
            HẠ TẦNG
          </div>
        </div>
        <div className="mt-[5vh] overflow-hidden px-[3vw] text-right lg:mt-[7vh]">
          <div
            data-hero-display
            className="whitespace-nowrap font-display text-[clamp(4.4rem,13.3vw,12.5rem)] font-black leading-[0.8] tracking-[-0.085em] text-transparent [-webkit-text-stroke:1px_rgba(46,44,112,0.2)]"
          >
            BỀN VỮNG
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="absolute inset-x-0 bottom-2 flex h-[72%] justify-center sm:bottom-0 sm:h-[82%] lg:-bottom-10 lg:left-[50%] lg:right-0 lg:h-[112%] lg:justify-start xl:-bottom-14 xl:left-[46%] xl:h-[132%] min-[1800px]:-bottom-20 min-[1800px]:left-[40%] min-[1800px]:h-[152%]">
          <img
            ref={bridgeRef}
            src="/images/high-angle-shot-bandra-worli-sealink-mumbai-enveloped-with-fog.webp"
            alt="Cầu dây văng Bandra-Worli Sea Link"
            width={4480}
            height={6720}
            fetchPriority="high"
            decoding="async"
            className="h-full w-auto max-w-none origin-bottom object-contain drop-shadow-[0_30px_32px_rgba(20,25,40,0.18)]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,.65) 7%, #000 16%, #000 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,.65) 7%, #000 16%, #000 100%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-20 grid min-h-[700px] w-full grid-cols-1 items-start px-[7vw] pb-36 pt-12 md:min-h-[720px] md:pt-16 lg:h-[calc(90svh-5rem)] lg:min-h-[680px] lg:grid-cols-[46%_54%] lg:items-end lg:pb-28 lg:pt-0">
        <div
          data-hero-copy
          className="max-w-[34rem] lg:col-start-1 xl:max-w-[40rem] 2xl:max-w-[44rem]"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-deep">
            <span className="h-px w-9 bg-gold" />
            Engineering · Infrastructure · Vietnam
          </div>
          <h1 className="mt-5 max-w-[12ch] font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-deep sm:text-5xl lg:text-[clamp(3.55rem,3.8vw,5.25rem)]">
            Kiến tạo nền móng cho hạ tầng bền vững.
          </h1>
          <p className="mt-5 max-w-[36rem] text-sm leading-7 text-ink-soft sm:text-base 2xl:text-[1.05rem]">
            Sản phẩm, vật tư và giải pháp kỹ thuật chuyên sâu cho cầu đường, địa kỹ thuật và công
            trình giao thông trọng điểm.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-deep px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(46,44,112,0.65)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Khám phá giải pháp <ArrowRight size={16} />
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 rounded-md border border-deep/20 bg-white/75 px-6 py-3.5 text-sm font-semibold text-deep backdrop-blur transition hover:border-gold hover:text-gold"
            >
              <Download size={16} /> Catalogue
            </a>
          </div>
        </div>
      </div>

      <div
        data-hero-meta
        className="absolute right-[7%] top-28 z-20 hidden text-right lg:block"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-deep">TC / 01</div>
        <div className="mt-2 text-[10px] uppercase leading-5 tracking-[0.18em] text-ink-soft">
          Bridge systems
          <br />
          Technical solutions
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 border-y border-deep/10 bg-white/75 backdrop-blur-md">
        <dl className="grid w-full grid-cols-3 divide-x divide-deep/10 px-[7vw]">
          {METRICS.map(([value, label]) => (
            <div
              data-hero-metric
              key={label}
              className="flex min-h-20 flex-col items-start justify-center gap-0.5 px-4 sm:flex-row sm:items-center sm:gap-5 sm:px-7 lg:min-h-24"
            >
              <dt className="font-display text-xl font-bold tracking-tight text-deep sm:text-3xl">
                {value}
              </dt>
              <dd className="max-w-[8rem] text-[8px] font-semibold uppercase leading-3 tracking-[0.11em] text-ink-soft sm:text-[10px] sm:leading-4">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

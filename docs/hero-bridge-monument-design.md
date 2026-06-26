# Hero Bridge Monument

## Understanding summary

- Replace the current split-card hero with a full-width editorial hero.
- Use the supplied transparent bridge cutout as the central visual subject.
- Keep Thanh Cong JSC's deep-purple and gold brand palette.
- Preserve the current product and catalogue calls to action.
- Use restrained GSAP motion with one cinematic entrance accent.
- Keep the experience professional for B2B infrastructure buyers.

## Final design

Desktop uses a roughly 90svh canvas. Oversized `HA TANG` and `BEN VUNG` display lines sit behind the bridge, while the bridge overlaps the typography to create depth. Supporting copy and calls to action sit at the lower left, technical metadata sits at the upper right, and three proof points form a slim bottom rail.

Mobile uses the same content but moves the bridge to the lower half, reduces the display typography, and keeps calls to action above the image. Decorative engineering grid lines and measurement marks remain low contrast.

Motion uses a GSAP entrance timeline for the display words, bridge, copy, and metrics. A small scrubbed vertical bridge movement adds depth while scrolling. There is no pinned scroll section or continuous animation. `prefers-reduced-motion` receives an immediate static composition.

## Non-functional requirements

- Use the optimized WebP in `public/images` as the LCP image.
- Keep the image eager and high priority with explicit intrinsic dimensions.
- Avoid runtime data, security-sensitive behavior, and third-party asset calls.
- Keep all hero animation isolated in one component with cleanup on unmount.
- Validate at 375px, 768px, 1280px, and 1536px widths.
- Verify both development and production builds.

## Decision log

1. Chose the hybrid desktop/mobile direction over a purely cinematic layout to preserve clarity and performance.
2. Chose Bridge Monument over Engineering Grid and Cinematic Infrastructure for the strongest differentiated visual identity.
3. Chose the supplied real bridge cutout over marketplace clipart because its perspective and alpha quality are stronger.
4. Chose a 90svh desktop hero to reveal the next section and maintain scroll momentum.
5. Chose restrained GSAP motion plus one cinematic entrance accent; no pinning or looping effects.


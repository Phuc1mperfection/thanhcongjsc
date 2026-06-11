declare module "page-flip" {
  export interface PageFlipOptions {
    width: number;
    height: number;
    size: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    showCorners?: boolean;
    clickEvent?: boolean;
    startPage?: number;
    maxShadowOpacity?: number;
    mobileScrollSupport?: boolean;
  }

  export interface PageFlipEvent {
    data: number;
    object: PageFlip;
  }

  export class PageFlip {
    constructor(element: HTMLElement, options: PageFlipOptions);
    loadFromHTML(items: NodeListOf<Element>): void;
    flipPrev(): void;
    flipNext(): void;
    flip(pageNumber: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    destroy(): void;
    on(event: string, callback: (event: PageFlipEvent) => void): void;
    off(event: string, callback: (event: PageFlipEvent) => void): void;
  }
}
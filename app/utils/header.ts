import throttle from "lodash/throttle";

export const SCROLL_THRESHOLD = 0.5;
export const NOT_TOP_THRESHOLD = 0.01;

export const MENU_ITEMS = ["Layanan", "Informasi Publik", "Tentang Kami"] as const;

export const ROUTE_MAP = {
  Layanan: "/layanan",
  "Informasi Publik": "/informasi-publik",
  "Tentang Kami": "/tentang-kami",
} as const;

export const getLinkPath = (name: (typeof MENU_ITEMS)[number]) =>
  ROUTE_MAP[name] ?? "/";

export const createScrollHandler = (setIsScrolled: (value: boolean) => void, setIsNotTop: (value: boolean) => void) =>
  throttle(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > window.innerHeight * SCROLL_THRESHOLD);
    setIsNotTop(scrollPosition > window.innerHeight * NOT_TOP_THRESHOLD);
  }, 100);

export const getMenuItemClassName = (isScrolled: boolean, isActive: boolean) => 
  `inline-block font-medium transition-all duration-300 hover:scale-105 hover:text-emerald-400
  ${
    isActive ? `border-b-2 border-emerald-${isScrolled ? "600" : "300"} ${isScrolled ? "text-emerald-800" : "text-white"}`
    : `${isScrolled ? "text-gray-800" : "text-white"} hover:border-b-2 hover:border-emerald-400`
  }
`;

export const isPublicPage = (pathname: string) => ["/informasi-publik", "/faq"].includes(pathname);
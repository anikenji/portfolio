"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextType {
  scrollY: number;
  scrollProgress: number; // 0-1 across entire page
  viewportHeight: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollProgress: 0,
  viewportHeight: 0,
});

export function useScrollData() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ScrollContextType>({
    scrollY: 0,
    scrollProgress: 0,
    viewportHeight: 0,
  });

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;
      setData({
        scrollY,
        scrollProgress,
        viewportHeight: window.innerHeight,
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>
  );
}

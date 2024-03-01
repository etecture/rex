import { RefObject, useEffect, useState } from "react";

export const useIsScrolled = (ref: RefObject<HTMLDivElement>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollTop = (event.target as Element).scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    ref.current?.addEventListener("scroll", handleScroll);

    return () => {
      ref.current?.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isScrolled;
};

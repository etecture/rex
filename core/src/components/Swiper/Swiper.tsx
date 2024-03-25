import { type ReactNode, useRef } from "react";
import { Scrollbar, type ScrollbarProps } from "..";
import { type UseSwiperProps, useSwiper } from "../..";

export interface SwiperProps extends Partial<UseSwiperProps> {
  children?: ReactNode;
  scrollbarProps?: ScrollbarProps;
}

const Swiper = (props: SwiperProps) => {
  const { children, scrollbarProps, ...useSwiperProps } = props;

  const viewportRef = useRef<HTMLDivElement>(null);

  useSwiper({ viewportRef, ...useSwiperProps });

  return (
    <Scrollbar viewportRef={viewportRef} {...scrollbarProps}>
      {children}
    </Scrollbar>
  );
};

export { Swiper };

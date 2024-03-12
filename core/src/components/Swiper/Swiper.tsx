import { ReactNode, useRef } from "react";
import { Scrollbar, ScrollbarProps } from "..";
import { UseSwiperProps, useSwiper } from "../..";
import styles from "./Swiper.module.css";
import clsx from "clsx";

export interface SwiperProps extends Partial<UseSwiperProps> {
  children?: ReactNode;
  scrollbarProps?: ScrollbarProps;
}

const Swiper = (props: SwiperProps) => {
  const { children, scrollbarProps, ...useSwiperProps } = props;

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  useSwiper({ viewportRef, dragRef, ...useSwiperProps });

  return (
    <Scrollbar viewportRef={viewportRef} {...scrollbarProps}>
      <div ref={dragRef} className={styles.dragLayer} />
      {children}
    </Scrollbar>
  );
};

export interface SwiperBackgroundProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

Swiper.Background = (props: SwiperBackgroundProps) => {
  const { children, ...divProps } = props;
  return (
    <div {...divProps} className={clsx(styles.backgroundLayer, divProps.className)}>
      {children}
    </div>
  );
};

export interface SwiperForegroundProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

Swiper.Foreground = (props: SwiperForegroundProps) => {
  const { children, ...divProps } = props;
  return (
    <div {...divProps} className={clsx(styles.foregroundLayer, divProps.className)}>
      {children}
    </div>
  );
};

export { Swiper };

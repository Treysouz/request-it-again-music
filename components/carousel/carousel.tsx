"use client";

import {
  useState,
  useRef,
  useEffect,
  type RefObject,
  useCallback,
} from "react";

import CarouselButton from "./components/carousel-button";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  /**Whether carousel has been scrolled to its start */
  const [carouselAtStart, setCarouselAtStart] = useState(false);
  /**Whether carousel has been scrolled to its end */
  const [carouselAtEnd, setCarouselAtEnd] = useState(false);

  /** Reference to carousel div element */
  const carouselRef: RefObject<HTMLDivElement | null> = useRef(null);

  const checkScrollPosition = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      // Check if at the beginning (with small tolerance for rounding)
      setCarouselAtStart(scrollLeft <= 1);

      // Check if at the end (with small tolerance for rounding)
      setCarouselAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  }, [carouselRef]);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      // Check initial position
      checkScrollPosition();

      // Add scroll event listener
      carousel.addEventListener("scroll", checkScrollPosition);

      // Cleanup
      return () => {
        carousel.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, [carouselRef, checkScrollPosition]);

  return (
    <div className="flex flex-row items-center w-full gap-16">
      <CarouselButton
        direction="l"
        carouselRef={carouselRef}
        disabled={carouselAtStart}
      ></CarouselButton>

      <div className="carousel carousel-center gap-16" ref={carouselRef}>
        {children}
      </div>
      <CarouselButton
        direction="r"
        carouselRef={carouselRef}
        disabled={carouselAtEnd}
      ></CarouselButton>
    </div>
  );
}

import { type RefObject, useRef, useCallback, useState } from "react";
import { Icon } from "@/components";

interface CarouselButtonProps {
  /** The direction the button is intended to scroll the carousel */
  direction: "l" | "r";
  /** Reference to carousel */
  carouselRef: RefObject<HTMLDivElement | null>;
  /** Whether button is disabled */
  disabled?: boolean;
}

/** Button for scrolling image carousel component */
export default function CarouselButton({
  direction,
  carouselRef,
  disabled,
}: CarouselButtonProps) {
  const buttonRef: RefObject<HTMLButtonElement | null> = useRef(null);

  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout>();

  /**
   * onClick handler for carousel button that scrolls carousel on click
   * @param {"l" | "r"} direction - Which direction to scroll carousel
   */
  const scrollCarousel = useCallback(
    (direction: "l" | "r") => {
      const interval = setInterval(() => {
        clearInterval(scrollInterval);

        const carousel = carouselRef?.current;

        carousel?.scrollBy({
          left: direction === "l" ? -300 : +300,
          behavior: "smooth",
        });
      }, 100);
      setScrollInterval(interval);
    },
    [carouselRef, scrollInterval]
  );

  return (
    <button
      className="btn btn-secondary p-1 sm:p-2 rounded-full size-8 sm:size-16 disabled:text-gray-500"
      ref={buttonRef}
      disabled={disabled}
      onMouseOver={() => {
        scrollCarousel(direction);
      }}
      onMouseOut={() => {
        clearInterval(scrollInterval);
      }}
      aria-label={`Scroll Carousel ${direction === "l" ? "Left" : "Right"}`}
    >
      <Icon
        svg={direction === "l" ? "chevron-left" : "chevron-right"}
        className="w-full h-full"
      />
    </button>
  );
}

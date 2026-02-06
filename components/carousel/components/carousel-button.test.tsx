import { render, screen, fireEvent } from "@testing-library/react";
import { useRef } from "react";
import CarouselButton from "./carousel-button";

// Wrapper component to provide ref
function TestWrapper({
  direction,
  disabled,
}: {
  direction: "l" | "r";
  disabled?: boolean;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={carouselRef} data-testid="carousel-element" />
      <CarouselButton
        direction={direction}
        carouselRef={carouselRef}
        disabled={disabled}
      />
    </>
  );
}

beforeEach(() => {
  // Mock scrollBy method
  HTMLDivElement.prototype.scrollBy = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Carousel Button", () => {
  it("should call scrollBy with negative value when left button is hovered", () => {
    render(<TestWrapper direction="l" />);

    const button = screen.getByRole("button", {
      name: /Scroll Carousel Left/i,
    });
    fireEvent.mouseOver(button);

    expect(HTMLDivElement.prototype.scrollBy).toHaveBeenCalledWith({
      left: -300,
      behavior: "smooth",
    });
  });

  it("should call scrollBy with positive value when right button is hovered", () => {
    render(<TestWrapper direction="r" />);

    const button = screen.getByRole("button", {
      name: /Scroll Carousel Right/i,
    });
    fireEvent.mouseOver(button);

    expect(HTMLDivElement.prototype.scrollBy).toHaveBeenCalledWith({
      left: 300,
      behavior: "smooth",
    });
  });
});

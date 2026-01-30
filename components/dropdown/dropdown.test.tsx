import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dropdown from "./dropdown";

const mockToggle = <button>Toggle Menu</button>;
const mockMenu = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe("Dropdown", () => {
  it("should toggle open state when clicked", () => {
    render(<Dropdown label="Navigation" toggle={mockToggle} menu={mockMenu} />);

    const summary = screen.getByLabelText(/Open Navigation Menu/i);
    const details = screen.getByTestId("mobile-nav");

    expect(details).not.toHaveAttribute("open");

    fireEvent.click(summary);

    expect(details).toHaveAttribute("open");
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should close dropdown when clicking outside", async () => {
    render(
      <Dropdown label="Navigation" toggle={mockToggle} menu={mockMenu} open />
    );

    const details = screen.getByTestId("mobile-nav");
    expect(details).toHaveAttribute("open");

    // Click outside the dropdown
    fireEvent.click(document.body);

    await waitFor(() => {
      expect(details).not.toHaveAttribute("open");
    });
  });

  it("should not close dropdown when clicking inside", () => {
    render(
      <Dropdown label="Navigation" toggle={mockToggle} menu={mockMenu} open />
    );

    const details = screen.getByTestId("mobile-nav");
    expect(details).toHaveAttribute("open");

    // Click inside the dropdown
    fireEvent.click(details);

    expect(details).toHaveAttribute("open");
  });

  it("should call onToggle handler when toggled", () => {
    const mockOnToggle = jest.fn();

    render(
      <Dropdown
        label="Navigation"
        toggle={mockToggle}
        menu={mockMenu}
        onToggle={mockOnToggle}
      />
    );

    const details = screen.getByTestId("mobile-nav");
    const summary = screen.getByLabelText(/Open Navigation Menu/i);

    // Click to trigger toggle
    fireEvent.click(summary);

    // Manually trigger the toggle event on the details element
    fireEvent(
      details,
      new Event("toggle", { bubbles: true, cancelable: true })
    );

    expect(mockOnToggle).toHaveBeenCalled();
  });

  it("should cleanup event listeners on unmount", () => {
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

    const { unmount } = render(
      <Dropdown label="Navigation" toggle={mockToggle} menu={mockMenu} />
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });
});

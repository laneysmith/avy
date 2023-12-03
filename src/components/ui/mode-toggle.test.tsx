import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModeToggle } from "components/ui/mode-toggle";
import { wrapper } from "infrastructure/tests/wrappers";

describe("ModeToggle test", () => {
  test("should toggle the theme class on the root element", async () => {
    const user = userEvent.setup();
    render(<ModeToggle />, { wrapper });

    const themeButton = screen.getByRole("button", { name: "Toggle theme" });

    expect(window.document.documentElement).toHaveClass("light");

    await user.click(themeButton);

    expect(window.document.documentElement).toHaveClass("dark");
  });

  test("should toggle the base font size class on the root element", async () => {
    const user = userEvent.setup();
    render(<ModeToggle />, { wrapper });

    const baseFontSizeButton = screen.getByRole("button", {
      name: "Toggle base font size",
    });

    expect(window.document.documentElement).toHaveClass("font-size-normal");

    await user.click(baseFontSizeButton);

    expect(window.document.documentElement).toHaveClass("font-size-big");
  });
});

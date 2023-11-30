import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checklist } from "./checklist";

const ITEMS = [
  {
    id: "one",
    label: "One",
  },
  {
    id: "two",
    label: "Two",
  },
  {
    id: "three",
    label: "Three",
    description: "Optional description for three",
  },
];

describe("Checklist test", () => {
  test("should manage checked item state correctly", async () => {
    const user = userEvent.setup();
    render(<Checklist items={ITEMS} />);

    const first = screen.getByRole("checkbox", { name: "One" });
    const second = screen.getByRole("checkbox", { name: "Two" });
    const third = screen.getByRole("checkbox", {
      name: "Three Optional description for three",
    });

    expect(first).toBeVisible();
    expect(second).toBeVisible();
    expect(third).toBeVisible();

    await user.click(first);

    expect(first).toBeChecked();
    expect(second).not.toBeChecked();
    expect(third).not.toBeChecked();

    await user.click(second);

    expect(first).toBeChecked();
    expect(second).toBeChecked();
    expect(third).not.toBeChecked();

    await user.click(third);

    expect(first).toBeChecked();
    expect(second).toBeChecked();
    expect(third).toBeChecked();

    await user.click(second);

    expect(first).toBeChecked();
    expect(second).not.toBeChecked();
    expect(third).toBeChecked();
  });
});

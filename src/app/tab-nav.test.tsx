import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabNav from "./tab-nav";

describe("TabNav test", () => {
  test("should render the tabs and their respective contents", async () => {
    const user = userEvent.setup();
    render(<TabNav />);

    const planTab = screen.getByRole("tab", { name: "Plan" });
    const rideTab = screen.getByRole("tab", { name: "Ride" });
    const debriefTab = screen.getByRole("tab", { name: "Debrief" });

    expect(planTab).toBeVisible();
    expect(rideTab).toBeVisible();
    expect(debriefTab).toBeVisible();

    await user.click(planTab);

    expect(screen.getByRole("heading", { name: "Plan" })).toBeVisible;

    await user.click(rideTab);

    expect(screen.getByRole("heading", { name: "Ride" })).toBeVisible;

    await user.click(debriefTab);

    expect(screen.getByRole("heading", { name: "Debrief" })).toBeVisible;
  });
});

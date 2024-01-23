import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Scrollbar } from "..";

describe("Scrollbar", () => {
  it("should render", async () => {
    render(
      <Scrollbar mah={1000} data-testid="scrollbar-root">
        <div style={{ height: 1400 }} />
      </Scrollbar>,
    );

    expect(screen.getByTestId("scrollbar-root")).toBeVisible();
  });
});

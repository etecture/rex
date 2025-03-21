import { test } from "@playwright/experimental-ct-react";
import { expect } from "../../expect";
import { DefaultTableStory } from "./DefaultTable.story";

test.use({ viewport: { width: 1920, height: 1080 } });

test.describe("Table", () => {
  test("renders", async ({ mount }) => {
    const component = await mount(<DefaultTableStory />);

    await expect(component).toBeVisible();
  });

  test("shows 3 rows", async ({ mount }) => {
    const component = await mount(<DefaultTableStory rows={3} />);

    // 3 rows + 1 offset row
    await expect(component.locator("tbody tr")).toHaveCount(4);
  });

  test("virtualizes rows", async ({ mount, page }) => {
    const component = await mount(
      <DefaultTableStory rows={500} wrapperHeight={500} rowHeight={50} overscan={10} />,
    );

    // max height 500 / 50 = 10 rows are visible + 10 overscan
    // so exactly 20 rows should be visible + 1 overflow row
    const initialLastRowIndex = await component
      .locator("tbody tr")
      .last()
      .getAttribute("data-index");
    const count = await component.locator("tbody tr").count();
    expect(count).toBe(21);
    expect(initialLastRowIndex).toBe("19");

    // scroll enough for the next overscan element to be rendered
    await component.hover();
    await page.mouse.wheel(0, 51);
    await expect
      .poll(async () => {
        return component.locator("tbody tr").last().getAttribute("data-index");
      })
      .toBe("20");
  });

  test("renders headers", async ({ mount }) => {
    const component = await mount(<DefaultTableStory withHeaders />);

    await expect(component.locator("thead th")).toHaveCount(3);
    await expect(component.getByText("a Header")).toBeInViewport();
    await expect(component.getByText("b Header")).toBeInViewport();
    await expect(component.getByText("c Header")).toBeInViewport();
  });

  test("sticky header", async ({ mount, page }) => {
    const component = await mount(<DefaultTableStory withHeaders />);

    await component.locator("table").hover();
    await page.mouse.wheel(0, 500);

    await expect(component.getByText("a Header")).toBeInViewport();
    await expect(component.getByText("b Header")).toBeInViewport();
    await expect(component.getByText("c Header")).toBeInViewport();
  });

  test("non-sticky header", async ({ mount, page }) => {
    const component = await mount(<DefaultTableStory withHeaders stickyHeader={false} />);

    await expect(component.getByText("a Header")).toBeInViewport();
    await expect(component.getByText("b Header")).toBeInViewport();
    await expect(component.getByText("c Header")).toBeInViewport();

    await component.locator("table").hover();
    await page.mouse.wheel(0, 500);

    await expect(component.getByText("a Header")).not.toBeInViewport();
    await expect(component.getByText("b Header")).not.toBeInViewport();
    await expect(component.getByText("c Header")).not.toBeInViewport();
  });
});

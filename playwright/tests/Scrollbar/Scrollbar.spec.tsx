import { test } from "@playwright/experimental-ct-react";

import { Scrollbar } from "../../../core/src/components";
import { expect } from "../../expect";

test.use({ viewport: { width: 1920, height: 1080 } });

test.describe("Scrollbar", () => {
  test("shows vertical scrollbar", async ({ mount }) => {
    const component = await mount(
      <Scrollbar
        mah={400}
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ height: 1000 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();

    await expect(component.locator(".vertical-track")).not.toBeVisible();
    await expect(component.locator(".horizontal-track")).not.toBeVisible();

    await component.locator(".viewport").hover();

    await expect(component.locator(".vertical-track")).toBeVisible();
    await expect(component.locator(".horizontal-track")).not.toBeVisible();
  });

  test("shows horizontal scrollbar", async ({ mount }) => {
    const component = await mount(
      <Scrollbar
        maw={400}
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ width: 1000, height: 400 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();

    await expect(component.locator(".vertical-track")).not.toBeVisible();
    await expect(component.locator(".horizontal-track")).not.toBeVisible();

    await component.locator(".viewport").hover();

    await expect(component.locator(".vertical-track")).not.toBeVisible();
    await expect(component.locator(".horizontal-track")).toBeVisible();
  });

  test("shows both scrollbars", async ({ mount }) => {
    const component = await mount(
      <Scrollbar
        mah={400}
        maw={400}
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ width: 1000, height: 1000 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();

    await expect(component.locator(".vertical-track")).not.toBeVisible();
    await expect(component.locator(".horizontal-track")).not.toBeVisible();

    await component.locator(".viewport").hover();

    await expect(component.locator(".vertical-track")).toBeVisible();
    await expect(component.locator(".horizontal-track")).toBeVisible();
  });

  test("max width and max height works", async ({ mount }) => {
    const component = await mount(
      <Scrollbar
        mah={400}
        maw={400}
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ width: 1000, height: 1000 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();
    const boundingBox = await component.boundingBox();

    expect(boundingBox?.width).toBe(400);
    expect(boundingBox?.height).toBe(400);
  });

  test("mouse scrolling works", async ({ mount, page }) => {
    const component = await mount(
      <Scrollbar
        mah={400}
        maw={400}
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ width: 1000, height: 1000 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();
    await component.locator(".viewport").hover();
    await page.mouse.wheel(0, 100);
    await expect(component.locator(".viewport")).toHaveScrollTop(100);
    await page.mouse.wheel(0, 300);
    await expect(component.locator(".viewport")).toHaveScrollTop(400);
    await page.mouse.wheel(100, 0);
    await expect(component.locator(".viewport")).toHaveScrollLeft(100);
    await page.mouse.wheel(300, 0);
    await expect(component.locator(".viewport")).toHaveScrollLeft(400);
  });

  test("drag scrolling works", async ({ mount, page }) => {
    const component = await mount(
      <Scrollbar
        mah={400}
        maw={400}
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ width: 1000, height: 1000 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();

    await component.locator(".viewport").hover();
    await expect(component.locator(".vertical-track")).toBeVisible();
    await component.locator(".vertical-track").hover({ position: { x: 5, y: 10 } });
    await page.mouse.down();
    await page.mouse.move(0, 200);
    await page.mouse.up();

    await expect(async () => {
      const viewportScrollTop = await component.locator(".viewport").evaluate((e) => e.scrollTop);
      expect(viewportScrollTop).toBeGreaterThan(300);
    }).toPass({ timeout: 1000 });

    await component.locator(".viewport").hover();
    await expect(component.locator(".horizontal-track")).toBeVisible();
    await component.locator(".horizontal-track").hover({ position: { x: 10, y: 5 } });
    await page.mouse.down();
    await page.mouse.move(200, 0);
    await page.mouse.up();

    await expect(async () => {
      const viewportScrollLeft = await component.locator(".viewport").evaluate((e) => e.scrollLeft);
      expect(viewportScrollLeft).toBeGreaterThan(300);
    }).toPass({ timeout: 1000 });
  });

  test("using className prop does not break styles", async ({ mount, page }) => {
    const component = await mount(
      <Scrollbar
        mah={400}
        maw={400}
        className="some-class"
        classNames={{
          viewport: "viewport",
          horizontalTrack: "horizontal-track",
          verticalTrack: "vertical-track",
        }}
      >
        <div style={{ width: 1000, height: 1000 }} />
      </Scrollbar>,
    );

    await expect(component).toBeVisible();
    await component.locator(".viewport").hover();
    await page.mouse.wheel(0, 100);
    await expect(component.locator(".viewport")).toHaveScrollTop(100);
    await page.mouse.wheel(0, 300);
    await expect(component.locator(".viewport")).toHaveScrollTop(400);
    await page.mouse.wheel(100, 0);
    await expect(component.locator(".viewport")).toHaveScrollLeft(100);
    await page.mouse.wheel(300, 0);
    await expect(component.locator(".viewport")).toHaveScrollLeft(400);
  });
});

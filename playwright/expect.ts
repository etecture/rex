import { expect as baseExpect } from "@playwright/experimental-ct-react";
import type { Locator } from "@playwright/test";

export const expect = baseExpect.extend({
  async toHaveScrollTop(locator: Locator, expected: number, options?: { timeout?: number }) {
    let pass: boolean = false;
    let received: unknown;

    try {
      await expect(async () => {
        const scrollTop = await locator.evaluate((e) => e.scrollTop);
        received = scrollTop;
        expect(scrollTop).toBe(expected);
      }).toPass({ timeout: options?.timeout ?? 1000 });

      pass = true;
    } catch (e) {
      pass = false;
    }

    const message = () => {
      const isNot = this.isNot ? "not" : "";
      const expectedString = `Expected ${isNot} ${this.utils.printExpected(expected)}`;
      const receivedString = `Received ${this.utils.printReceived(received)}`;
      return `\n\nLocator: ${locator}\n${expectedString}\n${receivedString}`;
    };

    return {
      message,
      pass,
      name: "toHaveScrollTop",
      expected,
    };
  },

  async toHaveScrollLeft(locator: Locator, expected: number, options?: { timeout?: number }) {
    let pass: boolean = false;
    let received: unknown;

    try {
      await expect(async () => {
        const scrollLeft = await locator.evaluate((e) => e.scrollLeft);
        received = scrollLeft;
        expect(scrollLeft).toBe(expected);
      }).toPass({ timeout: options?.timeout ?? 1000 });

      pass = true;
    } catch (e) {
      pass = false;
    }

    const message = () => {
      const isNot = this.isNot ? "not" : "";
      const expectedString = `Expected ${isNot} ${this.utils.printExpected(expected)}`;
      const receivedString = `Received ${this.utils.printReceived(received)}`;
      return `\n\nLocator: ${locator}\n${expectedString}\n${receivedString}`;
    };

    return {
      message,
      pass,
      name: "toHaveScrollLeft",
      expected,
    };
  },
});

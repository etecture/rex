"use client";

import { useHotkeys } from "@etecture/rex";
import { useState } from "react";

const code = `
import { useHotkeys } from "@etecture/rex";
import { useState } from "react";

const Example = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const increment = (keys: string) => {
    setCounts((current) => {
      return { ...current, [keys]: (current[keys] ?? 0) + 1 };
    });
  };

  useHotkeys([
    ["Control", () => increment("Control")],
    ["Control+c", () => increment("Control+c")],
    ["Control+v", () => increment("Control+v"), { stopPropagation: true }],
    ["c", () => increment("c")],
    ["v", () => increment("v"), { stopPropagation: true }],
  ]);

  return (
    <div>
      <div>[Control] presses: {counts.Control}</div>
      <div>[Control + c] presses: {counts["Control+c"]}</div>
      <div>[Control + v] presses: {counts["Control+v"]}</div>
      <div>[c] presses: {counts.c}</div>
      <div>[v] presses: {counts.v}</div>
    </div>
  );
};
`;

const Example = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const increment = (keys: string) => {
    setCounts((current) => {
      return { ...current, [keys]: (current[keys] ?? 0) + 1 };
    });
  };

  useHotkeys([
    ["Control", () => increment("Control")],
    ["Control+c", () => increment("Control+c")],
    ["Control+v", () => increment("Control+v"), { stopPropagation: true }],
    ["c", () => increment("c")],
    ["v", () => increment("v"), { stopPropagation: true }],
  ]);

  return (
    <div>
      <div>[Control] presses: {counts.Control}</div>
      <div>[Control + c] presses: {counts["Control+c"]}</div>
      <div>[Control + v] presses: {counts["Control+v"]}</div>
      <div>[c] presses: {counts.c}</div>
      <div>[v] presses: {counts.v}</div>
    </div>
  );
};

export { code, Example as component };

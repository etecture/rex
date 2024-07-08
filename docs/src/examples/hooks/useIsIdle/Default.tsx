"use client";

import { useIsIdle } from "@etecture/rex";

const code = `
import { useIsIdle } from "@etecture/rex";

const Example = () => {
  const isIdle = useIsIdle({ idleAfterMs: 1000 });
  return <div>isIdle: {isIdle.toString()}</div>;
};
`;

const Example = () => {
  const isIdle = useIsIdle({ idleAfterMs: 1000 });
  return <div>isIdle: {isIdle.toString()}</div>;
};

export { code, Example as component };

"use client";

import { useSwiper } from "@etecture/rex";
import { useRef } from "react";

const code = `
import { useRef } from "react";
import { useSwiper } from "@etecture/rex";

const Example = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  useSwiper({ viewportRef });

  return (
    <div>
      <div style={{ overflowX: "auto" }} ref={viewportRef}>
        <img
          width={4000}
          height={300}
          alt={"lorem picsum"}
          src={"https://picsum.photos/4000/300"}
        />
      </div>
    </div>
  );
};
`;

const Example = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  useSwiper({ viewportRef });

  return (
    <div>
      <div style={{ overflowX: "auto" }} ref={viewportRef}>
        <img
          width={4000}
          height={300}
          alt={"lorem picsum"}
          src={"https://picsum.photos/4000/300"}
        />
      </div>
    </div>
  );
};

export { code, Example as component };

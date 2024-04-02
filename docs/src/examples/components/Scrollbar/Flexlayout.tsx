"use client";

import ScrollbarLayout from "@/layout/ScrollbarLayout/ScrollbarLayout";
import { Scrollbar } from "@etecture/rex";

const code = `
import ScrollbarLayout from "@/layout/ScrollbarLayout/ScrollbarLayout";
import { Scrollbar } from "@etecture/rex";

const Example = () => {
  return (
    <ScrollbarLayout>
      <Scrollbar>
        <div style={{ padding: 25 }}>
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
        </div>
      </Scrollbar>
    </ScrollbarLayout>
  );
};
`;

const loremIpsum = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
      massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
      justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
    </p>
  </>
);

const Example = () => {
  return (
    <ScrollbarLayout>
      <Scrollbar>
        <div style={{ padding: 25 }}>
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
          {loremIpsum}
        </div>
      </Scrollbar>
    </ScrollbarLayout>
  );
};

export { code, Example as component };

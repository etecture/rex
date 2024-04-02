"use client";

import FlexLayout from "@/layout/FlexLayout/FlexLayout";
import { Scrollbar } from "@etecture/rex";

const code = `
import FlexLayout from "@/layout/FlexLayout/FlexLayout";
import { Scrollbar } from "@etecture/rex";


const Example = () => {
  return (
    <FlexLayout>
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
    </FlexLayout>
  );
};
`;

const loremIpsum = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
    </p>
  </>
);

const Example = () => {
  return (
    <FlexLayout>
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
    </FlexLayout>
  );
};

export { code, Example as component };

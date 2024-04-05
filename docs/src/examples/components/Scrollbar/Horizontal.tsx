"use client";

import { Scrollbar } from "@etecture/rex";

const code = `

import { Scrollbar } from "@etecture/rex";


const Example = () => {
  return (
    <>
      <Scrollbar
        w={600}
        h={200}
        scrollDirection="horizontal"
      >
        <div style={{ width: 1500 }}>{loremIpsum}</div>
      </Scrollbar>
    </>
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
    <div style={{ padding: 25, width: 600, height: 300 }}>
      <Scrollbar w={600} h={200} scrollDirection="horizontal">
        <div style={{ width: 1500 }}>{loremIpsum}</div>
      </Scrollbar>
    </div>
  );
};

export { code, Example as component };

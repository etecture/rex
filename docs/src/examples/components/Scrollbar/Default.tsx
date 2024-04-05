"use client";

import { Scrollbar } from "@etecture/rex";

const code = `

import { Scrollbar } from "@etecture/rex";


const Example = () => {
  return (
    <>
      <Scrollbar h={300} w={400} >{loremIpsum}</Scrollbar>
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

    <p>
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
      rhoncus ut, imperdiet a, venenatis vitae, justo.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
      massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
      justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
    </p>

    <p>
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
      semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
      vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </p>

    <p>
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
      ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
    </p>
  </>
);

const Example = () => {
  return (
    <div style={{ padding: 25 }}>
      <Scrollbar h={300} w={400}>
        {loremIpsum}
      </Scrollbar>
    </div>
  );
};

export { code, Example as component };

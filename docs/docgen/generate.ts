import { ParserOptions, withCustomConfig } from "react-docgen-typescript";
import path from "path";
import { writeFileSync } from "fs";

const ROOT_DIR = path.resolve(__dirname, "../../");
const COMPONENT_DIR = path.resolve(ROOT_DIR, "core/src/components");
const TSCONFIG_PATH = path.resolve(ROOT_DIR, "tsconfig.json");

const EXCLUDED_PROP_DECL_NAMES = ["AriaAttributes", "DOMAttributes", "HTMLAttributes", "Attributes", "ClassAttributes"];

const options: ParserOptions = {
  savePropValueAsString: true,
  propFilter: (prop) => {
    if (prop.declarations?.some((decl) => EXCLUDED_PROP_DECL_NAMES.includes(decl.name))) {
      return false;
    }

    return true;
  },
};

const COMPONENTS = ["Scrollbar"];
const componentPaths = COMPONENTS.map((component) => path.resolve(COMPONENT_DIR, `${component}/${component}.tsx`));
const result = withCustomConfig(TSCONFIG_PATH, options).parse(componentPaths);
const output = [];

for (const doc of result) {
  output.push({
    component: doc.displayName,
    description: doc.description,
    props: Object.values(doc.props),
  });
}

writeFileSync(path.resolve(__dirname, "./docgen.ts"), `export const docs = ${JSON.stringify(output)} as const`);

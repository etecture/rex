import { ParserOptions, withCustomConfig } from "react-docgen-typescript";
import path from "path";
import { readdirSync, writeFileSync } from "fs";

const ROOT_DIR = path.resolve(__dirname, "../../");
const SOURCE_DIR = path.resolve(ROOT_DIR, "core/src");
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

const componentPaths = readdirSync(path.resolve(SOURCE_DIR, "components"), { withFileTypes: true })
  .filter((it) => it.isDirectory())
  .map((it) => path.resolve(SOURCE_DIR, "components", it.name, `${it.name}.tsx`));

const hookPaths = readdirSync(path.resolve(SOURCE_DIR, "hooks"), { withFileTypes: true })
  .filter((it) => it.isDirectory())
  .map((it) => path.resolve(SOURCE_DIR, "hooks", it.name, `${it.name}.ts`));

const result = withCustomConfig(TSCONFIG_PATH, options).parse([...componentPaths, ...hookPaths]);
const output = [];

for (const doc of result) {
  output.push({
    component: doc.displayName,
    description: doc.description,
    props: Object.values(doc.props),
  });
}

writeFileSync(path.resolve(__dirname, "./docgen.ts"), `export const docs = ${JSON.stringify(output)} as const`);

import path from "path";
import { watch } from "fs/promises";
import { program } from "commander";
import { readFileSync } from "fs";
import { OutputOptions, rollup } from "rollup";
import typescriptPlugin from "@rollup/plugin-typescript";
import postcssPlugin, { PostCSSPluginConf } from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import terserPlugin from "@rollup/plugin-terser";

program
  .command("build")
  .description("Builds a specific component with rollup")
  .argument("<filepath>", "The path to the file that should be built")
  .option("--out <path>", "The relative output path, will use /dist by default")
  .option("--watch", "Rebuilds on file changes")
  .action(async (str, options: { out?: string; watch?: boolean }) => {
    const entrypoint = path.resolve(process.cwd(), str);
    const entrypointDir = path.dirname(entrypoint);
    const parentDir = path.resolve(entrypointDir, "../");

    const pkgJsonPath = path.resolve(parentDir, "package.json");
    const pkgJsonRaw = readFileSync(pkgJsonPath);
    const pkgJson = JSON.parse(pkgJsonRaw.toString());

    const peerDependencies = "peerDependencies" in pkgJson ? Object.keys(pkgJson.peerDependencies) : [];
    const directDependencies = "dependencies" in pkgJson ? Object.keys(pkgJson.dependencies) : [];

    const postcssConfig: PostCSSPluginConf = {
      modules: true,
      minimize: true,
      config: false,
      plugins: [postcssPresetEnv({ features: { "cascade-layers": false } })],
      extract: "styles.css",
    };

    const cjsOutputOptions: OutputOptions = {
      file: pkgJson.main,
      format: "cjs",
      sourcemap: true,
    };

    const esmOutputOptions: OutputOptions = {
      file: pkgJson.module,
      format: "esm",
      sourcemap: true,
    };

    const runBuild = async () => {
      const beforeBuildTime = Date.now();

      const bundle = await rollup({
        input: entrypoint,
        plugins: [typescriptPlugin(), postcssPlugin(postcssConfig), terserPlugin()],
        external: [...directDependencies, ...peerDependencies, "react/jsx-runtime"],
      });

      await bundle.write(esmOutputOptions);
      await bundle.write(cjsOutputOptions);

      await bundle.close();

      console.log(`Built in ${Date.now() - beforeBuildTime}ms`);

      return;
    };

    await runBuild();

    if (options.watch) {
      const watcher = watch(entrypointDir, { recursive: true });
      for await (const event of watcher) {
        console.log(`Detected change in ${event.filename}. Rebuilding...`);
        await runBuild();
      }
    }
  });

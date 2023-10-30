import path from "path";
import { watch } from "fs/promises";
import { program } from "commander";
import { readFileSync } from "fs";

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
    const outPath = path.resolve(parentDir, options.out ?? "dist");

    const pkgJsonPath = path.resolve(parentDir, "package.json");
    const pkgJsonRaw = readFileSync(pkgJsonPath);
    const pkgJson = JSON.parse(pkgJsonRaw.toString());

    const peerDependencyPackages = "peerDependencies" in pkgJson ? Object.keys(pkgJson.peerDependencies) : [];

    const runBuild = async () => {
      const beforeBuildTime = Date.now();

      const result = await Bun.build({
        entrypoints: [entrypoint],
        outdir: outPath,
        target: "browser",
        format: "esm",
        external: [...peerDependencyPackages],
      });

      console.log(`Built in ${Date.now() - beforeBuildTime}ms`);

      return result;
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

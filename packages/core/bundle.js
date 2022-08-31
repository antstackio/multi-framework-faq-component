import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  plugins: [vanillaExtractPlugin()],
  outfile: "dist/index.js",
});

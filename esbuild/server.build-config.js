const { build } = require('esbuild');
const chokidar = require('chokidar');

(async () => {
  // `esbuild` bundler for JavaScript / TypeScript.
  await build({
    // Bundles JavaScript.
    bundle: true,
    sourcemap: false,
    // set platform for node, default is browser
    platform: 'node',
    loader: { '.svg': 'dataurl', '.png': 'dataurl' },
    // Defines env variables for bundled JavaScript; here `process.env.NODE_ENV`
    // is propagated with a fallback.
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'Production',
      ),
    },
    // Bundles JavaScript from (see `outfile`).
    entryPoints: ['./src/server/index.ts'],
    // Uses incremental compilation (see `chokidar.on`).
    incremental: true,
    // Removes whitespace, etc. depending on `NODE_ENV=...`.
    minify: true,
    // Bundles JavaScript to (see `entryPoints`).
    outdir: './build/',
  }).catch(() => process.exit(1));

  process.exit(0);
})();

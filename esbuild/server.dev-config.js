const { build } = require('esbuild');
const chokidar = require('chokidar');

(async () => {
  // `esbuild` bundler for JavaScript / TypeScript.
  const builder = await build({
    // Bundles JavaScript.
    bundle: true,
    sourcemap: true,
    // set platform for node, default is browser
    platform: 'node',
    loader: { '.svg': 'dataurl', '.png': 'dataurl' },
    // Defines env variables for bundled JavaScript; here `process.env.NODE_ENV`
    // is propagated with a fallback.
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    },
    // Bundles JavaScript from (see `outfile`).
    entryPoints: ['./src/server/index.ts'],
    // Uses incremental compilation (see `chokidar.on`).
    incremental: true,
    // Removes whitespace, etc. depending on `NODE_ENV=...`.
    minify: false,
    // Bundles JavaScript to (see `entryPoints`).
    outdir: './build/',
  });
  // `chokidar` watcher source changes.
  chokidar
    // Watches TypeScript
    .watch('./src/server/**/*.ts}', {
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100,
      },
    })
    // Rebuilds esbuild (incrementally -- see `build.incremental`).
    .on('add', (path) => {
      console.log(`File ${path} has been added to sever app`);
      builder.rebuild();
    })
    .on('change', (path) => {
      console.log(`File ${path} has been changed to sever app`);
      builder.rebuild();
    })
    .on('unlink', (path) => {
      console.log(`File ${path} has been removed to sever app`);
      builder.rebuild();
    })
    .on('addDir', (path) => {
      console.log(`Directory ${path} has been added to sever app`);
      builder.rebuild();
    })
    .on('unlinkDir', (path) => {
      console.log(`Directory ${path} has been removed to sever app`);
      builder.rebuild();
    });
})();

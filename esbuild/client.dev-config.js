const { build } = require('esbuild');
const chokidar = require('chokidar');
const servor = require('servor');
const postCss = require('esbuild-plugin-postcss2').default;
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const fs = require('fs');
(async () => {


  // `esbuild` bundler for JavaScript / TypeScript.
  const builder = await build({
    // Bundles JavaScript.
    bundle: true,
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl' },
    // Defines env variables for bundled JavaScript; here `process.env.NODE_ENV`
    // is propagated with a fallback.
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    },
    // Bundles JavaScript from (see `outfile`).
    entryPoints: ['./src/client/index.tsx'],
    // Uses incremental compilation (see `chokidar.on`).
    incremental: true,
    // Removes whitespace, etc. depending on `NODE_ENV=...`.
    minify: false,
    // Bundles JavaScript to (see `entryPoints`).
    outdir: './build/public/static/',
    plugins: [
      postCss({
        plugins: [autoprefixer, tailwindcss],
      }),
    ],
  });
  // `chokidar` watcher source changes.
  chokidar
    // Watches TypeScript and React TypeScript.
    .watch('./src/client/**/*.{ts,tsx}', {
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100,
      },
    })
    // Rebuilds esbuild (incrementally -- see `build.incremental`).
    .on('add', () => {
      builder.rebuild();
    })
    .on('change', (path) => {
      console.log(`File ${path} has been changed to client app`);
      builder.rebuild();
    })
    .on('unlink', (path) => {
      console.log(`File ${path} has been removed to client app`);
      builder.rebuild();
    })
    .on('addDir', (path) => {
      console.log(`Directory ${path} has been added to client app`);
      builder.rebuild();
    })
    .on('unlinkDir', (path) => {
      console.log(`Directory ${path} has been removed to client app`);
      builder.rebuild();
    });

  // Copy over the html template.
  fs.copyFile('./src/client/indexTemplate.html', './build/public/index.html', (err) => {
      if (err) throw err;
    });

  // Start the server.
  await servor({
    root: './build/public/',
    static: false,
    fallback: 'index.html',
    reload: true,
    port: 8000,
  });

  console.info(['Servor hot refresh at http://localhost:8000']);
})();

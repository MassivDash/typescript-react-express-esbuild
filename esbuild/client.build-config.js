const { build } = require('esbuild');
const fs = require('fs-extra');
const postCss = require('esbuild-plugin-postcss2').default;
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const generateBuild = async () => {
  await fs.rmdirSync('./build/public/static', { recursive: true });

  await build({
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
    minify: true,
    // Bundles JavaScript to (see `entryPoints`).
    outdir: './build/static/',
    plugins: [
      postCss({
        plugins: [autoprefixer, tailwindcss],
      }),
    ],
  }).catch(() => process.exit(1));

  process.exit(0);
};

generateBuild();

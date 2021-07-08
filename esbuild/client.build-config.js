const { build } = require('esbuild');
const fs = require('fs-extra');

const generateBuild = async () => {
  await fs.rmdirSync('./build/static', { recursive: true });

  await build({
    entryPoints: ['./src/client/index.tsx'],
    outdir: './build/static/',
    minify: true,
    bundle: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'edge16'],
    loader: { ".svg": "dataurl", ".png": "dataurl" },
    define: {
      'process.env.NODE_ENV': "'production'",
    }
  }).catch(() => process.exit(1));
};

generateBuild();


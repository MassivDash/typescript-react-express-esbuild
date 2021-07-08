const { build } = require("esbuild")
const chokidar = require("chokidar")
const servor = require('servor');

;(async () => {
	// `esbuild` bundler for JavaScript / TypeScript.
	const builder = await build({
		// Bundles JavaScript.
		bundle: true,
        sourcemap: true,
        target: ['chrome58', 'firefox57', 'edge16'],
        loader: { ".svg": "dataurl", ".png": "dataurl" },
		// Defines env variables for bundled JavaScript; here `process.env.NODE_ENV`
		// is propagated with a fallback.
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		// Bundles JavaScript from (see `outfile`).
		entryPoints: ["./src/client/index.tsx"],
		// Uses incremental compilation (see `chokidar.on`).
		incremental: true,
		// Removes whitespace, etc. depending on `NODE_ENV=...`.
		minify: process.env.NODE_ENV === "production",
		// Bundles JavaScript to (see `entryPoints`).
		outdir: "./build/static/",
	})
	// `chokidar` watcher source changes.
	chokidar
		// Watches TypeScript and React TypeScript.
		.watch("src/**/*.{ts,tsx}", {
			interval: 0, // No delay
		})
		// Rebuilds esbuild (incrementally -- see `build.incremental`).
		.on("all", () => {
			builder.rebuild()
		})
        await servor({
            root: './build/',
            static: true,
            fallback: 'index.html',
            reload: true,
            port: 8000,
          });
})()
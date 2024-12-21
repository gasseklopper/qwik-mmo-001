// vite.config.ts
import { defineConfig } from "file:///D:/Sites/gasseklopper/qwik-mmo-001/node_modules/vite/dist/node/index.js";
import netlifyEdge from "file:///D:/Sites/gasseklopper/qwik-mmo-001/node_modules/@netlify/vite-plugin-netlify-edge/dist/index.mjs";
import { qwikVite } from "file:///D:/Sites/gasseklopper/qwik-mmo-001/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///D:/Sites/gasseklopper/qwik-mmo-001/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///D:/Sites/gasseklopper/qwik-mmo-001/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "my-qwik-docs-starter",
  description: "Documentation site starter",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  trustedDependencies: [
    "sharp"
  ],
  private: true,
  "trustedDependencies-annotation": "Needed for bun to allow running install scripts",
  type: "module",
  scripts: {
    build: "qwik build",
    "build-storybook": "storybook build -- -o public/storybook",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/netlify-edge/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    coverage: "vitest run --coverage",
    deploy: "netlify deploy --build",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    serve: "netlify dev",
    start: "vite --open --mode ssr",
    storybook: "storybook dev -p 6006",
    test: "vitest --run",
    "test.unit": "vitest components",
    "test.unit.ui": "vitest --ui components",
    "test.watch": "vitest",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/partytown": "^0.8.1",
    "@builder.io/qwik": "^1.11.0",
    "@builder.io/qwik-city": "^1.11.0",
    "@modular-forms/qwik": "^0.20.0",
    "@netlify/edge-functions": "^2.0.0",
    "@netlify/plugin-lighthouse": "^6.0.0",
    "@netlify/vite-plugin-netlify-edge": "1.1.2",
    "@supabase/supabase-js": "^2.43.4",
    "@types/body-scroll-lock": "^3.1.0",
    "@types/eslint": "^8.56.10",
    "@types/gsap": "^3.0.0",
    "@types/locomotive-scroll": "^4.1.0",
    "@types/node": "^20.12.7",
    "@typescript-eslint/eslint-plugin": "^7.7.1",
    "@typescript-eslint/parser": "^7.7.1",
    "@vitest/coverage-c8": "^0.33.0",
    "@vitest/ui": "^0.34.6",
    clsx: "^1.2.1",
    dotenv: "^16.0.3",
    "dotenv-expand": "^10.0.0",
    eslint: "^8.57.0",
    "eslint-plugin-qwik": "^1.5.5",
    gsap: "^3.11.5",
    "locomotive-scroll": "^4.1.4",
    "netlify-cli": "^15.0.0",
    "node-fetch": "3.3.1",
    prettier: "^3.2.5",
    sass: "^1.62.1",
    storybook: "^7.4.6",
    "storybook-addon-data-theme-switcher": "^0.1.7",
    "storybook-framework-qwik": "^0.2.4",
    typescript: "5.4.5",
    undici: "*",
    vite: "^5.2.10",
    "vite-tsconfig-paths": "^4.2.1",
    vitest: "^0.34.6"
  }
};

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity(), qwikVite({
      ssr: { outDir: "netlify/edge-functions/entry.netlify-edge" }
    }), tsconfigPaths(), netlifyEdge({ functionName: "entry.netlify-edge" })],
    esbuild: {
      include: ["**/*.js"]
    },
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev depencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter(
    (dep) => dependencies2[dep]
  );
  const qwikPkg = Object.keys(dependencies2).filter(
    (value) => /qwik/i.test(value)
  );
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcU2l0ZXNcXFxcZ2Fzc2VrbG9wcGVyXFxcXHF3aWstbW1vLTAwMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcU2l0ZXNcXFxcZ2Fzc2VrbG9wcGVyXFxcXHF3aWstbW1vLTAwMVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU2l0ZXMvZ2Fzc2VrbG9wcGVyL3F3aWstbW1vLTAwMS92aXRlLmNvbmZpZy50c1wiOy8qKlxyXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNvbmZpZyBmb3Igdml0ZS5cclxuICogV2hlbiBidWlsZGluZywgdGhlIGFkYXB0ZXIgY29uZmlnIGlzIHVzZWQgd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGFuZCBleHRlbmRzIGl0LlxyXG4gKi9cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgbmV0bGlmeUVkZ2UgZnJvbSAnQG5ldGxpZnkvdml0ZS1wbHVnaW4tbmV0bGlmeS1lZGdlJ1xyXG5pbXBvcnQgeyBxd2lrVml0ZSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrL29wdGltaXplclwiO1xyXG5pbXBvcnQgeyBxd2lrQ2l0eSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xyXG5cclxudHlwZSBQa2dEZXAgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG5jb25zdCB7IGRlcGVuZGVuY2llcyA9IHt9LCBkZXZEZXBlbmRlbmNpZXMgPSB7fSB9ID0gcGtnIGFzIGFueSBhcyB7XHJcblx0ZGVwZW5kZW5jaWVzOiBQa2dEZXA7XHJcblx0ZGV2RGVwZW5kZW5jaWVzOiBQa2dEZXA7XHJcblx0W2tleTogc3RyaW5nXTogdW5rbm93bjtcclxufTtcclxuZXJyb3JPbkR1cGxpY2F0ZXNQa2dEZXBzKGRldkRlcGVuZGVuY2llcywgZGVwZW5kZW5jaWVzKTtcclxuXHJcbi8qKlxyXG4gKiBOb3RlIHRoYXQgVml0ZSBub3JtYWxseSBzdGFydHMgZnJvbSBgaW5kZXguaHRtbGAgYnV0IHRoZSBxd2lrQ2l0eSBwbHVnaW4gbWFrZXMgc3RhcnQgYXQgYHNyYy9lbnRyeS5zc3IudHN4YCBpbnN0ZWFkLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSk6IFVzZXJDb25maWcgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRwbHVnaW5zOiBbcXdpa0NpdHkoKSwgcXdpa1ZpdGUoe1xyXG5cdFx0XHRzc3I6IHsgb3V0RGlyOiAnbmV0bGlmeS9lZGdlLWZ1bmN0aW9ucy9lbnRyeS5uZXRsaWZ5LWVkZ2UnIH0sXHJcblx0XHR9KSwgdHNjb25maWdQYXRocygpLCBuZXRsaWZ5RWRnZSh7IGZ1bmN0aW9uTmFtZTogJ2VudHJ5Lm5ldGxpZnktZWRnZScgfSldLFxyXG5cdFx0ZXNidWlsZDoge1xyXG5cdFx0XHRpbmNsdWRlOiBbJyoqLyouanMnXSxcclxuXHRcdH0sXHJcblx0XHQvLyBUaGlzIHRlbGxzIFZpdGUgd2hpY2ggZGVwZW5kZW5jaWVzIHRvIHByZS1idWlsZCBpbiBkZXYgbW9kZS5cclxuXHRcdG9wdGltaXplRGVwczoge1xyXG5cdFx0XHQvLyBQdXQgcHJvYmxlbWF0aWMgZGVwcyB0aGF0IGJyZWFrIGJ1bmRsaW5nIGhlcmUsIG1vc3RseSB0aG9zZSB3aXRoIGJpbmFyaWVzLlxyXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSBbJ2JldHRlci1zcWxpdGUzJ10gaWYgeW91IHVzZSB0aGF0IGluIHNlcnZlciBmdW5jdGlvbnMuXHJcblx0XHRcdGV4Y2x1ZGU6IFtdLFxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgaXMgYW4gYWR2YW5jZWQgc2V0dGluZy4gSXQgaW1wcm92ZXMgdGhlIGJ1bmRsaW5nIG9mIHlvdXIgc2VydmVyIGNvZGUuIFRvIHVzZSBpdCwgbWFrZSBzdXJlIHlvdSB1bmRlcnN0YW5kIHdoZW4geW91ciBjb25zdW1lZCBwYWNrYWdlcyBhcmUgZGVwZW5kZW5jaWVzIG9yIGRldiBkZXBlbmNpZXMuIChvdGhlcndpc2UgdGhpbmdzIHdpbGwgYnJlYWsgaW4gcHJvZHVjdGlvbilcclxuXHRcdCAqL1xyXG5cdFx0Ly8gc3NyOlxyXG5cdFx0Ly8gICBjb21tYW5kID09PSBcImJ1aWxkXCIgJiYgbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCJcclxuXHRcdC8vICAgICA/IHtcclxuXHRcdC8vICAgICAgICAgLy8gQWxsIGRldiBkZXBlbmRlbmNpZXMgc2hvdWxkIGJlIGJ1bmRsZWQgaW4gdGhlIHNlcnZlciBidWlsZFxyXG5cdFx0Ly8gICAgICAgICBub0V4dGVybmFsOiBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLFxyXG5cdFx0Ly8gICAgICAgICAvLyBBbnl0aGluZyBtYXJrZWQgYXMgYSBkZXBlbmRlbmN5IHdpbGwgbm90IGJlIGJ1bmRsZWRcclxuXHRcdC8vICAgICAgICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgcHJvZHVjdGlvbiBiaW5hcnkgZGVwcyAoaW5jbHVkaW5nIGRlcHMgb2YgZGVwcyksIENMSSBkZXBzLCBhbmQgdGhlaXIgbW9kdWxlIGdyYXBoXHJcblx0XHQvLyAgICAgICAgIC8vIElmIGEgZGVwLW9mLWRlcCBuZWVkcyB0byBiZSBleHRlcm5hbCwgYWRkIGl0IGhlcmVcclxuXHRcdC8vICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHNvbWV0aGluZyB1c2VzIGBiY3J5cHRgIGJ1dCB5b3UgZG9uJ3QgaGF2ZSBpdCBhcyBhIGRlcCwgeW91IGNhbiB3cml0ZVxyXG5cdFx0Ly8gICAgICAgICAvLyBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksICdiY3J5cHQnXVxyXG5cdFx0Ly8gICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKSxcclxuXHRcdC8vICAgICAgIH1cclxuXHRcdC8vICAgICA6IHVuZGVmaW5lZCxcclxuXHJcblx0XHRzZXJ2ZXI6IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdC8vIERvbid0IGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gZGV2IG1vZGVcclxuXHRcdFx0XHRcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9MFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHByZXZpZXc6IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdC8vIERvIGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gcHJldmlldyAobm9uLWFkYXB0ZXIgcHJvZHVjdGlvbiBidWlsZClcclxuXHRcdFx0XHRcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9NjAwXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH07XHJcbn0pO1xyXG5cclxuLy8gKioqIHV0aWxzICoqKlxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRvIGlkZW50aWZ5IGR1cGxpY2F0ZSBkZXBlbmRlbmNpZXMgYW5kIHRocm93IGFuIGVycm9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXZEZXBlbmRlbmNpZXMgLSBMaXN0IG9mIGRldmVsb3BtZW50IGRlcGVuZGVuY2llc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gZGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBwcm9kdWN0aW9uIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuZnVuY3Rpb24gZXJyb3JPbkR1cGxpY2F0ZXNQa2dEZXBzKFxyXG5cdGRldkRlcGVuZGVuY2llczogUGtnRGVwLFxyXG5cdGRlcGVuZGVuY2llczogUGtnRGVwLFxyXG4pIHtcclxuXHRsZXQgbXNnID0gXCJcIjtcclxuXHQvLyBDcmVhdGUgYW4gYXJyYXkgJ2R1cGxpY2F0ZURlcHMnIGJ5IGZpbHRlcmluZyBkZXZEZXBlbmRlbmNpZXMuXHJcblx0Ly8gSWYgYSBkZXBlbmRlbmN5IGFsc28gZXhpc3RzIGluIGRlcGVuZGVuY2llcywgaXQgaXMgY29uc2lkZXJlZCBhIGR1cGxpY2F0ZS5cclxuXHRjb25zdCBkdXBsaWNhdGVEZXBzID0gT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKS5maWx0ZXIoXHJcblx0XHQoZGVwKSA9PiBkZXBlbmRlbmNpZXNbZGVwXSxcclxuXHQpO1xyXG5cclxuXHQvLyBpbmNsdWRlIGFueSBrbm93biBxd2lrIHBhY2thZ2VzXHJcblx0Y29uc3QgcXdpa1BrZyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZmlsdGVyKCh2YWx1ZSkgPT5cclxuXHRcdC9xd2lrL2kudGVzdCh2YWx1ZSksXHJcblx0KTtcclxuXHJcblx0Ly8gYW55IGVycm9ycyBmb3IgbWlzc2luZyBcInF3aWstY2l0eS1wbGFuXCJcclxuXHQvLyBbUExVR0lOX0VSUk9SXTogSW52YWxpZCBtb2R1bGUgXCJAcXdpay1jaXR5LXBsYW5cIiBpcyBub3QgYSB2YWxpZCBwYWNrYWdlXHJcblx0bXNnID0gYE1vdmUgcXdpayBwYWNrYWdlcyAke3F3aWtQa2cuam9pbihcIiwgXCIpfSB0byBkZXZEZXBlbmRlbmNpZXNgO1xyXG5cclxuXHRpZiAocXdpa1BrZy5sZW5ndGggPiAwKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuXHR9XHJcblxyXG5cdC8vIEZvcm1hdCB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBkdXBsaWNhdGVzIGxpc3QuXHJcblx0Ly8gVGhlIGBqb2luYCBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZWxlbWVudHMgb2YgdGhlICdkdXBsaWNhdGVEZXBzJyBhcnJheSBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXHJcblx0bXNnID0gYFxyXG4gICAgV2FybmluZzogVGhlIGRlcGVuZGVuY3kgXCIke2R1cGxpY2F0ZURlcHMuam9pbihcIiwgXCIpfVwiIGlzIGxpc3RlZCBpbiBib3RoIFwiZGV2RGVwZW5kZW5jaWVzXCIgYW5kIFwiZGVwZW5kZW5jaWVzXCIuXHJcbiAgICBQbGVhc2UgbW92ZSB0aGUgZHVwbGljYXRlZCBkZXBlbmRlbmNpZXMgdG8gXCJkZXZEZXBlbmRlbmNpZXNcIiBvbmx5IGFuZCByZW1vdmUgaXQgZnJvbSBcImRlcGVuZGVuY2llc1wiXHJcbiAgYDtcclxuXHJcblx0Ly8gVGhyb3cgYW4gZXJyb3Igd2l0aCB0aGUgY29uc3RydWN0ZWQgbWVzc2FnZS5cclxuXHRpZiAoZHVwbGljYXRlRGVwcy5sZW5ndGggPiAwKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuXHR9XHJcbn0iLCAie1xuXHRcIm5hbWVcIjogXCJteS1xd2lrLWRvY3Mtc3RhcnRlclwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiRG9jdW1lbnRhdGlvbiBzaXRlIHN0YXJ0ZXJcIixcblx0XCJlbmdpbmVzXCI6IHtcblx0XHRcIm5vZGVcIjogXCJeMTguMTcuMCB8fCBeMjAuMy4wIHx8ID49MjEuMC4wXCJcblx0fSxcblx0XCJlbmdpbmVzLWFubm90YXRpb25cIjogXCJNb3N0bHkgcmVxdWlyZWQgYnkgc2hhcnAgd2hpY2ggbmVlZHMgYSBOb2RlLUFQSSB2OSBjb21wYXRpYmxlIHJ1bnRpbWVcIixcblx0XCJ0cnVzdGVkRGVwZW5kZW5jaWVzXCI6IFtcblx0XHRcInNoYXJwXCJcblx0XSxcblx0XCJwcml2YXRlXCI6IHRydWUsXG5cdFwidHJ1c3RlZERlcGVuZGVuY2llcy1hbm5vdGF0aW9uXCI6IFwiTmVlZGVkIGZvciBidW4gdG8gYWxsb3cgcnVubmluZyBpbnN0YWxsIHNjcmlwdHNcIixcblx0XCJ0eXBlXCI6IFwibW9kdWxlXCIsXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJidWlsZFwiOiBcInF3aWsgYnVpbGRcIixcblx0XHRcImJ1aWxkLXN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZCAtLSAtbyBwdWJsaWMvc3Rvcnlib29rXCIsXG5cdFx0XCJidWlsZC5jbGllbnRcIjogXCJ2aXRlIGJ1aWxkXCIsXG5cdFx0XCJidWlsZC5wcmV2aWV3XCI6IFwidml0ZSBidWlsZCAtLXNzciBzcmMvZW50cnkucHJldmlldy50c3hcIixcblx0XHRcImJ1aWxkLnNlcnZlclwiOiBcInZpdGUgYnVpbGQgLWMgYWRhcHRlcnMvbmV0bGlmeS1lZGdlL3ZpdGUuY29uZmlnLnRzXCIsXG5cdFx0XCJidWlsZC50eXBlc1wiOiBcInRzYyAtLWluY3JlbWVudGFsIC0tbm9FbWl0XCIsXG5cdFx0XCJjb3ZlcmFnZVwiOiBcInZpdGVzdCBydW4gLS1jb3ZlcmFnZVwiLFxuXHRcdFwiZGVwbG95XCI6IFwibmV0bGlmeSBkZXBsb3kgLS1idWlsZFwiLFxuXHRcdFwiZGV2XCI6IFwidml0ZSAtLW1vZGUgc3NyXCIsXG5cdFx0XCJkZXYuZGVidWdcIjogXCJub2RlIC0taW5zcGVjdC1icmsgLi9ub2RlX21vZHVsZXMvdml0ZS9iaW4vdml0ZS5qcyAtLW1vZGUgc3NyIC0tZm9yY2VcIixcblx0XHRcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgLlwiLFxuXHRcdFwiZm10LmNoZWNrXCI6IFwicHJldHRpZXIgLS1jaGVjayAuXCIsXG5cdFx0XCJsaW50XCI6IFwiZXNsaW50IFxcXCJzcmMvKiovKi50cypcXFwiXCIsXG5cdFx0XCJwcmV2aWV3XCI6IFwicXdpayBidWlsZCBwcmV2aWV3ICYmIHZpdGUgcHJldmlldyAtLW9wZW5cIixcblx0XHRcInNlcnZlXCI6IFwibmV0bGlmeSBkZXZcIixcblx0XHRcInN0YXJ0XCI6IFwidml0ZSAtLW9wZW4gLS1tb2RlIHNzclwiLFxuXHRcdFwic3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG5cdFx0XCJ0ZXN0XCI6IFwidml0ZXN0IC0tcnVuXCIsXG5cdFx0XCJ0ZXN0LnVuaXRcIjogXCJ2aXRlc3QgY29tcG9uZW50c1wiLFxuXHRcdFwidGVzdC51bml0LnVpXCI6IFwidml0ZXN0IC0tdWkgY29tcG9uZW50c1wiLFxuXHRcdFwidGVzdC53YXRjaFwiOiBcInZpdGVzdFwiLFxuXHRcdFwicXdpa1wiOiBcInF3aWtcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJAYnVpbGRlci5pby9wYXJ0eXRvd25cIjogXCJeMC44LjFcIixcblx0XHRcIkBidWlsZGVyLmlvL3F3aWtcIjogXCJeMS4xMS4wXCIsXG5cdFx0XCJAYnVpbGRlci5pby9xd2lrLWNpdHlcIjogXCJeMS4xMS4wXCIsXG5cdFx0XCJAbW9kdWxhci1mb3Jtcy9xd2lrXCI6IFwiXjAuMjAuMFwiLFxuXHRcdFwiQG5ldGxpZnkvZWRnZS1mdW5jdGlvbnNcIjogXCJeMi4wLjBcIixcblx0XHRcIkBuZXRsaWZ5L3BsdWdpbi1saWdodGhvdXNlXCI6IFwiXjYuMC4wXCIsXG5cdFx0XCJAbmV0bGlmeS92aXRlLXBsdWdpbi1uZXRsaWZ5LWVkZ2VcIjogXCIxLjEuMlwiLFxuXHRcdFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI6IFwiXjIuNDMuNFwiLFxuXHRcdFwiQHR5cGVzL2JvZHktc2Nyb2xsLWxvY2tcIjogXCJeMy4xLjBcIixcblx0XHRcIkB0eXBlcy9lc2xpbnRcIjogXCJeOC41Ni4xMFwiLFxuXHRcdFwiQHR5cGVzL2dzYXBcIjogXCJeMy4wLjBcIixcblx0XHRcIkB0eXBlcy9sb2NvbW90aXZlLXNjcm9sbFwiOiBcIl40LjEuMFwiLFxuXHRcdFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTIuN1wiLFxuXHRcdFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy43LjFcIixcblx0XHRcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy43LjFcIixcblx0XHRcIkB2aXRlc3QvY292ZXJhZ2UtYzhcIjogXCJeMC4zMy4wXCIsXG5cdFx0XCJAdml0ZXN0L3VpXCI6IFwiXjAuMzQuNlwiLFxuXHRcdFwiY2xzeFwiOiBcIl4xLjIuMVwiLFxuXHRcdFwiZG90ZW52XCI6IFwiXjE2LjAuM1wiLFxuXHRcdFwiZG90ZW52LWV4cGFuZFwiOiBcIl4xMC4wLjBcIixcblx0XHRcImVzbGludFwiOiBcIl44LjU3LjBcIixcblx0XHRcImVzbGludC1wbHVnaW4tcXdpa1wiOiBcIl4xLjUuNVwiLFxuXHRcdFwiZ3NhcFwiOiBcIl4zLjExLjVcIixcblx0XHRcImxvY29tb3RpdmUtc2Nyb2xsXCI6IFwiXjQuMS40XCIsXG5cdFx0XCJuZXRsaWZ5LWNsaVwiOiBcIl4xNS4wLjBcIixcblx0XHRcIm5vZGUtZmV0Y2hcIjogXCIzLjMuMVwiLFxuXHRcdFwicHJldHRpZXJcIjogXCJeMy4yLjVcIixcblx0XHRcInNhc3NcIjogXCJeMS42Mi4xXCIsXG5cdFx0XCJzdG9yeWJvb2tcIjogXCJeNy40LjZcIixcblx0XHRcInN0b3J5Ym9vay1hZGRvbi1kYXRhLXRoZW1lLXN3aXRjaGVyXCI6IFwiXjAuMS43XCIsXG5cdFx0XCJzdG9yeWJvb2stZnJhbWV3b3JrLXF3aWtcIjogXCJeMC4yLjRcIixcblx0XHRcInR5cGVzY3JpcHRcIjogXCI1LjQuNVwiLFxuXHRcdFwidW5kaWNpXCI6IFwiKlwiLFxuXHRcdFwidml0ZVwiOiBcIl41LjIuMTBcIixcblx0XHRcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjFcIixcblx0XHRcInZpdGVzdFwiOiBcIl4wLjM0LjZcIlxuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsU0FBUyxvQkFBcUM7QUFDOUMsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxnQkFBZ0I7QUFDekIsT0FBTyxtQkFBbUI7OztBQ1IxQjtBQUFBLEVBQ0MsTUFBUTtBQUFBLEVBQ1IsYUFB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QyxlQUNDO0FBQ0QsTUFBSSxNQUFNO0FBR1YsUUFBTSxnQkFBZ0IsT0FBTyxLQUFLRCxnQkFBZSxFQUFFO0FBQUEsSUFDbEQsQ0FBQyxRQUFRQyxjQUFhLEdBQUc7QUFBQSxFQUMxQjtBQUdBLFFBQU0sVUFBVSxPQUFPLEtBQUtBLGFBQVksRUFBRTtBQUFBLElBQU8sQ0FBQyxVQUNqRCxRQUFRLEtBQUssS0FBSztBQUFBLEVBQ25CO0FBSUEsUUFBTSxzQkFBc0IsUUFBUSxLQUFLLElBQUksQ0FBQztBQUU5QyxNQUFJLFFBQVEsU0FBUyxHQUFHO0FBQ3ZCLFVBQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxFQUNwQjtBQUlBLFFBQU07QUFBQSwrQkFDd0IsY0FBYyxLQUFLLElBQUksQ0FBQztBQUFBO0FBQUE7QUFLdEQsTUFBSSxjQUFjLFNBQVMsR0FBRztBQUM3QixVQUFNLElBQUksTUFBTSxHQUFHO0FBQUEsRUFDcEI7QUFDRDsiLAogICJuYW1lcyI6IFsiZGV2RGVwZW5kZW5jaWVzIiwgImRlcGVuZGVuY2llcyJdCn0K

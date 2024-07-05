import { URL, fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";


// https://vitejs.dev/config/
export default defineConfig((env) => {
    const testModeAliases: Record<string, string> = env.mode === "test"
        ? {
            "@test": fileURLToPath(new URL("./test", import.meta.url)),
        }
        : {};

    return {
        plugins: [
            vue(),
            VueDevTools(),
        ],
        test: {
            workspace: "./vitest.workspace.ts",
            silent: true,
            coverage: {
                provider: "istanbul",
                thresholds: {
                    functions: 100,
                    lines: 90,
                    statements: 90,
                    branches: 80,
                }
            },
        },
        resolve: {
            alias: {
                "~": fileURLToPath(new URL("./src", import.meta.url)),
                ...testModeAliases,
            },
        },
    };
});

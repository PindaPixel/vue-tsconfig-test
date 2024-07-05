import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
    {
        extends: "./vite.config.ts",
        test: {
            name: "node",
            environment: "node",
            include: ["src/**/*.test.ts", "config/**/*.test.ts"],
            exclude: ["src/**/*.{jsdom,web}.test.ts", "config/**/*.{jsdom,web}.test.ts"],
            isolate: false,
            typecheck: {
                enabled: true,
                checker: "vue-tsc",
                tsconfig: "tsconfig.test.json",
            },
        },
    },
    {
        extends: "./vite.config.ts",
        test: {
            name: "jsdom",
            environment: "happy-dom",
            include: ["src/**/*.jsdom.test.ts", "config/**/*.jsdom.test.ts"],
            isolate: false,
            typecheck: {
                enabled: true,
                checker: "vue-tsc",
                tsconfig: "tsconfig.jsdom.test.json",
            },
        },
    },
    {
        extends: "./vite.config.ts",
        test: {
            name: "web",
            environment: "node",
            include: ["src/**/*.web.test.ts", "config/**/*.web.test.ts"],
            browser: {
                enabled: true,
                name: "chrome",
                provider: "webdriverio",
                headless: true,
            },
            isolate: false,
            typecheck: {
                enabled: true,
                checker: "vue-tsc",
                tsconfig: "tsconfig.web.test.json",
            },
        },
        publicDir: "node_modules/msw/lib",
    },
]);

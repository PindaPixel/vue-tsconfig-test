import fs from "node:fs"; // we should not be able to import modules that cannot run in the browser
import "./index.test"; // we should not be able to import test files
import App from "~/App.vue"; // we should be able to import using alias
import useCounter from "~/Composables/counter"; // we should be able to import via path alias

console.log("Hello via Bun!");

export const test = {}
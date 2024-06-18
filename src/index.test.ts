import { describe, it } from "node:test" // should be able to import from node
import { test } from "./index";
import App from "./App.vue";
window.document; // should not be able to access web APIs

console.log(test);

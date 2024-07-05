import App from "./config-test/App.vue"; // should be able to import vue components
import { test } from "./index"; // should be able to import regular modules
window.document; // should be able to access web APIs
import { describe, it } from "node:test" // should not be able to import from node
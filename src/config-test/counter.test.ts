import useCounter from "../config-test/counter"; // should be able to import app files
import { describe } from "node:test"; // should be able to import from node
import App from "../config-test/App.vue"; // should be able to import vue components
window.document; // should not be able to use web APIs
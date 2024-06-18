import useCounter from "./counter"; // should be able to import app files
import { describe } from "node:test"; // should be able to import from node
import App from "../App.vue"; // should be able to import vue components
window.document; // should not be able to use web APIs
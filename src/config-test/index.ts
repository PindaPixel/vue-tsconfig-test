import { describe, it } from "node:test" // should not be able to import from node
import "./index.test"; // should not be able to import test files

import App from "~/config-test/App.vue"; // should be able to import using alias
import useCounter from "~/config-test/counter"; // should be able to import via path alias

export const test = {}
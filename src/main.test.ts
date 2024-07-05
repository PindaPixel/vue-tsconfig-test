import { describe, it, expect } from "vitest";
import { sum } from "./main";

describe("test", () => {
    it("sums", () => {
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    })
})
import { describe, it, expect } from "vitest";
import { backToTheLastPage, verifyLastPageReached } from "../index";

describe("Home", async () => {
  it("Should goes to next page, because it`s not the last page", () => {
    const page = 1;
    const totalPages = 36;
    expect(verifyLastPageReached(page, totalPages)).toBe(2);
  });

  it("Should return the same page, because the last page was reached", () => {
    const page = 36;
    const totalPages = 36;
    expect(verifyLastPageReached(page, totalPages)).toBe(36);
  });

  it("Should return to the last page", () => {
    const page = 2;
    expect(backToTheLastPage(page)).toBe(1);
  });

  it("Should it`s return the same page, because it`s the initial page", () => {
    const page = 0;
    expect(backToTheLastPage(page)).toBe(0);
  });
});

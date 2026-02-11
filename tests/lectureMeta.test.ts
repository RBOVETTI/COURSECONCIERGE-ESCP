import test from "node:test";
import assert from "node:assert/strict";

import { isValidDateString, parseLectureDate } from "../lib/utils/lectureMeta.ts";

test("returns false for empty and invalid dates", () => {
  assert.equal(isValidDateString(undefined), false);
  assert.equal(isValidDateString(""), false);
  assert.equal(isValidDateString("not-a-date"), false);
});

test("returns true for iso date and parses it", () => {
  const input = "2026-02-16";
  assert.equal(isValidDateString(input), true);

  const parsed = parseLectureDate(input);
  assert.equal(parsed?.toISOString().startsWith("2026-02-16"), true);
});

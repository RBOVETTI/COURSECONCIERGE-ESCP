import test from "node:test";
import assert from "node:assert/strict";

import { createPlainSnippet } from "../lib/search/searchUtils.ts";

test("creates snippet around matching term", () => {
  const text = "Cloud computing enables scalable analytics in modern food operations.";
  const snippet = createPlainSnippet(text, "analytics");
  assert.equal(snippet.toLowerCase().includes("analytics"), true);
});

test("returns sanitized plain text without html tags", () => {
  const text = "Data <script>alert(1)</script> governance is critical.";
  const snippet = createPlainSnippet(text, "data");
  assert.equal(snippet.includes("<script>"), false);
  assert.equal(snippet.includes(">"), false);
  assert.equal(snippet.includes("<"), false);
});

import test from "node:test";
import assert from "node:assert/strict";

import { selectCurrentLectureSlug } from "../lib/utils/courseProgress.ts";

test("selects the nearest upcoming lecture when future dates exist", () => {
  const now = new Date("2026-02-15T12:00:00Z");
  const lectures = [
    { slug: "course-introduction", lectureNumber: 0, date: undefined },
    { slug: "lecture-1", lectureNumber: 1, date: "2026-02-16" },
    { slug: "lecture-2", lectureNumber: 2, date: "2026-02-23" },
  ];

  const slug = selectCurrentLectureSlug(lectures, now);
  assert.equal(slug, "lecture-1");
});

test("falls back to latest scheduled lecture when all are in the past", () => {
  const now = new Date("2026-04-01T12:00:00Z");
  const lectures = [
    { slug: "lecture-1", lectureNumber: 1, date: "2026-02-16" },
    { slug: "lecture-2", lectureNumber: 2, date: "2026-02-23" },
  ];

  const slug = selectCurrentLectureSlug(lectures, now);
  assert.equal(slug, "lecture-2");
});

test("falls back to lecture number 0 when no valid dates exist", () => {
  const now = new Date("2026-02-15T12:00:00Z");
  const lectures = [
    { slug: "course-introduction", lectureNumber: 0, date: undefined },
    { slug: "lecture-1", lectureNumber: 1, date: "invalid-date" },
  ];

  const slug = selectCurrentLectureSlug(lectures, now);
  assert.equal(slug, "course-introduction");
});

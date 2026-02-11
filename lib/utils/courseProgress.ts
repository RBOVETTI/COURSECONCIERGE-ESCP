interface LectureProgressItem {
  slug: string;
  lectureNumber: number;
  date?: string;
}

function parseDate(value?: string): Date | null {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function selectCurrentLectureSlug(
  lectures: LectureProgressItem[],
  now = new Date()
): string {
  if (lectures.length === 0) {
    return "";
  }

  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const datedLectures = lectures
    .map((lecture) => {
      const parsedDate = parseDate(lecture.date);
      return parsedDate ? { ...lecture, parsedDate } : null;
    })
    .filter((lecture): lecture is LectureProgressItem & { parsedDate: Date } => lecture !== null)
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

  const upcoming = datedLectures.find(
    (lecture) => lecture.parsedDate.getTime() >= todayStart.getTime()
  );
  if (upcoming) {
    return upcoming.slug;
  }

  if (datedLectures.length > 0) {
    return datedLectures[datedLectures.length - 1].slug;
  }

  const intro = lectures.find((lecture) => lecture.lectureNumber === 0);
  return intro?.slug ?? lectures[0].slug;
}

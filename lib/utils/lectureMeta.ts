export function parseLectureDate(value?: string): Date | null {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
}

export function isValidDateString(value?: string): boolean {
  return parseLectureDate(value) !== null;
}

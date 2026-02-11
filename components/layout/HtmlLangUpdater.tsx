'use client';

import { useEffect } from "react";

interface HtmlLangUpdaterProps {
  locale: string;
}

export default function HtmlLangUpdater({ locale }: HtmlLangUpdaterProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

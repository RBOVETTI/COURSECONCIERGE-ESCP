export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { alternates: { canonical: `/${locale}/resources` } };
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

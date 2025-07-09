import { getDictionary, LangProps } from "@/lib/dictionaries";

export default async function Home({ params }: LangProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <h2>{dict.metadata.title}</h2>
    </div>
  );
}

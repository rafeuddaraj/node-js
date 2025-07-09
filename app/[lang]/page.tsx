import LocalizedLink from "@/components/localized-link";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, LangProps } from "@/lib/dictionaries";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default async function Home({ params }: LangProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <h2>{dict.metadata.title}</h2>
    </div>
  );
}

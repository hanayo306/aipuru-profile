// import * as motion from "motion/react-client";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import links from "@/app/[locale]/links";
import Image from "next/image";
import ProfileIcon1 from "@/app/[locale]/profile_1.png";
import LanguageModal from "@/app/[locale]/LanguageModal";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("HomePage");

  return (
    <>
      <div className="max-w-xl mx-auto min-h-dvh flex items-center justify-center flex-col gap-8 p-2">
        <div className="flex flex-col gap-8 bg-white w-full rounded-xl p-4 shadow-xl">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 px-2">
            <div className="w-32 md:w-1/2 max-h-lvh overflow-hidden">
              <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-violet-900 flex justify-center items-center">
                <Image
                  src={ProfileIcon1}
                  alt={"profile icon"}
                  className="aspect-square"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 h-full text-center md:text-left flex flex-col md:flex gap-4">
              <h1 className="text-3xl font-bold">
                {t("name")}
                {<span className="text-xs"> {t("fain")}</span>}
              </h1>

              <p>
                {t.rich("intro", {
                  br: () => <br />,
                })}
              </p>
            </div>
          </div>
          <div className="px-2 w-full flex flex-col gap-2 justify-center md:justify-start">
            {links.map((l) => (
              <div key={l.url}>
                <Link
                  href={l.url}
                  target={"_blank"}
                  className="w-full max-w-[300px] text-white font-bold justify-center mx-auto flex items-center transition duration-200 bg-gradient-to-r from-violet-900 to-blue-900 hover:bg-gradient-to-l hover:from-violet-700 hover:to-blue-700 rounded-full px-2 py-1"
                >
                  {l.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <LanguageModal locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
}

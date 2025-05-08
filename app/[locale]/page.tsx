// import * as motion from "motion/react-client";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import links from "@/app/[locale]/links";
import ProfileImage from "@/app/[locale]/ProfileImage";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("HomePage");

  return (
    <>
      <div className="max-w-xl mx-auto min-h-[calc(100lvh-64px)] flex items-center justify-center flex-col gap-8">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 p-4">
          <div className="w-32 md:w-1/2 max-h-lvh overflow-hidden">
            <ProfileImage />
          </div>

          <div className="md:w-[1px] w-full md:h-[200px] h-[1px] bg-black " />

          <div className="w-full md:w-1/2 h-full text-center md:text-left flex flex-col md:flex gap-4">
            <h1 className="text-3xl font-bold">{t("name")}</h1>
            <p>
              {t.rich("intro", {
                br: () => <br />,
              })}
            </p>

            <div className="flex gap-2 justify-center md:justify-start">
              {links.map((l) => (
                <div key={l.url}>
                  <Link href={l.url} target={"_blank"}>
                    <l.icon size={24} />
                  </Link>
                  <span className="text-xs">
                    {l.info && t(`links.${l.info}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          {["zh", "ja"].map((l) => (
            <Link
              href={`/${l}`}
              key={l}
              className={`flex text-xl ${l === locale ? "font-extrabold" : ""}`}
            >
              {l === "zh" && "中文"}
              {l === "ja" && "日本語"}
            </Link>
          ))}
        </div>
      </div>
      <footer className="h-16 flex justify-center items-center">
        <Link
          href="https://github.com/hanayo306/aipuru-profile"
          target="_blank"
        >
          GitHub
        </Link>
      </footer>
    </>
  );
}

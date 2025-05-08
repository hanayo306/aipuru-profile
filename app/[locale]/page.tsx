// import * as motion from "motion/react-client";
import Link from "next/link";
import ProfileIcon1 from "./profile_1.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import links from "@/app/[locale]/links";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <div className="max-w-xl mx-auto min-h-[calc(100lvh-64px)] flex items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 p-4">
          <div className="w-32 md:w-1/2 max-h-lvh overflow-hidden">
            <div className="w-full aspect-square border border-black flex justify-center items-center">
              <Image src={ProfileIcon1} alt={"profile icon"} />
            </div>
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
                <Link href={l.url} target={"_blank"} key={l.url}>
                  <l.icon size={24} />
                  <span className="text-xs">
                    {l.info && t(`links.${l.info}`)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
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

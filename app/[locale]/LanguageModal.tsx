"use client";

import * as motion from "motion/react-client";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const LanguageModal = ({ locale }: { locale: string }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isModal && (
          <motion.div
            className="flex justify-center items-center p-2 fixed left-0 top-0 w-full h-full"
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              backgroundColor: "#00000000",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(5px)",
              backgroundColor: "#00000030",
            }}
          >
            <div className="bg-white rounded-xl p-4">
              <div className="flex gap-2 justify-center">
                {["zh", "ja"].map((l) => (
                  <Link
                    href={`/${l}`}
                    key={l}
                    className={`w-16 text-center flex justify-center transition duration-200 px-2 py-1 rounded-lg hover:bg-violet-200 ${l === locale ? "font-extrabold text-violet-900" : "text-gray-400"}`}
                    onClick={() => setIsModal(false)}
                  >
                    {l === "zh" && "中文"}
                    {l === "ja" && "日本語"}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsModal(true)}
        className="cursor-pointer p-2 rounded transition hover:bg-gray-200 "
      >
        <MdLanguage className="text-violet-900" size={24} />
      </button>
    </>
  );
};

export default LanguageModal;

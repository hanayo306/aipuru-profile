import * as motion from "motion/react-client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-xl mx-auto min-h-[calc(100lvh-128px)] flex items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 px-4">
          <div className="w-full md:w-1/2 max-h-lvh overflow-hidden">
            <div className="w-full aspect-[3/5] flex justify-center items-center">
              image...
            </div>
          </div>

          <div className="md:w-[1px] w-full md:h-[200px] h-[1px] bg-black " />

          <div className="w-full md:w-1/2 h-full">
            <h1 className="text-3xl font-bold">普魯醬</h1>
            <p>asdasdasdasdasd</p>
            <p>asd</p>
            <p>asd</p>
            <p>asd</p>
            <p>asdasdasdasdasd</p>
            <p>asd</p>
            <p>asd</p>
            <p>asd</p>
          </div>
        </div>
      </div>
      <footer className="h-32 flex justify-center items-center">
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

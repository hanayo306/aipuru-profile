"use client";

import { GoDot, GoDotFill } from "react-icons/go";
import ProfileIcon1 from "@/app/[locale]/profile_1.png";
import ProfileIcon2 from "@/app/[locale]/profile_2.png";
import ProfileIcon3 from "@/app/[locale]/profile_3.png";
import Image from "next/image";
import { useState } from "react";

const ProfileImage = () => {
  const [profileIdx, setProfileIdx] = useState(0);

  const profiles = [ProfileIcon1, ProfileIcon2, ProfileIcon3];

  return (
    <>
      <div className="w-full aspect-square border border-black flex justify-center items-center">
        <Image
          src={profiles[profileIdx]}
          alt={"profile icon"}
          className="aspect-square"
        />
      </div>
      <div className="flex justify-center mt-4">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            className="cursor-pointer"
            onClick={() => setProfileIdx(idx)}
          >
            {profileIdx !== idx ? <GoDot size={24} /> : <GoDotFill size={24} />}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProfileImage;

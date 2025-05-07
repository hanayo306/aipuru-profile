import { IconType } from "react-icons";
import { FaBluesky } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

type LinkInfo = {
  name: string;
  url: string;
  icon: IconType;
  info?: string;
};

const links: LinkInfo[] = [
  {
    name: "X",
    url: "https://x.com/plzang",
    icon: FaXTwitter,
  },
  {
    name: "X",
    url: "https://x.com/puruzyang_v",
    icon: FaXTwitter,
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/plzang.bsky.social",
    icon: FaBluesky,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61574849615981",
    icon: FaFacebook,
  },
];

export default links;

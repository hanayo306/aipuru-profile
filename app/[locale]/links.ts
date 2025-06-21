import { IconType } from "react-icons";
import { FaBluesky } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";

type LinkInfo = {
  name: string;
  url: string;
  icon: IconType;
  info?: string;
};

const links: LinkInfo[] = [
  {
    name: "Twitch",
    url: "https://www.twitch.tv/hanayo306",
    icon: FaTwitch,
  },
  {
    name: "Discord",
    url: "https://discord.gg/tHkmfAzuRG",
    icon: FaDiscord,
  },
  {
    name: "X",
    url: "https://x.com/plzang",
    icon: FaXTwitter,
    info: "x_plzang",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61574849615981",
    icon: FaFacebook,
  },
  {
    name: "X",
    url: "https://x.com/puruzyang_v",
    icon: FaXTwitter,
    info: "x_puruzyang_v",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/plzang.bsky.social",
    icon: FaBluesky,
  },
];

export default links;

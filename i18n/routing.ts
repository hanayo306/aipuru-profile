import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["zh", "ja"],

  // Used when no locale matches
  defaultLocale: "zh",
});

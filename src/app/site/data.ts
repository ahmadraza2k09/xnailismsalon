/*
  On-page logo is a 700px derivative of the master artwork (the 2 MB original
  is kept only for the favicons in public/), so the brand mark paints fast.
*/
import logo from "@/imports/vector/vector_logo_seal.jpg";
import builderGelImg from "@/imports/vector/vector_builder_gel.jpg";
import polygelImg from "@/imports/vector/vector_polygel.jpg";
import acrylicImg from "@/imports/vector/vector_acrylic.jpg";
import asianArtImg from "@/imports/vector/vector_asian_art.jpg";
import gallery1 from "@/imports/vector/vector_fine_line.jpg";
import gallery2 from "@/imports/vector/vector_crystal.jpg";
import gallery3 from "@/imports/vector/vector_french.jpg";
import pedicureDry1ColorImg from "@/imports/vector/vector_pedicure_dry.jpg";
import pedicureDryDesignImg from "@/imports/vector/vector_pedicure_dry.jpg";
import pedicureSpa1ColorImg from "@/imports/vector/vector_pedicure_spa.jpg";
import pedicureSpaDesignImg from "@/imports/vector/vector_pedicure_spa.jpg";
import artistPortraitImg from "@/imports/vector/vector_artist_portrait.jpg";

export {
  logo,
  builderGelImg,
  polygelImg,
  acrylicImg,
  asianArtImg,
  pedicureDry1ColorImg,
  pedicureDryDesignImg,
  pedicureSpa1ColorImg,
  pedicureSpaDesignImg,
  artistPortraitImg,
};

/* Language-neutral facts. All prose lives in src/app/i18n/translations.ts */
export const brand = {
  name: "X.Nailsm",
  wordmark: "X.nailsm",
  phone: "664 328 9886",
  phoneHref: "tel:+526643289886",
  whatsapp: "https://wa.me/526643289886",
  whatsappNumber: "526643289886",
  instagram: "https://www.instagram.com/x.nailsm",
  instagramHandle: "@x.nailsm",
};

export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  portfolio: "/portfolio",
  contact: "/contact",
  booking: "/booking",
};

/* Images for all services, in the exact same order as t.services.items */
export const serviceImages = [
  builderGelImg,
  polygelImg,
  acrylicImg,
  asianArtImg,
  pedicureDry1ColorImg,
  pedicureDryDesignImg,
  pedicureSpa1ColorImg,
  pedicureSpaDesignImg,
];

/* Gallery order is fixed; `tag` keys into t.portfolio.tags */
export const galleryItems = [
  { src: builderGelImg, tag: "builder" },
  { src: asianArtImg, tag: "handPainted" },
  { src: pedicureDryDesignImg, tag: "pedicure" },
  { src: gallery1, tag: "fineLine" },
  { src: acrylicImg, tag: "acrylic" },
  { src: polygelImg, tag: "polygel" },
  { src: pedicureSpaDesignImg, tag: "pedicure" },
  { src: gallery2, tag: "crystal" },
  { src: gallery3, tag: "french" },
] as const;

/* `day` keys into t.common.hours */
export const studioHours = [
  { day: "tueThuSatSun", from: "07:00", to: "21:00" },
  { day: "monWedFri", from: "07:00", to: "15:00" },
] as const;

/*
  Appointment starts for Ximena's schedule:
  - Tue, Thu, Sat, Sun (2, 4, 6, 0): 7:00 am - 9:00 pm
  - Mon, Wed, Fri (1, 3, 5): 7:00 am - 3:00 pm
*/
export const timeSlots: Record<number, string[]> = {
  0: ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00"], // Domingo 7am-9pm
  1: ["07:00", "09:00", "11:00", "13:00"],                            // Lunes 7am-3pm
  2: ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00"], // Martes 7am-9pm
  3: ["07:00", "09:00", "11:00", "13:00"],                            // Miércoles 7am-3pm
  4: ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00"], // Jueves 7am-9pm
  5: ["07:00", "09:00", "11:00", "13:00"],                            // Viernes 7am-3pm
  6: ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00"], // Sábado 7am-9pm
};

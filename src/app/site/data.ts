/*
  On-page logo is a 700px derivative of the master artwork (the 2 MB original
  is kept only for the favicons in public/), so the brand mark paints fast.
*/
import logo from "@/imports/logo-seal.jpg";
import builderGelImg from "@/imports/8d5e0d9b-595f-4f62-bef6-e00598cbf0f7.jpeg";
import polygelImg from "@/imports/b29a61bf-cc3d-41e2-a835-0f15e46500aa.jpeg";
import acrylicImg from "@/imports/092385ee-ae0d-42ec-b0fc-d857f4e13718.jpeg";
import asianArtImg from "@/imports/8e8b75cf-bcf8-411e-a516-4dc67de67d3b.jpeg";
import gallery1 from "@/imports/201b52d1-291b-4f09-9168-53d4eecac74e.jpeg";
import gallery2 from "@/imports/cbe5e474-8f30-4240-814c-568a9d72849e.jpeg";
import gallery3 from "@/imports/d2e1918e-2b53-48ec-ba06-5a0663e2aa06.jpeg";
import pedicureDry1ColorImg from "@/imports/pedicure_dry_1color.jpg";
import pedicureDryDesignImg from "@/imports/pedicure_dry_design.jpg";
import pedicureSpa1ColorImg from "@/imports/pedicure_spa_1color.jpg";
import pedicureSpaDesignImg from "@/imports/pedicure_spa_design.jpg";

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

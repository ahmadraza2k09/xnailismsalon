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

export { logo, builderGelImg, polygelImg, acrylicImg, asianArtImg };

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

/* Images for the four services, in the same order as t.services.items */
export const serviceImages = [builderGelImg, polygelImg, acrylicImg, asianArtImg];

/* Gallery order is fixed; `tag` keys into t.portfolio.tags */
export const galleryItems = [
  { src: builderGelImg, tag: "builder" },
  { src: asianArtImg, tag: "handPainted" },
  { src: gallery1, tag: "fineLine" },
  { src: acrylicImg, tag: "acrylic" },
  { src: polygelImg, tag: "polygel" },
  { src: gallery2, tag: "crystal" },
  { src: gallery3, tag: "french" },
] as const;

/* `day` keys into t.common.hours; a null time means "by appointment" */
export const studioHours = [
  { day: "weekdays", time: "10:00 — 19:00" },
  { day: "saturday", time: "10:00 — 16:00" },
  { day: "sunday", time: null },
] as const;

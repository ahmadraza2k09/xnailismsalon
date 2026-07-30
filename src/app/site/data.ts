import logo from "@/imports/85e7fa0a-69f4-487a-8b11-09f22196f1c0-modified.png";
import builderGelImg from "@/imports/8d5e0d9b-595f-4f62-bef6-e00598cbf0f7.jpeg";
import polygelImg from "@/imports/b29a61bf-cc3d-41e2-a835-0f15e46500aa.jpeg";
import acrylicImg from "@/imports/092385ee-ae0d-42ec-b0fc-d857f4e13718.jpeg";
import asianArtImg from "@/imports/8e8b75cf-bcf8-411e-a516-4dc67de67d3b.jpeg";
import gallery1 from "@/imports/201b52d1-291b-4f09-9168-53d4eecac74e.jpeg";
import gallery2 from "@/imports/cbe5e474-8f30-4240-814c-568a9d72849e.jpeg";
import gallery3 from "@/imports/d2e1918e-2b53-48ec-ba06-5a0663e2aa06.jpeg";

export { logo, builderGelImg, polygelImg, acrylicImg, asianArtImg };

export const brand = {
  name: "X.Nailsm",
  wordmark: "X.NAILSM",
  tagline: "Creación · Arte · Poder",
  artist: "Ximena Moreno",
  phone: "664 328 9886",
  phoneHref: "tel:+526643289886",
  whatsapp: "https://wa.me/526643289886",
  whatsappNumber: "526643289886",
  instagram: "https://www.instagram.com/x.nailsm",
  instagramHandle: "@x.nailsm",
  hours: [
    { day: "Monday — Friday", time: "10:00 — 19:00" },
    { day: "Saturday", time: "10:00 — 16:00" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  no: string;
  title: string;
  price: string;
  desc: string;
  detail: string;
  includes: string[];
  img: string;
  alt: string;
  badge: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Builder Gel",
    price: "From $600 MXN",
    desc: "Durable, natural-looking gel overlays for strong, flexible nails with a mirror-clear finish.",
    detail:
      "A structured overlay applied on the natural nail to reinforce it while keeping the shape light and believable. Ideal if you are growing your own length or want a polished everyday set.",
    includes: ["Cuticle work & nail prep", "Structured gel overlay", "Shape & buff", "Gloss or matte top coat"],
    img: builderGelImg,
    alt: "Copper chrome builder gel nails",
    badge: "Most requested",
  },
  {
    no: "02",
    title: "Polygel Extensions",
    price: "From $700 MXN",
    desc: "Lightweight, odour-free polygel extensions sculpted for comfortable added length.",
    detail:
      "Polygel is sculpted on a dual form, giving you the strength of acrylic with the weight of gel. The result feels light on the hand and holds a crisp apex.",
    includes: ["Full nail prep", "Sculpted dual-form extension", "Custom length & shape", "Finish of your choice"],
    img: polygelImg,
    alt: "Dark mauve polygel nail extensions",
    badge: "Feather light",
  },
  {
    no: "03",
    title: "Acrylic Extensions",
    price: "From $700 MXN",
    desc: "Statement-making acrylic extensions with custom sculpting and a flawless structure.",
    detail:
      "For length that lasts. Hand-sculpted acrylic with a precise apex and thin free edge — the most resilient option for long or dramatic shapes.",
    includes: ["Full nail prep", "Hand-sculpted acrylic", "Precision apex & structure", "Colour or art of your choice"],
    img: acrylicImg,
    alt: "Gold foil acrylic nail art extensions",
    badge: "Statement",
  },
  {
    no: "04",
    title: "Nail Art & Detailing",
    price: "Variable pricing",
    desc: "Intricate hand-painted designs — florals, gems and fine-line luxury detailing.",
    detail:
      "Fine-brush work inspired by Asian nail culture: hand-painted florals, encapsulated details, gem placement and gradients, priced by the complexity of the design.",
    includes: ["Design consultation", "Hand-painted detailing", "Gem & foil placement", "Protective top coat"],
    img: asianArtImg,
    alt: "Pink floral hand-painted nail art",
    badge: "Signature art",
  },
];

export const galleryImages = [
  { src: builderGelImg, alt: "Copper chrome builder gel nails", tag: "Builder gel" },
  { src: asianArtImg, alt: "Pink floral hand-painted nail art", tag: "Hand-painted" },
  { src: gallery1, alt: "Grey star and polka dot nail art", tag: "Fine line" },
  { src: acrylicImg, alt: "Gold foil acrylic nail extensions", tag: "Acrylic" },
  { src: polygelImg, alt: "Dark mauve polygel nail extensions", tag: "Polygel" },
  { src: gallery2, alt: "Crystal gem hand-painted nail art", tag: "Crystal detail" },
  { src: gallery3, alt: "Zebra print French tip acrylic nails", tag: "French tip" },
];

export const testimonials = [
  {
    name: "Sofía R.",
    role: "Regular client",
    text: "Ximena is an absolute artist. Every time I leave, I feel like I have a small masterpiece on my hands. The hand-painted detail is unmatched.",
  },
  {
    name: "Valentina M.",
    role: "New client",
    text: "I was nervous about extensions for the first time, but the whole experience was relaxing and genuinely luxurious. The polygel set looks completely natural.",
  },
  {
    name: "Daniela L.",
    role: "Loyal client",
    text: "Nearly nine years of expertise really shows — the structure, the prep work and the creative vision are on another level.",
  },
];

export const stats = [
  { value: "9+", label: "Years of artistry" },
  { value: "500+", label: "Happy clients" },
  { value: "4", label: "Signature techniques" },
];

export const serviceOptions = services.map((s) => `${s.title} — ${s.price}`);

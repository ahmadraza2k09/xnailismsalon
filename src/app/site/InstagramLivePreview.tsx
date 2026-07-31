import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Grid,
  Film,
  UserCheck,
  UserPlus,
  CheckCircle2,
  Volume2,
  VolumeX,
  X,
  ChevronRight,
  Play,
  Copy,
  Check,
  Bookmark,
  Send,
  Sparkles,
  Wifi,
  Battery,
  Maximize2,
  Smartphone,
  Eye,
  Flame,
  Star,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useT } from "@/app/i18n";
import { Ambient, Reveal3D, SectionHeading, TiltCard, Scroll3DRotate } from "./ui";
import {
  brand,
  logo,
  builderGelImg,
  polygelImg,
  acrylicImg,
  asianArtImg,
  galleryItems,
} from "./data";

/* Instagram post data for the live profile screen */
interface IgPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  timeAgo: string;
  type: "photo" | "reel" | "carousel";
  views?: string;
  userComments?: { user: string; text: string; time: string }[];
}

interface IgStory {
  id: string;
  title: string;
  icon: string;
  image: string;
  caption: string;
  date: string;
}

const INITIAL_POSTS: IgPost[] = [
  {
    id: "p1",
    image: builderGelImg,
    likes: 1248,
    comments: 48,
    caption:
      "Nivelación con Builder Gel en tono nude natural ✨ Estructura perfecta para un acabado impecable que dura semanas. #xnailsm #buildergel #nailart #tijuana #uñasdeautor",
    timeAgo: "2 HACE HORAS",
    type: "photo",
    userComments: [
      { user: "sofia_nails", text: "¡Simplemente impecables! 😍", time: "1h" },
      { user: "valeria.g", text: "El mejor builder gel de Tijuana ❤️", time: "45m" },
    ],
  },
  {
    id: "p2",
    image: asianArtImg,
    likes: 1894,
    comments: 84,
    caption:
      "Arte pintado 100% a mano con inspiración oriental 🌸 Detalles ultra finos creados con pincel cero. ¿Qué opinan de este set? #xnailsm #handpainted #nailartist #fineart #uñas",
    timeAgo: "1 DÍA",
    type: "carousel",
    userComments: [
      { user: "camila_art", text: "¡Vaya talento Ximena! 🔥", time: "2h" },
      { user: "majo_beauty", text: "Quiero mi cita ya para este diseño ✨", time: "1d" },
    ],
  },
  {
    id: "p3",
    image: galleryItems[2].src, // gallery1
    likes: 921,
    comments: 52,
    caption:
      "Minimalismo sofisticado: fine line y acentos metálicos sutiles ✨ Cada trazo con máxima precisión. #xnailsm #minimalism #tijuananails #uñasminimalistas",
    timeAgo: "2 DÍAS",
    type: "photo",
    userComments: [
      { user: "lucia_m", text: "Amando este estilo sobrio y elegante 🤍", time: "1d" },
    ],
  },
  {
    id: "p4",
    image: acrylicImg,
    likes: 1115,
    comments: 39,
    caption:
      "Esculpido en acrílico con punta almendra refinada 💅 Fuerza, simetría y elegancia en cada uña. #xnailsm #acrylicnails #esculpidodeuñas #tijuana",
    timeAgo: "4 DÍAS",
    type: "photo",
    userComments: [
      { user: "andrea_t", text: "Súper naturales y resistentes ✨", time: "3d" },
    ],
  },
  {
    id: "p5",
    image: polygelImg,
    likes: 2830,
    comments: 91,
    caption:
      "Polygel híbrido con encapsulado de destellos rosas ✨ Súper ligero y resistente. #xnailsm #polygel #nailsoftheday #uñastijuana",
    timeAgo: "5 DÍAS",
    type: "reel",
    views: "34.8K",
    userComments: [
      { user: "regina_v", text: "¡Ese brillo está de otro nivel! 💖", time: "4d" },
    ],
  },
  {
    id: "p6",
    image: galleryItems[5].src, // gallery2
    likes: 1954,
    comments: 98,
    caption:
      "Detalles en cristales de alta gama para una novia muy especial 💎 Brillo radiante y fijación garantizada. #xnailsm #bridalnails #uñasdenovia #crystals",
    timeAgo: "1 SEMANA",
    type: "photo",
    userComments: [
      { user: "elena_bridal", text: "¡Mis uñas de boda quedaron de ensueño! 👰", time: "6d" },
    ],
  },
  {
    id: "p7",
    image: galleryItems[6].src, // gallery3
    likes: 889,
    comments: 43,
    caption:
      "El clásico French reinventado con línea ultrasuave y tono de base personalizado 💅 #xnailsm #frenchnails #frenchmanicure #uñasclasicas",
    timeAgo: "1 SEMANA",
    type: "photo",
  },
  {
    id: "p8",
    image: logo,
    likes: 2240,
    comments: 142,
    caption:
      "Bienvenidas a X.Nailsm Studio 🕊️ Un espacio creado para que disfrutes tu manicure como un verdadero ritual de belleza. Citas por WhatsApp. #xnailsm #studionails",
    timeAgo: "2 SEMANAS",
    type: "photo",
  },
  {
    id: "p9",
    image: builderGelImg,
    likes: 1780,
    comments: 65,
    caption:
      "Proceso de nivelación en vivo 🎬 El brillo final sin capa de dispersión. Reserva tu cita en el enlace del perfil. #xnailsm #process #nailtech",
    timeAgo: "2 SEMANAS",
    type: "reel",
    views: "28.2K",
  },
];

const IG_STORIES: IgStory[] = [
  {
    id: "s1",
    title: "Diseños 💅",
    icon: "💅",
    image: asianArtImg,
    caption: "Colección de arte pintado a mano para esta temporada ✨",
    date: "Destacado",
  },
  {
    id: "s2",
    title: "Precios 💎",
    icon: "💎",
    image: builderGelImg,
    caption: "Menú de servicios: Builder Gel, Polygel, Acrílico y Cursos",
    date: "Destacado",
  },
  {
    id: "s3",
    title: "Estudio ✨",
    icon: "✨",
    image: logo,
    caption: "Ubicación privada en Tijuana · Ambiente higiénico y exclusivo",
    date: "Destacado",
  },
  {
    id: "s4",
    title: "Reseñas ⭐️",
    icon: "⭐️",
    image: galleryItems[2].src,
    caption: "Lo que dicen nuestras clientas: 'El mejor manicure de Tijuana' ❤️",
    date: "Destacado",
  },
  {
    id: "s5",
    title: "Proceso 🎬",
    icon: "🎬",
    image: polygelImg,
    caption: "Paso a paso de la preparación y nivelación de la uña natural",
    date: "Destacado",
  },
];

export function InstagramLivePreview() {
  const t = useT();

  /* State management */
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(5633);
  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "tagged">("posts");
  const [selectedPost, setSelectedPost] = useState<IgPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const [copiedToast, setCopiedToast] = useState(false);
  const [viewMode, setViewMode] = useState<"phone" | "expanded">("phone");
  const [muted, setMuted] = useState(true);
  const [heartBurst, setHeartBurst] = useState<string | null>(null);
  const [newCommentInput, setNewCommentInput] = useState("");
  const [postsList, setPostsList] = useState<IgPost[]>(INITIAL_POSTS);

  /* Live status bar clock */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  /* Toggle Follower Status with particle burst effect */
  const handleToggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  /* Toggle Like on Post with floating heart explosion */
  const handleToggleLike = (postId: string) => {
    const isCurrentlyLiked = likedPosts[postId];
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !isCurrentlyLiked,
    }));

    if (!isCurrentlyLiked) {
      setHeartBurst(postId);
      setTimeout(() => setHeartBurst(null), 1000);
    }
  };

  /* Add new comment in post lightbox */
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentInput.trim() || !selectedPost) return;

    const newComment = {
      user: "tú",
      text: newCommentInput.trim(),
      time: "ahora",
    };

    setPostsList((prevPosts) =>
      prevPosts.map((p) =>
        p.id === selectedPost.id
          ? {
              ...p,
              comments: p.comments + 1,
              userComments: [...(p.userComments || []), newComment],
            }
          : p
      )
    );

    setSelectedPost((prev) =>
      prev
        ? {
            ...prev,
            comments: prev.comments + 1,
            userComments: [...(prev.userComments || []), newComment],
          }
        : null
    );

    setNewCommentInput("");
  };

  /* Copy profile link to clipboard */
  const handleShareProfile = () => {
    navigator.clipboard.writeText(brand.instagram);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  return (
    <section
      id="instagram-live"
      className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-mauve/5 to-ivory-warm border-y border-border scene"
    >
      <Ambient />
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <Reveal3D className="flex flex-col items-center text-center max-w-2xl">
          <SectionHeading
            eyebrow=""
            title={t.home.instagramTitle}
            accent={t.home.instagramAccent}
            subtitle={t.home.instagramSubtitle}
          />
        </Reveal3D>

        {/* View Mode Switcher Pills */}
        <div className="mt-8 mb-10 flex items-center gap-2 p-1.5 bg-mauve/10 backdrop-blur-xl rounded-2xl border border-mauve/20 shadow-inner">
          <button
            onClick={() => setViewMode("phone")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
              viewMode === "phone"
                ? "bg-white text-mauve-deep shadow-md font-bold scale-[1.02]"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            <Smartphone size={15} />
            <span>Vista Móvil Pro</span>
          </button>
          <button
            onClick={() => setViewMode("expanded")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
              viewMode === "expanded"
                ? "bg-white text-mauve-deep shadow-md font-bold scale-[1.02]"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            <Maximize2 size={15} />
            <span>Mural 3D Ampliado</span>
          </button>
        </div>

        {/* ── PHONE FRAME VIEW ────────────────────────────────────── */}
        {viewMode === "phone" ? (
          <Scroll3DRotate intensity={10} className="w-full flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[350px]">
            {/* Multilayer Ambient Aura Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/20 via-pink-500/25 to-amber-500/20 rounded-[52px] blur-3xl opacity-80 animate-pulse pointer-events-none" />

            {/* iPhone 16 Pro Titanium Metal Chassis */}
            <div className="relative w-full bg-neutral-950 rounded-[42px] p-[6px] shadow-2xl border-[1.5px] border-neutral-700/80 ring-1 ring-white/20 overflow-hidden">
              {/* Metallic Edge Reflections */}
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-b from-white/10 via-transparent to-white/5 pointer-events-none" />

              {/* Side Buttons */}
              <div className="absolute -left-[4px] top-20 w-[2px] h-7 bg-neutral-600 rounded-l-md shadow" />
              <div className="absolute -left-[4px] top-32 w-[2px] h-10 bg-neutral-600 rounded-l-md shadow" />
              <div className="absolute -left-[4px] top-45 w-[2px] h-10 bg-neutral-600 rounded-l-md shadow" />
              <div className="absolute -right-[4px] top-28 w-[2px] h-14 bg-neutral-600 rounded-r-md shadow" />

              {/* Viewport Screen */}
              <div className="relative w-full bg-white rounded-[36px] overflow-hidden text-neutral-900 flex flex-col h-[620px] shadow-inner">
                {/* Status Bar */}
                <div className="shrink-0 h-10 px-5 pt-2 flex items-center justify-between bg-white text-black font-semibold text-[11px] z-30 select-none">
                  <span className="font-bold tracking-tight">{currentTime || "9:41"}</span>

                  {/* Dynamic Island Notch */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-20 h-4 bg-black rounded-full flex items-center justify-between px-2">
                    <div className="w-2 h-2 rounded-full bg-neutral-900 border border-neutral-800" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  <div className="flex items-center gap-1 text-neutral-900 font-semibold">
                    <Wifi size={12} />
                    <Battery size={13} className="rotate-90" />
                  </div>
                </div>

                {/* Instagram App Top Header */}
                <div className="shrink-0 px-3.5 py-2 flex items-center justify-between border-b border-neutral-100 bg-white/95 backdrop-blur-md z-20">
                  <div className="flex items-center gap-1 font-bold text-sm tracking-tight text-neutral-900">
                    <span>x.nailsm</span>
                    <CheckCircle2 size={14} className="fill-sky-500 text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-neutral-800">
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
                      title={t.home.instagramOpenProfile}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <button
                      onClick={handleShareProfile}
                      className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
                      title="Compartir enlace"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Toast Copy Notification */}
                <AnimatePresence>
                  {copiedToast && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-12 left-1/2 -translate-x-1/2 z-40 bg-neutral-900/90 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full shadow-lg flex items-center gap-1 pointer-events-none"
                    >
                      <Check size={12} className="text-emerald-400" />
                      <span>{t.home.instagramCopied}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Scrollable Profile Body */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none">
                  {/* Profile Info Header */}
                  <div className="p-3 pb-2">
                    <div className="flex items-center gap-2">
                      {/* Avatar with Animated Story Ring */}
                      <button
                        onClick={() => setActiveStoryIndex(0)}
                        className="relative p-0.5 shrink-0 group focus:outline-none"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 animate-pulse" />
                        <div className="relative p-[1.5px] bg-white rounded-full">
                          <img
                            src={logo}
                            alt={brand.name}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                        </div>
                        <span className="absolute bottom-0 right-0 bg-pink-600 text-white p-0.5 rounded-full text-[8px] border-2 border-white shadow">
                          <Sparkles size={8} />
                        </span>
                      </button>

                      {/* Real Instagram Stats - Perfectly Centered Grid */}
                      <div className="flex-1 grid grid-cols-3 text-center items-center justify-center my-auto">
                        <div className="flex flex-col items-center justify-center">
                          <div className="font-bold text-xs leading-none text-neutral-900">1,177</div>
                          <div className="text-[9px] text-neutral-500 font-normal mt-1 leading-none">
                            {t.home.instagramPosts}
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="font-bold text-xs leading-none text-neutral-900">
                            {followerCount.toLocaleString()}
                          </div>
                          <div className="text-[9px] text-neutral-500 font-normal mt-1 leading-none">
                            {t.home.instagramFollowers}
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="font-bold text-xs leading-none text-neutral-900">1,268</div>
                          <div className="text-[9px] text-neutral-500 font-normal mt-1 leading-none">
                            {t.home.instagramFollowingCount}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-2.5 text-xs leading-relaxed text-neutral-800">
                      <h2 className="font-bold text-neutral-900 text-xs">
                        {t.home.instagramBioName}
                      </h2>
                      <p className="text-neutral-600 text-[10.5px]">{t.home.instagramBioLine1}</p>
                      <p className="text-neutral-600 text-[10.5px]">{t.home.instagramBioLine2}</p>
                      <p className="text-neutral-500 text-[10.5px] mt-0.5">
                        {t.home.instagramBioLine3}
                      </p>
                      <a
                        href={brand.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-600 hover:underline text-[10.5px] block mt-0.5"
                      >
                        instagram.com/x.nailsm
                      </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-1.5 mt-3">
                      <button
                        onClick={handleToggleFollow}
                        className={`py-1.5 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all duration-300 ${
                          isFollowing
                            ? "bg-neutral-100 text-neutral-800 border border-neutral-200"
                            : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sm scale-[1.01]"
                        }`}
                      >
                        {isFollowing ? (
                          <>
                            <UserCheck size={13} />
                            <span>{t.home.instagramFollowing}</span>
                          </>
                        ) : (
                          <>
                            <UserPlus size={13} />
                            <span>{t.home.instagramFollow}</span>
                          </>
                        )}
                      </button>

                      <a
                        href={brand.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 rounded-lg text-[11px] font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 flex items-center justify-center gap-1 transition-colors"
                      >
                        <MessageCircle size={13} />
                        <span>{t.home.instagramMessage}</span>
                      </a>
                    </div>

                    {/* Story Highlights Carousel */}
                    <div className="mt-3 pt-2.5 border-t border-neutral-100">
                      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                        {IG_STORIES.map((story, index) => (
                          <button
                            key={story.id}
                            onClick={() => setActiveStoryIndex(index)}
                            className="flex flex-col items-center gap-1 shrink-0 group focus:outline-none"
                          >
                            <div className="p-[1.5px] rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-500 group-hover:scale-105 transition-transform">
                              <div className="p-0.5 bg-white rounded-full">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-sm font-semibold border border-neutral-200 shadow-inner">
                                  {story.icon}
                                </div>
                              </div>
                            </div>
                            <span className="text-[9.5px] text-neutral-700 font-medium truncate max-w-[50px]">
                              {story.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Profile Navigation Tabs (Posts, Reels, Tagged) */}
                  <div className="flex border-t border-neutral-200 bg-white sticky top-0 z-10 shadow-sm">
                    <button
                      onClick={() => setActiveTab("posts")}
                      className={`flex-1 py-2 flex items-center justify-center transition-colors relative ${
                        activeTab === "posts" ? "text-black font-bold" : "text-neutral-400"
                      }`}
                    >
                      <Grid size={16} />
                      {activeTab === "posts" && (
                        <motion.div
                          layoutId="igTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                        />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("reels")}
                      className={`flex-1 py-2 flex items-center justify-center transition-colors relative ${
                        activeTab === "reels" ? "text-black font-bold" : "text-neutral-400"
                      }`}
                    >
                      <Film size={16} />
                      {activeTab === "reels" && (
                        <motion.div
                          layoutId="igTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                        />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("tagged")}
                      className={`flex-1 py-2 flex items-center justify-center transition-colors relative ${
                        activeTab === "tagged" ? "text-black font-bold" : "text-neutral-400"
                      }`}
                    >
                      <Bookmark size={16} />
                      {activeTab === "tagged" && (
                        <motion.div
                          layoutId="igTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                        />
                      )}
                    </button>
                  </div>

                  {/* Tab Content: Posts Grid */}
                  {activeTab === "posts" && (
                    <div className="grid grid-cols-3 gap-[1px] bg-neutral-200">
                      {postsList.map((post) => {
                        const isLiked = likedPosts[post.id];
                        return (
                          <button
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="relative aspect-square bg-neutral-100 overflow-hidden group focus:outline-none select-none"
                          >
                            <ImageWithFallback
                              src={post.image}
                              alt="Nail artwork post"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Type badges */}
                            {post.type === "reel" && (
                              <span className="absolute top-1 right-1 text-white drop-shadow-md">
                                <Film size={12} />
                              </span>
                            )}
                            {post.type === "carousel" && (
                              <span className="absolute top-1 right-1 text-white drop-shadow-md">
                                <Copy size={11} />
                              </span>
                            )}

                            {/* Heart Explosion Particles */}
                            <AnimatePresence>
                              {heartBurst === post.id && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.3 }}
                                  animate={{ opacity: 1, scale: 1.4 }}
                                  exit={{ opacity: 0, scale: 1.8 }}
                                  className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                                >
                                  <Heart size={36} className="fill-red-500 text-red-500 drop-shadow-lg animate-bounce" />
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Hover Overlay with Likes & Comments */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5 text-white text-[11px] font-bold">
                              <span className="flex items-center gap-1">
                                <Heart
                                  size={12}
                                  className={isLiked ? "fill-red-500 text-red-500" : "fill-white"}
                                />
                                {post.likes + (isLiked ? 1 : 0)}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle size={12} className="fill-white" />
                                {post.comments}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Tab Content: Reels View */}
                  {activeTab === "reels" && (
                    <div className="grid grid-cols-3 gap-[1px] bg-neutral-200">
                      {postsList.filter((p) => p.type === "reel" || p.likes > 1200).map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="relative aspect-[9/16] bg-neutral-900 overflow-hidden group focus:outline-none"
                        >
                          <ImageWithFallback
                            src={post.image}
                            alt="Reel preview"
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                          <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 text-white text-[9px] font-bold drop-shadow">
                            <Play size={10} className="fill-white" />
                            <span>{post.views || "24.8K"}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Tab Content: Tagged View */}
                  {activeTab === "tagged" && (
                    <div className="grid grid-cols-3 gap-[1px] bg-neutral-200">
                      {postsList.slice(2, 8).map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="relative aspect-square bg-neutral-100 overflow-hidden group focus:outline-none"
                        >
                          <ImageWithFallback
                            src={post.image}
                            alt="Tagged post"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-white px-1.5 py-0.5 rounded text-[8px] font-medium">
                            @client_art
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom App Navigation Bar */}
                <div className="shrink-0 h-11 px-5 bg-white border-t border-neutral-200 flex items-center justify-between text-neutral-800 z-20">
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-pink-600 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <button
                    onClick={() => setActiveTab("posts")}
                    className="p-1 hover:text-pink-600 transition-colors"
                  >
                    <Grid size={18} />
                  </button>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-gradient-to-tr from-pink-500 via-purple-600 to-amber-500 text-white rounded-full shadow-md hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={15} />
                  </a>
                  <button
                    onClick={() => setActiveTab("reels")}
                    className="p-1 hover:text-pink-600 transition-colors"
                  >
                    <Film size={18} />
                  </button>
                  <button
                    onClick={() => setActiveStoryIndex(0)}
                    className="w-5 h-5 rounded-full overflow-hidden border border-neutral-300 focus:outline-none"
                  >
                    <img src={logo} alt="Profile" className="w-full h-full object-cover" />
                  </button>
                </div>

                {/* ── IN-APP STORY VIEWER OVERLAY ───────────────────── */}
                <AnimatePresence>
                  {activeStoryIndex !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 z-50 bg-black text-white flex flex-col justify-between p-3 select-none"
                    >
                      {/* Story Progress Bars */}
                      <div className="flex gap-1 pt-1 z-20">
                        {IG_STORIES.map((st, idx) => (
                          <div
                            key={st.id}
                            className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
                          >
                            <motion.div
                              initial={{ width: idx < activeStoryIndex ? "100%" : "0%" }}
                              animate={{
                                width:
                                  idx === activeStoryIndex
                                    ? "100%"
                                    : idx < activeStoryIndex
                                    ? "100%"
                                    : "0%",
                              }}
                              transition={
                                idx === activeStoryIndex
                                  ? { duration: 5, ease: "linear" }
                                  : { duration: 0 }
                              }
                              className="h-full bg-white"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Story Header */}
                      <div className="flex items-center justify-between pt-2 pb-1 z-20">
                        <div className="flex items-center gap-2">
                          <img src={logo} alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-white/50" />
                          <div className="text-[11px] font-semibold flex items-center gap-1">
                            <span>x.nailsm</span>
                            <CheckCircle2 size={11} className="fill-sky-500 text-black" />
                            <span className="text-[9px] text-white/70 font-normal">2h</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setMuted(!muted)}
                            className="p-1 hover:bg-white/20 rounded-full"
                          >
                            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                          </button>
                          <button
                            onClick={() => setActiveStoryIndex(null)}
                            className="p-1 hover:bg-white/20 rounded-full"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Story Main Image */}
                      <div className="relative flex-1 rounded-2xl overflow-hidden my-1 flex items-center justify-center bg-neutral-900">
                        <ImageWithFallback
                          src={IG_STORIES[activeStoryIndex].image}
                          alt="Story artwork"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

                        {/* Tap Controls */}
                        <button
                          onClick={() =>
                            setActiveStoryIndex((prev) =>
                              prev !== null && prev > 0 ? prev - 1 : null
                            )
                          }
                          className="absolute left-0 top-0 bottom-0 w-1/3 z-10 focus:outline-none"
                        />
                        <button
                          onClick={() =>
                            setActiveStoryIndex((prev) =>
                              prev !== null && prev < IG_STORIES.length - 1 ? prev + 1 : null
                            )
                          }
                          className="absolute right-0 top-0 bottom-0 w-1/3 z-10 focus:outline-none"
                        />

                        {/* Story Caption & Booking CTA */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 bg-black/50 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-[11px]">
                          <p className="font-medium text-white/90 leading-tight">
                            {IG_STORIES[activeStoryIndex].caption}
                          </p>
                          <a
                            href={brand.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-1.5 text-[10px] text-pink-300 font-semibold hover:underline"
                          >
                            <span>Reservar cita por WhatsApp</span>
                            <ChevronRight size={11} />
                          </a>
                        </div>
                      </div>

                      {/* Story Reply Footer */}
                      <div className="flex items-center gap-2 pb-1 z-20">
                        <a
                          href={brand.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 px-3 rounded-full border border-white/40 text-[10px] text-white/80 bg-white/10 flex items-center justify-between"
                        >
                          <span>Enviar mensaje a x.nailsm...</span>
                          <Send size={12} />
                        </a>
                        <button
                          onClick={() =>
                            handleToggleLike(`story-${activeStoryIndex}`)
                          }
                          className="p-2 rounded-full border border-white/40 bg-white/10 text-white"
                        >
                          <Heart
                            size={14}
                            className={
                              likedPosts[`story-${activeStoryIndex}`]
                                ? "fill-red-500 text-red-500"
                                : ""
                            }
                          />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── IN-APP POST LIGHTBOX MODAL WITH REAL COMMENTS ── */}
                <AnimatePresence>
                  {selectedPost && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 z-50 bg-white text-neutral-900 flex flex-col justify-between select-none"
                    >
                      {/* Modal Header */}
                      <div className="px-3.5 py-2 border-b border-neutral-100 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-2">
                          <img src={logo} alt="Avatar" className="w-6 h-6 rounded-full object-cover" />
                          <div>
                            <div className="text-[11px] font-bold flex items-center gap-1">
                              <span>x.nailsm</span>
                              <CheckCircle2 size={11} className="fill-sky-500 text-white" />
                            </div>
                            <div className="text-[9px] text-neutral-400">Publicación oficial</div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedPost(null)}
                          className="p-1 hover:bg-neutral-100 rounded-full"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Modal Main Image */}
                      <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                        <ImageWithFallback
                          src={selectedPost.image}
                          alt="Post enlarged view"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Action Bar & Caption */}
                      <div className="p-3 bg-white border-t border-neutral-100 flex flex-col gap-2 max-h-[210px] overflow-y-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleToggleLike(selectedPost.id)}
                              className="text-neutral-800 hover:text-red-500 transition-colors"
                            >
                              <Heart
                                size={18}
                                className={
                                  likedPosts[selectedPost.id]
                                    ? "fill-red-500 text-red-500 scale-110"
                                    : ""
                                }
                              />
                            </button>
                            <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                              <MessageCircle size={18} className="text-neutral-800" />
                            </a>
                            <button onClick={handleShareProfile}>
                              <Send size={18} className="text-neutral-800" />
                            </button>
                          </div>
                          <a
                            href={brand.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10.5px] text-sky-600 font-semibold hover:underline flex items-center gap-0.5"
                          >
                            <span>{t.home.instagramViewOnIg}</span>
                            <ExternalLink size={11} />
                          </a>
                        </div>

                        <div className="text-[11px] font-bold text-neutral-900">
                          {(selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)).toLocaleString()}{" "}
                          Me gusta
                        </div>

                        <div className="text-[10.5px] text-neutral-700 leading-normal">
                          <span className="font-bold mr-1">x.nailsm</span>
                          {selectedPost.caption}
                        </div>

                        {/* User Comments Feed */}
                        {selectedPost.userComments && selectedPost.userComments.length > 0 && (
                          <div className="mt-1 pt-1.5 border-t border-neutral-100 space-y-1">
                            {selectedPost.userComments.map((c, i) => (
                              <div key={i} className="text-[10px] text-neutral-800 leading-tight">
                                <span className="font-bold mr-1">{c.user}</span>
                                <span className="text-neutral-600">{c.text}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Interactive Add Comment Form */}
                        <form onSubmit={handleAddComment} className="mt-1.5 flex items-center gap-1.5 pt-1.5 border-t border-neutral-100">
                          <input
                            type="text"
                            placeholder="Añadir un comentario..."
                            value={newCommentInput}
                            onChange={(e) => setNewCommentInput(e.target.value)}
                            className="flex-1 text-[10.5px] px-2 py-1 bg-neutral-50 rounded-md border border-neutral-200 focus:outline-none focus:border-sky-500"
                          />
                          <button
                            type="submit"
                            disabled={!newCommentInput.trim()}
                            className="text-[10.5px] font-bold text-sky-500 disabled:opacity-40"
                          >
                            Publicar
                          </button>
                        </form>

                        <div className="text-[8.5px] text-neutral-400 font-medium">
                          {selectedPost.timeAgo}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          </Scroll3DRotate>
        ) : (
          /* ── LUXURY 3D WALL FEED VIEW ───────────────────────── */
          <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-mauve/20">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-mauve/15">
              <div className="flex items-center gap-4">
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-md">
                  <img src={logo} alt="X.Nailsm" className="w-20 h-20 rounded-full object-cover border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold text-mauve-deep">@x.nailsm</h3>
                    <CheckCircle2 size={20} className="fill-sky-500 text-white" />
                  </div>
                  <p className="text-sm text-foreground/75 mt-1">{t.home.instagramBioLine1}</p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-mauve mt-2">
                    <span>1,177 Publicaciones</span>
                    <span>{followerCount.toLocaleString()} Seguidores</span>
                    <span>1,268 Seguidos</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-6 py-3.5 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  <Instagram size={16} />
                  <span>{t.home.instagramOpenProfile}</span>
                </a>
              </div>
            </div>

            {/* 3D Wall Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 mt-6">
              {postsList.map((post) => {
                const isLiked = likedPosts[post.id];
                return (
                  <TiltCard key={post.id} intensity={10} className="h-full">
                    <div className="relative aspect-square rounded-2xl overflow-hidden group border border-mauve/20 shadow-md">
                      <ImageWithFallback
                        src={post.image}
                        alt="Nail art item"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleToggleLike(post.id)}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors"
                          >
                            <Heart
                              size={16}
                              className={isLiked ? "fill-red-500 text-red-500" : "fill-white"}
                            />
                          </button>
                        </div>
                        <div>
                          <p className="text-xs line-clamp-2 text-white/90 font-medium">{post.caption}</p>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-xs font-bold">
                            <span>❤️ {(post.likes + (isLiked ? 1 : 0)).toLocaleString()}</span>
                            <span>💬 {post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Bar underneath */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden scale-[1.02] hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 group-hover:scale-110 transition-transform duration-500" />
            <Instagram size={20} className="relative z-10" />
            <span className="relative z-10 text-sm font-bold tracking-wide">
              {t.home.instagramOpenProfile} (@x.nailsm)
            </span>
            <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

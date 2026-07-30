/*
  Site copy in both languages. Spanish is the site's main language; English is
  the translation. Both trees must keep exactly the same shape — `Dict` is
  derived from the Spanish tree, so TypeScript flags anything missing in `en`.
*/

export type Lang = "es" | "en";

const es = {
  meta: {
    title: "X.Nailsm",
    description:
      "X.Nailsm — el estudio de uñas de Ximena Moreno. Gel de constructor, extensiones de polygel y acrílico con arte pintado a mano, con reserva directa por WhatsApp.",
    langName: "Español",
  },

  nav: {
    home: "Inicio",
    about: "Sobre mí",
    services: "Servicios",
    portfolio: "Portafolio",
    contact: "Contacto",
    booking: "Reservar",
    bookNow: "Reservar cita",
    bookAppointment: "Reservar una cita",
    studioLine: "Estudio de uñas",
    menu: "Menú",
  },

  common: {
    tagline: "Creación · Arte · Poder",
    artist: "Ximena Moreno",
    viewPortfolio: "Ver el portafolio",
    allServices: "Todos los servicios y precios",
    fullGallery: "Ver la galería completa",
    moreAboutHer: "Más sobre Ximena",
    bookThisService: "Reservar este servicio",
    bookSession: "Reservar una sesión",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    phone: "Teléfono",
    hours: {
      weekdays: "Lunes — Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      byAppointment: "Con cita previa",
    },
  },

  home: {
    heroTitle: "Donde las uñas",
    heroAccent: "se vuelven arte",
    heroText:
      "Servicios de uñas personalizados, hechos con precisión y lujo discreto: extensiones estructuradas, acabados refinados y arte pintado a mano por",
    introEyebrow: "El estudio",
    introTitle: "Pasión trabajada",
    introAccent: "en cada detalle",
    introP1:
      "X.Nailsm es un estudio privado construido sobre una idea: un manicure debe sentirse como un ritual pensado, no como un trámite. Cada set comienza con una preparación cuidadosa y termina con un acabado que dura.",
    introP2:
      "Del gel de constructor esculpido al detalle fino pintado a mano, Ximena Moreno combina precisión técnica con un estilo sobrio y clásico.",
    badgeName: "Ximena Moreno",
    badgeSub: "Casi nueve años de artesanía profesional",
    servicesEyebrow: "Lo que ofrecemos",
    servicesTitle: "Servicios",
    servicesAccent: "de autor",
    servicesSubtitle:
      "Cuatro técnicas, cada una adaptada a la forma de tus manos y a tu día a día.",
    portfolioEyebrow: "Trabajo reciente",
    portfolioTitle: "El portafolio",
    portfolioSubtitle: "Una selección de sets recientes del estudio.",
    testimonialsEyebrow: "Palabras de clientas",
    testimonialsTitle: "Lo que dicen",
    ctaEyebrow: "Con cita previa",
    ctaTitle: "Reserva tu",
    ctaAccent: "experiencia de uñas",
    ctaSubtitle:
      "Envía tu fecha y servicio preferidos por WhatsApp — Ximena responde personalmente.",
  },

  about: {
    headerEyebrow: "Sobre la artista",
    headerTitle: "Ximena Moreno",
    headerAccent: "artista de uñas y fundadora",
    headerSubtitle:
      "Casi nueve años convirtiendo el cuidado de las uñas en un ritual personal y bien pensado.",
    storyEyebrow: "La historia",
    storyTitle: "Un estudio construido",
    storyAccent: "sobre oficio y cuidado",
    storyP1a: "Con casi",
    storyP1Strong: "nueve años de dominio profesional",
    storyP1b:
      ", Ximena Moreno ha convertido el cuidado de las uñas en un ritual personalizado del que sus clientas salen serenas y seguras.",
    storyP2:
      "Siempre al frente de la estética global de uñas —del gel de constructor esculpido al arte detallado pintado a mano— une precisión técnica con una mirada creativa contenida.",
    storyP3:
      "Tu sesión es más que una cita: es una experiencia de estudio tranquila y privada, centrada en tu comodidad y en tu propio estilo.",
    valuesEyebrow: "Cómo trabajamos",
    valuesTitle: "Tres principios",
    valuesAccent: "silenciosos",
    valuesSubtitle: "Los hábitos detrás de cada set que sale del estudio.",
    values: [
      {
        title: "La preparación primero",
        text: "Cada set empieza con un trabajo meticuloso de cutícula y una lámina ungueal bien preparada. Es la razón por la que el trabajo dura.",
      },
      {
        title: "Estructura antes que prisa",
        text: "Un ápice correcto y un borde libre delgado hacen que un set sea fuerte y cómodo. Nada se apresura por ahorrar unos minutos.",
      },
      {
        title: "Lujo discreto",
        text: "Productos premium, un estudio tranquilo y un lenguaje de diseño que sigue siendo elegante mucho después de la cita.",
      },
    ],
    studioEyebrow: "La experiencia",
    studioTitle: "Dentro del",
    studioAccent: "estudio",
    studioPoints: [
      "Citas privadas, una a la vez, sin empalmes.",
      "Herramienta esterilizada y limas de un solo uso para cada clienta.",
      "Consulta de diseño antes de la primera pincelada.",
      "Indicaciones de cuidado para que tu set dure todo lo que debe.",
    ],
  },

  services: {
    headerEyebrow: "Servicios y precios",
    headerTitle: "Servicios",
    headerAccent: "de autor",
    headerSubtitle:
      "Experiencias de uñas a la medida, con productos premium y técnica refinada. Los precios parten de las cifras indicadas y varían según largo y diseño.",
    includesLabel: "Incluye",
    processEyebrow: "La cita",
    processTitle: "Cómo transcurre",
    processAccent: "una sesión",
    processSubtitle: "Alrededor de dos horas de principio a fin, según el diseño.",
    reserveCta: "Reserva tu cita",
    items: [
      {
        title: "Gel de constructor",
        price: "Desde $600 MXN",
        badge: "El más pedido",
        desc: "Cobertura de gel duradera y de aspecto natural, para uñas fuertes y flexibles con acabado espejo.",
        detail:
          "Una cobertura estructurada aplicada sobre la uña natural para reforzarla, manteniendo una forma ligera y creíble. Ideal si estás dejando crecer tu propio largo o quieres un set pulido para el día a día.",
        includes: [
          "Trabajo de cutícula y preparación",
          "Cobertura de gel estructurada",
          "Forma y pulido",
          "Top coat brillante o mate",
        ],
      },
      {
        title: "Extensiones de polygel",
        price: "Desde $700 MXN",
        badge: "Ultra ligeras",
        desc: "Extensiones de polygel ligeras y sin olor, esculpidas para un largo cómodo.",
        detail:
          "El polygel se esculpe sobre molde dual: te da la resistencia del acrílico con el peso del gel. El resultado se siente ligero en la mano y conserva un ápice definido.",
        includes: [
          "Preparación completa de la uña",
          "Extensión esculpida en molde dual",
          "Largo y forma personalizados",
          "Acabado a tu elección",
        ],
      },
      {
        title: "Extensiones de acrílico",
        price: "Desde $700 MXN",
        badge: "Presencia",
        desc: "Extensiones de acrílico con carácter, esculpidas a mano y con estructura impecable.",
        detail:
          "Para un largo que dura. Acrílico esculpido a mano con un ápice preciso y un borde libre delgado: la opción más resistente para formas largas o dramáticas.",
        includes: [
          "Preparación completa de la uña",
          "Acrílico esculpido a mano",
          "Ápice y estructura de precisión",
          "Color o arte a tu elección",
        ],
      },
      {
        title: "Arte y detalle en uñas",
        price: "Precio variable",
        badge: "Arte de autor",
        desc: "Diseños intrincados pintados a mano: florales, gemas y detalle fino de lujo.",
        detail:
          "Trabajo de pincel fino inspirado en la cultura asiática de uñas: florales pintados a mano, detalles encapsulados, colocación de gemas y degradados. El precio depende de la complejidad del diseño.",
        includes: [
          "Consulta de diseño",
          "Detalle pintado a mano",
          "Colocación de gemas y foil",
          "Top coat protector",
        ],
      },
    ],
    steps: [
      {
        title: "Consulta",
        text: "Definimos forma, largo y acabado, y revisamos la salud de tu uña natural.",
      },
      {
        title: "Preparación",
        text: "Cutícula, deshidratación y primer: la base que hace que un set dure.",
      },
      {
        title: "Aplicación",
        text: "Cobertura, escultura o extensión, construida con un ápice correcto y borde delgado.",
      },
      {
        title: "Acabado",
        text: "Color, arte y top coat, con indicaciones de cuidado para las semanas siguientes.",
      },
    ],
  },

  portfolio: {
    headerEyebrow: "El portafolio",
    headerTitle: "Trabajo reciente",
    headerAccent: "del estudio",
    headerSubtitle: "Selecciona cualquier set para verlo de cerca.",
    cta: "Reservar un set como estos",
    close: "Cerrar",
    tags: {
      builder: "Gel de constructor",
      handPainted: "Pintado a mano",
      fineLine: "Línea fina",
      acrylic: "Acrílico",
      polygel: "Polygel",
      crystal: "Detalle de cristal",
      french: "French tip",
    },
  },

  booking: {
    headerEyebrow: "Con cita previa",
    headerTitle: "Reserva tu",
    headerAccent: "experiencia de uñas",
    headerSubtitle:
      "Completa tus datos y tu solicitud llega directo a Ximena por WhatsApp: sin cuentas, sin esperas.",
    name: "Nombre completo",
    namePlaceholder: "Sofía Rodríguez",
    phone: "Número de teléfono",
    phonePlaceholder: "+52 664 000 0000",
    date: "Fecha preferida",
    time: "Hora preferida",
    service: "Servicio",
    servicePlaceholder: "Selecciona un servicio",
    notes: "Notas e inspiración",
    notesPlaceholder: "Forma, largo, colores o fotos de referencia…",
    send: "Enviar por WhatsApp",
    sendNote:
      "Línea directa con Ximena. Tu mensaje se abre ya escrito: revísalo y envíalo.",
    hoursTitle: "Horario del estudio",
    required: "obligatorio",
    message: {
      intro: "Hola Ximena, me gustaría reservar una cita en X.Nailsm.",
      name: "Nombre",
      phone: "Teléfono",
      date: "Fecha preferida",
      time: "Hora preferida",
      service: "Servicio",
      notes: "Notas",
      flexible: "flexible",
      none: "ninguna",
      thanks: "¡Gracias!",
    },
  },

  contact: {
    headerEyebrow: "Contacto",
    headerTitle: "Hablemos",
    headerAccent: "de tu próximo set",
    headerSubtitle:
      "¿Dudas sobre un diseño, precios o disponibilidad? Escríbenos por cualquier canal.",
    channels: {
      whatsappSub: "Respuesta más rápida · Lun–Sáb",
      whatsappCta: "Escribir por WhatsApp",
      instagramSub: "Mensajes directos abiertos",
      instagramCta: "Escribir por Instagram",
      phoneSub: "Para consultas directas",
      phoneCta: "Llamar al estudio",
    },
    hoursEyebrow: "Horario del estudio",
    hoursTitle: "Cuándo estamos",
    hoursAccent: "abiertas",
    followEyebrow: "Síguenos",
    followTitle: "Inspiración diaria",
    followAccent: "desde el estudio",
    followSubtitle: "Novedades, sets terminados y detalle detrás de cámaras.",
  },

  footer: {
    explore: "Explorar",
    studio: "Estudio",
    about:
      "El estudio de uñas de Ximena Moreno — extensiones estructuradas y detalle pintado a mano, con cita previa.",
    rights: "Todos los derechos reservados.",
    motto: "Donde cada uña cuenta una historia.",
  },

  notFound: {
    eyebrow: "Página no encontrada",
    text: "La página que buscas no forma parte del estudio X.Nailsm. Te llevamos de vuelta.",
    cta: "Volver al inicio",
  },

  stats: [
    { value: "9+", label: "Años de oficio" },
    { value: "500+", label: "Clientas felices" },
    { value: "4", label: "Técnicas de autor" },
  ],

  testimonials: [
    {
      name: "Sofía R.",
      role: "Clienta frecuente",
      text: "Ximena es una artista absoluta. Cada vez que salgo, siento que llevo una pequeña obra de arte en las manos. El detalle pintado a mano no tiene comparación.",
    },
    {
      name: "Valentina M.",
      role: "Clienta nueva",
      text: "Estaba nerviosa por mis primeras extensiones, pero toda la experiencia fue relajante y realmente lujosa. El set de polygel se ve completamente natural.",
    },
    {
      name: "Daniela L.",
      role: "Clienta fiel",
      text: "Los casi nueve años de experiencia se notan: la estructura, el trabajo de preparación y la visión creativa están en otro nivel.",
    },
  ],
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "X.Nailsm",
    description:
      "X.Nailsm — the nail studio of Ximena Moreno. Builder gel, polygel and acrylic extensions with hand-painted art, booked directly by WhatsApp.",
    langName: "English",
  },

  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    booking: "Booking",
    bookNow: "Book now",
    bookAppointment: "Book an appointment",
    studioLine: "Nail studio",
    menu: "Menu",
  },

  common: {
    tagline: "Creación · Arte · Poder",
    artist: "Ximena Moreno",
    viewPortfolio: "View the portfolio",
    allServices: "All services & pricing",
    fullGallery: "See the full gallery",
    moreAboutHer: "More about Ximena",
    bookThisService: "Book this service",
    bookSession: "Book a session",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    phone: "Phone",
    hours: {
      weekdays: "Monday — Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      byAppointment: "By appointment",
    },
  },

  home: {
    heroTitle: "Where nails",
    heroAccent: "become art",
    heroText:
      "Personalised nail services crafted with precision and quiet luxury — structured extensions, refined finishes and hand-painted detail by",
    introEyebrow: "The studio",
    introTitle: "Passion crafted",
    introAccent: "into every detail",
    introP1:
      "X.Nailsm is a private studio built around one idea: a manicure should feel like a considered ritual, not an errand. Every set begins with careful preparation and ends with a finish that holds.",
    introP2:
      "From sculpted builder gel to fine hand-painted detail, Ximena Moreno combines technical precision with a restrained, classic sense of style.",
    badgeName: "Ximena Moreno",
    badgeSub: "Nearly nine years of professional craft",
    servicesEyebrow: "What we offer",
    servicesTitle: "Signature",
    servicesAccent: "services",
    servicesSubtitle:
      "Four techniques, each tailored to the shape of your hands and the way you live.",
    portfolioEyebrow: "Recent work",
    portfolioTitle: "The portfolio",
    portfolioSubtitle: "A selection of recent sets from the studio.",
    testimonialsEyebrow: "Client words",
    testimonialsTitle: "What they say",
    ctaEyebrow: "By appointment",
    ctaTitle: "Reserve your",
    ctaAccent: "nail experience",
    ctaSubtitle:
      "Send your preferred date and service through WhatsApp — Ximena replies personally.",
  },

  about: {
    headerEyebrow: "About the artist",
    headerTitle: "Ximena Moreno",
    headerAccent: "nail artist & founder",
    headerSubtitle:
      "Nearly nine years spent turning nail care into a considered, personal ritual.",
    storyEyebrow: "The story",
    storyTitle: "A studio built on",
    storyAccent: "craft and care",
    storyP1a: "With nearly",
    storyP1Strong: "nine years of professional mastery",
    storyP1b:
      ", Ximena Moreno has transformed nail care into a personalised ritual where clients leave feeling composed and confident.",
    storyP2:
      "Staying at the forefront of global nail aesthetics — from sculpted builder gels to detailed hand-painted art — she combines technical precision with a restrained creative eye.",
    storyP3:
      "Your session is more than an appointment: it is a calm, private studio experience centred on your comfort and your own sense of style.",
    valuesEyebrow: "How we work",
    valuesTitle: "Three quiet",
    valuesAccent: "principles",
    valuesSubtitle: "The habits behind every set that leaves the studio.",
    values: [
      {
        title: "Preparation first",
        text: "Every set begins with meticulous cuticle work and a properly prepared nail plate. It is the reason the work lasts.",
      },
      {
        title: "Structure over speed",
        text: "A correct apex and a thin free edge make a set strong and comfortable. Nothing is rushed to save a few minutes.",
      },
      {
        title: "Quiet luxury",
        text: "Premium products, a calm studio and a design language that stays elegant long after the appointment ends.",
      },
    ],
    studioEyebrow: "The experience",
    studioTitle: "Inside the",
    studioAccent: "studio",
    studioPoints: [
      "Private one-to-one appointments, never overlapping.",
      "Sterilised tooling and single-use files for every client.",
      "Design consultation before the first brush stroke.",
      "Aftercare guidance so your set lasts its full life.",
    ],
  },

  services: {
    headerEyebrow: "Services & pricing",
    headerTitle: "Signature",
    headerAccent: "services",
    headerSubtitle:
      "Tailored nail experiences using premium products and refined technique. Pricing starts from the figures below and varies with length and design.",
    includesLabel: "Includes",
    processEyebrow: "The appointment",
    processTitle: "How a session",
    processAccent: "unfolds",
    processSubtitle: "Around two hours, start to finish, depending on the design.",
    reserveCta: "Reserve your appointment",
    items: [
      {
        title: "Builder gel",
        price: "From $600 MXN",
        badge: "Most requested",
        desc: "Durable, natural-looking gel overlays for strong, flexible nails with a mirror-clear finish.",
        detail:
          "A structured overlay applied on the natural nail to reinforce it while keeping the shape light and believable. Ideal if you are growing your own length or want a polished everyday set.",
        includes: [
          "Cuticle work & nail prep",
          "Structured gel overlay",
          "Shape & buff",
          "Gloss or matte top coat",
        ],
      },
      {
        title: "Polygel extensions",
        price: "From $700 MXN",
        badge: "Feather light",
        desc: "Lightweight, odour-free polygel extensions sculpted for comfortable added length.",
        detail:
          "Polygel is sculpted on a dual form, giving you the strength of acrylic with the weight of gel. The result feels light on the hand and holds a crisp apex.",
        includes: [
          "Full nail prep",
          "Sculpted dual-form extension",
          "Custom length & shape",
          "Finish of your choice",
        ],
      },
      {
        title: "Acrylic extensions",
        price: "From $700 MXN",
        badge: "Statement",
        desc: "Statement-making acrylic extensions with custom sculpting and a flawless structure.",
        detail:
          "For length that lasts. Hand-sculpted acrylic with a precise apex and thin free edge — the most resilient option for long or dramatic shapes.",
        includes: [
          "Full nail prep",
          "Hand-sculpted acrylic",
          "Precision apex & structure",
          "Colour or art of your choice",
        ],
      },
      {
        title: "Nail art & detailing",
        price: "Variable pricing",
        badge: "Signature art",
        desc: "Intricate hand-painted designs — florals, gems and fine-line luxury detailing.",
        detail:
          "Fine-brush work inspired by Asian nail culture: hand-painted florals, encapsulated details, gem placement and gradients, priced by the complexity of the design.",
        includes: [
          "Design consultation",
          "Hand-painted detailing",
          "Gem & foil placement",
          "Protective top coat",
        ],
      },
    ],
    steps: [
      {
        title: "Consultation",
        text: "We agree on shape, length and finish, and check the health of your natural nail.",
      },
      {
        title: "Preparation",
        text: "Cuticle work, dehydration and priming — the groundwork that makes a set last.",
      },
      {
        title: "Application",
        text: "Overlay, sculpting or extension, built with a correct apex and a thin edge.",
      },
      {
        title: "Finish",
        text: "Colour, art and top coat, followed by aftercare guidance for the weeks ahead.",
      },
    ],
  },

  portfolio: {
    headerEyebrow: "The portfolio",
    headerTitle: "Recent work",
    headerAccent: "from the studio",
    headerSubtitle: "Select any set to view it up close.",
    cta: "Book a set like these",
    close: "Close",
    tags: {
      builder: "Builder gel",
      handPainted: "Hand-painted",
      fineLine: "Fine line",
      acrylic: "Acrylic",
      polygel: "Polygel",
      crystal: "Crystal detail",
      french: "French tip",
    },
  },

  booking: {
    headerEyebrow: "By appointment",
    headerTitle: "Reserve your",
    headerAccent: "nail experience",
    headerSubtitle:
      "Fill in your details and your request is sent straight to Ximena on WhatsApp — no account, no waiting.",
    name: "Full name",
    namePlaceholder: "Sofía Rodríguez",
    phone: "Phone number",
    phonePlaceholder: "+52 664 000 0000",
    date: "Preferred date",
    time: "Preferred time",
    service: "Service",
    servicePlaceholder: "Select a service",
    notes: "Notes & inspiration",
    notesPlaceholder: "Preferred shape, length, colours or reference photos…",
    send: "Send via WhatsApp",
    sendNote:
      "A direct line to Ximena. Your message opens pre-filled — review it, then send.",
    hoursTitle: "Studio hours",
    required: "required",
    message: {
      intro: "Hello Ximena, I would like to book an appointment at X.Nailsm.",
      name: "Name",
      phone: "Phone",
      date: "Preferred date",
      time: "Preferred time",
      service: "Service",
      notes: "Notes",
      flexible: "flexible",
      none: "none",
      thanks: "Thank you!",
    },
  },

  contact: {
    headerEyebrow: "Get in touch",
    headerTitle: "Let us talk",
    headerAccent: "about your next set",
    headerSubtitle:
      "Questions about a design, pricing or availability? Reach out through any channel below.",
    channels: {
      whatsappSub: "Fastest response · Mon–Sat",
      whatsappCta: "Chat on WhatsApp",
      instagramSub: "Direct messages open",
      instagramCta: "Message on Instagram",
      phoneSub: "For direct enquiries",
      phoneCta: "Call the studio",
    },
    hoursEyebrow: "Studio hours",
    hoursTitle: "When we are",
    hoursAccent: "open",
    followEyebrow: "Follow along",
    followTitle: "Daily inspiration",
    followAccent: "from the studio",
    followSubtitle: "Studio updates, finished sets and behind-the-scenes detail.",
  },

  footer: {
    explore: "Explore",
    studio: "Studio",
    about:
      "The nail studio of Ximena Moreno — structured extensions and hand-painted detail, by appointment.",
    rights: "All rights reserved.",
    motto: "Where every nail tells a story.",
  },

  notFound: {
    eyebrow: "Page not found",
    text: "The page you were looking for is not part of the X.Nailsm studio. Let us take you back.",
    cta: "Return home",
  },

  stats: [
    { value: "9+", label: "Years of craft" },
    { value: "500+", label: "Happy clients" },
    { value: "4", label: "Signature techniques" },
  ],

  testimonials: [
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
  ],
};

export const translations: Record<Lang, Dict> = { es, en };

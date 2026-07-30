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
      "Estudio de uñas de Ximena Moreno. Nivelación de builder, extensiones de polygel y acrílico, y diseños pintados a mano. Reserva directa por WhatsApp.",
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
    previous: "Anterior",
    next: "Siguiente",
    hours: {
      weekdays: "Lunes a viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      byAppointment: "Con cita previa",
      to: "a",
    },
  },

  home: {
    heroEyebrow: "Estudio privado · Con cita previa",
    heroTitle: "Donde las uñas",
    heroAccent: "se vuelven arte",
    heroText:
      "Extensiones estructuradas, acabados refinados y arte pintado a mano por",
    introEyebrow: "El estudio",
    introTitle: "Pasión trabajada",
    introAccent: "en cada detalle",
    introP1:
      "Un estudio privado con una idea: el manicure es un ritual, no un trámite. Cada set empieza con preparación cuidadosa y termina con un acabado que dura.",
    introP2:
      "Del builder esculpido al detalle fino pintado a mano, con un estilo sobrio y clásico.",
    badgeName: "Ximena Moreno",
    badgeSub: "Casi nueve años de oficio",
    servicesEyebrow: "Lo que ofrecemos",
    servicesTitle: "Servicios",
    servicesAccent: "de autor",
    servicesSubtitle:
      "Cuatro técnicas, adaptadas a tus manos y a tu día a día.",
    portfolioEyebrow: "Trabajo reciente",
    portfolioTitle: "El portafolio",
    portfolioSubtitle: "Sets recientes del estudio.",
    testimonialsEyebrow: "Palabras de clientas",
    testimonialsTitle: "Lo que dicen",
    ctaEyebrow: "Con cita previa",
    ctaTitle: "Reserva tu",
    ctaAccent: "experiencia de uñas",
    ctaSubtitle:
      "Envía tu fecha y servicio por WhatsApp. Ximena responde personalmente.",
  },

  about: {
    headerEyebrow: "Sobre la artista",
    headerTitle: "Ximena Moreno",
    headerAccent: "artista de uñas y fundadora",
    headerSubtitle:
      "Casi nueve años convirtiendo el cuidado de las uñas en un ritual personal.",
    storyEyebrow: "La historia",
    storyTitle: "Un estudio construido",
    storyAccent: "sobre oficio y cuidado",
    storyP1a: "Con casi",
    storyP1Strong: "nueve años de dominio profesional",
    storyP1b:
      ", Ximena Moreno convierte cada cita en un ritual del que sus clientas salen serenas y seguras.",
    storyP2:
      "Domina desde el builder esculpido hasta el arte pintado a mano, y une precisión técnica con una mirada creativa contenida.",
    storyP3:
      "Tu sesión es privada y tranquila, centrada en tu comodidad y en tu estilo.",
    valuesEyebrow: "Cómo trabajamos",
    valuesTitle: "Tres principios",
    valuesAccent: "silenciosos",
    valuesSubtitle: "Los hábitos detrás de cada set que sale del estudio.",
    values: [
      {
        title: "La preparación primero",
        text: "Cada set empieza con trabajo meticuloso de cutícula y una lámina bien preparada. Por eso dura.",
      },
      {
        title: "Estructura antes que prisa",
        text: "Un ápice correcto y un borde delgado hacen un set fuerte y cómodo. Nada se apresura.",
      },
      {
        title: "Lujo discreto",
        text: "Productos premium, un estudio tranquilo y un diseño que sigue elegante semanas después.",
      },
    ],
    studioEyebrow: "La experiencia",
    studioTitle: "Dentro del",
    studioAccent: "estudio",
    studioPoints: [
      "Citas privadas, una a la vez.",
      "Herramienta esterilizada y limas nuevas para cada clienta.",
      "Consulta de diseño antes de la primera pincelada.",
      "Indicaciones de cuidado para que tu set dure.",
    ],
  },

  services: {
    headerEyebrow: "Servicios y precios",
    headerTitle: "Servicios",
    headerAccent: "de autor",
    headerSubtitle:
      "Uñas a la medida, con productos premium y técnica refinada.",
    priceNote:
      "Todos los precios son desde. El total varía según la complejidad, el largo y el diseño.",
    includesLabel: "Incluye",
    processEyebrow: "La cita",
    processTitle: "Cómo transcurre",
    processAccent: "una sesión",
    processSubtitle: "Cerca de dos horas, según el diseño.",
    reserveCta: "Reserva tu cita",
    items: [
      {
        title: "Nivelación de Builder",
        price: "Desde 600 pesos",
        badge: "El más pedido",
        desc: "Builder sobre la uña natural: estructura firme, forma ligera y acabado impecable.",
        detail:
          "Se nivela la uña natural con builder para reforzarla y corregir la curva, con una forma ligera y creíble. Ideal si dejas crecer tu largo o quieres un set pulido para el diario.",
        includes: [
          "Trabajo de cutícula y preparación",
          "Nivelación con gel builder",
          "Forma y pulido",
          "Top coat brillante o mate",
        ],
      },
      {
        title: "Extensión de Polygel",
        price: "Desde 700 pesos",
        badge: "Ultra ligeras",
        desc: "Polygel ligero y sin olor, esculpido para un largo cómodo.",
        detail:
          "Se esculpe sobre molde dual: la resistencia del acrílico con el peso del gel. Ligero en la mano y con un ápice definido.",
        includes: [
          "Preparación completa de la uña",
          "Extensión esculpida en molde dual",
          "Largo y forma personalizados",
          "Acabado a tu elección",
        ],
      },
      {
        title: "Extensión de Acrílico",
        price: "Desde 700 pesos",
        badge: "Máxima resistencia",
        desc: "Acrílico esculpido a mano, con estructura impecable y largo que aguanta.",
        detail:
          "Acrílico esculpido a mano, con ápice preciso y borde delgado. La opción más resistente para formas largas o marcadas.",
        includes: [
          "Preparación completa de la uña",
          "Acrílico esculpido a mano",
          "Ápice y estructura de precisión",
          "Color o arte a tu elección",
        ],
      },
      {
        title: "Diseños Asiáticos",
        price: "Precios variables",
        badge: "Arte de autor",
        desc: "Pintado a mano al estilo asiático: florales, gemas y detalle fino.",
        detail:
          "Pincel fino inspirado en la cultura asiática de uñas: florales, detalles encapsulados, gemas y degradados. El precio se define según la complejidad.",
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
        text: "Definimos forma, largo y acabado, y revisamos tu uña natural.",
      },
      {
        title: "Preparación",
        text: "Cutícula, deshidratación y primer. La base de un set que dura.",
      },
      {
        title: "Aplicación",
        text: "Cobertura, escultura o extensión, con ápice correcto y borde delgado.",
      },
      {
        title: "Acabado",
        text: "Color, arte y top coat, más indicaciones de cuidado.",
      },
    ],
  },

  portfolio: {
    headerEyebrow: "El portafolio",
    headerTitle: "Trabajo reciente",
    headerAccent: "del estudio",
    headerSubtitle: "Selecciona un set para verlo de cerca.",
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
      "Completa tus datos y tu solicitud llega directo a Ximena por WhatsApp. Sin cuentas, sin esperas.",
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
      "Línea directa con Ximena. El mensaje se abre ya escrito: revísalo y envíalo.",
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
      "¿Dudas sobre un diseño, precio o disponibilidad? Escríbenos por cualquier canal.",
    channels: {
      whatsappSub: "Respuesta más rápida. Lunes a sábado",
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
    followSubtitle: "Novedades, sets terminados y trabajo en proceso.",
  },

  footer: {
    explore: "Explorar",
    studio: "Estudio",
    about:
      "Estudio de uñas de Ximena Moreno. Extensiones estructuradas y detalle pintado a mano, con cita previa.",
    rights: "Todos los derechos reservados.",
    credit: "Diseñado y desarrollado por",
    motto: "Donde cada uña cuenta una historia.",
  },

  notFound: {
    eyebrow: "Página no encontrada",
    text: "Esta página no existe en X.Nailsm. Te llevamos de vuelta.",
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
      text: "Ximena es una artista. Cada vez que salgo siento que llevo una obra de arte en las manos. El detalle pintado a mano no tiene comparación.",
    },
    {
      name: "Valentina M.",
      role: "Clienta nueva",
      text: "Llegué nerviosa a mis primeras extensiones y la experiencia fue relajante y lujosa. El polygel se ve natural.",
    },
    {
      name: "Daniela L.",
      role: "Clienta fiel",
      text: "Los casi nueve años se notan: estructura, preparación y visión creativa en otro nivel.",
    },
  ],
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "X.Nailsm",
    description:
      "The nail studio of Ximena Moreno. Builder levelling, polygel and acrylic extensions, and designs painted by hand. Book directly on WhatsApp.",
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
    previous: "Previous",
    next: "Next",
    hours: {
      weekdays: "Monday to Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      byAppointment: "By appointment",
      to: "to",
    },
  },

  home: {
    heroEyebrow: "Private studio · By appointment",
    heroTitle: "Where nails",
    heroAccent: "become art",
    heroText:
      "Structured extensions, refined finishes and detail painted by hand, by",
    introEyebrow: "The studio",
    introTitle: "Passion crafted",
    introAccent: "into every detail",
    introP1:
      "A private studio with one idea: a manicure is a ritual, not an errand. Every set begins with careful preparation and ends with a finish that holds.",
    introP2:
      "From sculpted builder to fine detail painted by hand, with a restrained, classic sense of style.",
    badgeName: "Ximena Moreno",
    badgeSub: "Nearly nine years of craft",
    servicesEyebrow: "What we offer",
    servicesTitle: "Signature",
    servicesAccent: "services",
    servicesSubtitle:
      "Four techniques, tailored to your hands and your routine.",
    portfolioEyebrow: "Recent work",
    portfolioTitle: "The portfolio",
    portfolioSubtitle: "Recent sets from the studio.",
    testimonialsEyebrow: "Client words",
    testimonialsTitle: "What they say",
    ctaEyebrow: "By appointment",
    ctaTitle: "Reserve your",
    ctaAccent: "nail experience",
    ctaSubtitle:
      "Send your date and service on WhatsApp. Ximena replies personally.",
  },

  about: {
    headerEyebrow: "About the artist",
    headerTitle: "Ximena Moreno",
    headerAccent: "nail artist & founder",
    headerSubtitle:
      "Nearly nine years turning nail care into a personal ritual.",
    storyEyebrow: "The story",
    storyTitle: "A studio built on",
    storyAccent: "craft and care",
    storyP1a: "With nearly",
    storyP1Strong: "nine years of professional mastery",
    storyP1b:
      ", Ximena Moreno turns every appointment into a ritual clients leave feeling composed and confident.",
    storyP2:
      "She works across the range, from sculpted builder to detailed art painted by hand, with technical precision and a restrained creative eye.",
    storyP3:
      "Your session is calm and private, centred on your comfort and your own style.",
    valuesEyebrow: "How we work",
    valuesTitle: "Three quiet",
    valuesAccent: "principles",
    valuesSubtitle: "The habits behind every set that leaves the studio.",
    values: [
      {
        title: "Preparation first",
        text: "Every set begins with meticulous cuticle work and a properly prepared plate. That is why it lasts.",
      },
      {
        title: "Structure over speed",
        text: "A correct apex and a thin edge make a set strong and comfortable. Nothing is rushed.",
      },
      {
        title: "Quiet luxury",
        text: "Premium products, a calm studio and a design that stays elegant weeks later.",
      },
    ],
    studioEyebrow: "The experience",
    studioTitle: "Inside the",
    studioAccent: "studio",
    studioPoints: [
      "Private appointments, one client at a time.",
      "Sterilised tooling and new files for every client.",
      "Design consultation before the first brush stroke.",
      "Aftercare guidance so your set lasts.",
    ],
  },

  services: {
    headerEyebrow: "Services & pricing",
    headerTitle: "Signature",
    headerAccent: "services",
    headerSubtitle:
      "Nails made to measure, with premium products and refined technique.",
    priceNote:
      "Every price is a starting price. The total varies with complexity, length and design.",
    includesLabel: "Includes",
    processEyebrow: "The appointment",
    processTitle: "How a session",
    processAccent: "unfolds",
    processSubtitle: "About two hours, depending on the design.",
    reserveCta: "Reserve your appointment",
    items: [
      {
        title: "Builder levelling",
        price: "From 600 pesos",
        badge: "Most requested",
        desc: "Builder over the natural nail: firm structure, light shape, flawless finish.",
        detail:
          "The natural nail is levelled with builder to reinforce it and correct the curve, keeping the shape light and believable. Ideal if you are growing your length or want a polished everyday set.",
        includes: [
          "Cuticle work & nail prep",
          "Builder gel levelling",
          "Shape & buff",
          "Gloss or matte top coat",
        ],
      },
      {
        title: "Polygel extension",
        price: "From 700 pesos",
        badge: "Feather light",
        desc: "Light polygel with no odour, sculpted for comfortable added length.",
        detail:
          "Sculpted on a dual form: the strength of acrylic with the weight of gel. Light on the hand, with a crisp apex.",
        includes: [
          "Full nail prep",
          "Extension sculpted on a dual form",
          "Custom length & shape",
          "Finish of your choice",
        ],
      },
      {
        title: "Acrylic extension",
        price: "From 700 pesos",
        badge: "Most resilient",
        desc: "Acrylic sculpted by hand, with a flawless structure and length that holds.",
        detail:
          "Acrylic sculpted by hand, with a precise apex and thin edge. The most resilient option for long or bold shapes.",
        includes: [
          "Full nail prep",
          "Acrylic sculpted by hand",
          "Precision apex & structure",
          "Colour or art of your choice",
        ],
      },
      {
        title: "Asian designs",
        price: "Variable prices",
        badge: "Signature art",
        desc: "Painted by hand in the Asian style: florals, gems and fine detail.",
        detail:
          "Fine brush work inspired by Asian nail culture: florals, encapsulated details, gems and gradients. The price is set by the complexity.",
        includes: [
          "Design consultation",
          "Detail painted by hand",
          "Gem & foil placement",
          "Protective top coat",
        ],
      },
    ],
    steps: [
      {
        title: "Consultation",
        text: "We agree on shape, length and finish, and check your natural nail.",
      },
      {
        title: "Preparation",
        text: "Cuticle work, dehydration and priming. The groundwork of a set that lasts.",
      },
      {
        title: "Application",
        text: "Overlay, sculpting or extension, with a correct apex and a thin edge.",
      },
      {
        title: "Finish",
        text: "Colour, art and top coat, plus aftercare guidance.",
      },
    ],
  },

  portfolio: {
    headerEyebrow: "The portfolio",
    headerTitle: "Recent work",
    headerAccent: "from the studio",
    headerSubtitle: "Select a set to view it up close.",
    cta: "Book a set like these",
    close: "Close",
    tags: {
      builder: "Builder gel",
      handPainted: "Painted by hand",
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
      "Fill in your details and your request goes straight to Ximena on WhatsApp. No account, no waiting.",
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
      "A direct line to Ximena. The message opens ready written: review it, then send.",
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
      "Questions about a design, price or availability? Reach out on any channel.",
    channels: {
      whatsappSub: "Fastest response. Monday to Saturday",
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
    followSubtitle: "Studio updates, finished sets and work in progress.",
  },

  footer: {
    explore: "Explore",
    studio: "Studio",
    about:
      "The nail studio of Ximena Moreno. Structured extensions and detail painted by hand, by appointment.",
    rights: "All rights reserved.",
    credit: "Designed and developed by",
    motto: "Where every nail tells a story.",
  },

  notFound: {
    eyebrow: "Page not found",
    text: "This page does not exist at X.Nailsm. Let us take you back.",
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
      text: "Ximena is an artist. Every time I leave I feel like I have a work of art on my hands. The detail painted by hand is unmatched.",
    },
    {
      name: "Valentina M.",
      role: "New client",
      text: "I came in nervous about my first extensions and the whole experience was relaxing and luxurious. The polygel looks natural.",
    },
    {
      name: "Daniela L.",
      role: "Loyal client",
      text: "The nine years show: structure, prep work and creative vision on another level.",
    },
  ],
};

export const translations: Record<Lang, Dict> = { es, en };

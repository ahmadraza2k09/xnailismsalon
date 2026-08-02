/*
  Site copy in both languages. Spanish is the site's main language; English is
  the translation. Both trees must keep exactly the same shape — `Dict` is
  derived from the Spanish tree, so TypeScript flags anything missing in `en`.
*/

export type Lang = "es" | "en";

const es = {
  meta: {
    title: "X.Nailsm · Estudio de Uñas & Pedicura",
    description:
      "Estudio de uñas de Ximena Moreno y Karelli Sandoval. Nivelación de builder, polygel, acrílico, arte pintado a mano y pedicura en seco. Reserva por WhatsApp.",
    langName: "Español",
  },

  nav: {
    home: "Inicio",
    about: "Sobre nosotras",
    services: "Servicios",
    portfolio: "Portafolio",
    contact: "Contacto",
    booking: "Reservar",
    bookNow: "Reservar cita",
    bookAppointment: "Reservar una cita",
    studioLine: "Estudio de uñas & pedicura",
    menu: "Menú",
  },

  common: {
    artist: "Ximena Moreno y Karelli Sandoval",
    viewPortfolio: "Ver el portafolio",
    allServices: "Todos los servicios y precios",
    fullGallery: "Ver la galería completa",
    moreAboutHer: "Conoce a nuestro equipo",
    bookThisService: "Reservar este servicio",
    bookSession: "Reservar una sesión",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    phone: "Teléfono",
    hours: {
      tueThuSatSun: "Martes, Jueves, Sábado y Domingo",
      monWedFri: "Lunes, Miércoles y Viernes",
      ximenaHours1: "7:00 am a 9:00 pm",
      ximenaHours2: "7:00 am a 3:00 pm",
      weekdays: "Lunes a viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      byAppointment: "Con cita previa",
      to: "a",
    },
    team: {
      ximena: {
        name: "Ximena Moreno",
        role: "Fundadora & Artista de Uñas",
        bio: "Especialista en nivelación de builder, extensiones de polygel y acrílico, y arte pintado a mano. Casi 9 años de trayectoria.",
      },
      karelli: {
        name: "Karelli Sandoval",
        role: "Socia, Manicurista & Pedicurista",
        badge: "Bilingüe (Inglés / Español)",
        bio: "Especialista en pedicura en seco, tratamiento completo spa para pies y diseños variados. Atención bilingüe personalizada.",
      },
    },
  },

  home: {
    heroEyebrow: "Estudio privado · Con cita previa",
    heroTitle: "Donde tus uñas y pies",
    heroAccent: "se vuelven arte",
    heroText:
      "Extensiones estructuradas, pedicura en seco y arte personalizado por",
    introEyebrow: "El estudio",
    introTitle: "Pasión trabajada",
    introAccent: "en cada detalle",
    introP1:
      "Un estudio privado con una idea: la estética de manos y pies es un ritual, no un trámite. Cada servicio empieza con preparación cuidadosa y termina con un acabado impecable que dura.",
    introP2:
      "Del builder esculpido al arte asiático y la pedicura en seco especializada con ritual spa.",
    badgeName: "Ximena & Karelli",
    badgeSub: "Manicura y Pedicura Profesional",
    servicesEyebrow: "Lo que ofrecemos",
    servicesTitle: "Servicios",
    servicesAccent: "especializados",
    servicesSubtitle:
      "Uñas esculpidas y pedicura en seco con opciones de gel, acripié y tratamiento spa.",
    portfolioEyebrow: "Trabajo reciente",
    portfolioTitle: "El portafolio",
    portfolioSubtitle: "Sets y pedicuras recientes del estudio.",
    instagramEyebrow: "Pantalla en Vivo · Instagram",
    instagramTitle: "Síguenos en vivo",
    instagramAccent: "@x.nailsm",
    instagramSubtitle:
      "Explora el perfil oficial de Instagram en vivo. Mira nuestros últimos diseños de uñas, pedicuras, reels de proceso y actualizaciones del estudio.",
    instagramFollow: "Seguir",
    instagramFollowing: "Siguiendo",
    instagramMessage: "Mensaje",
    instagramOpenProfile: "Abrir en Instagram",
    instagramPosts: "Publicaciones",
    instagramFollowers: "Seguidores",
    instagramFollowingCount: "Seguidos",
    instagramBioName: "Ximena Moreno & Karelli Sandoval | Nails & Pedicure 💅",
    instagramBioLine1: "💅 Artistas de Uñas & Pedicura en Seco",
    instagramBioLine2: "✨ Builder Gel · Polygel · Acrílico · Acripié · Spa Feet",
    instagramBioLine3: "📍 Tijuana, B.C. · Studio Privado con Cita",
    instagramTabPosts: "Publicaciones",
    instagramTabReels: "Reels",
    instagramTabTagged: "Etiquetadas",
    instagramViewOnIg: "Ver en Instagram",
    instagramCopied: "¡Enlace copiado!",
    testimonialsEyebrow: "Palabras de clientas",
    testimonialsTitle: "Lo que dicen",
    ctaEyebrow: "Con cita previa",
    ctaTitle: "Reserva tu",
    ctaAccent: "experiencia de belleza",
    ctaSubtitle:
      "Envía tu fecha, especialista y servicio por WhatsApp. Respondemos de inmediato.",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Antes de tu cita",
    faq: [
      {
        q: "¿Necesito cita previa?",
        a: "Sí. Todas las sesiones son con cita previa. Escríbenos por WhatsApp y confirmamos fecha y horario disponible.",
      },
      {
        q: "¿En qué consiste la pedicura en seco?",
        a: "Es una técnica limpia y precisa de manicura/pedicura rusa que remueve cutícula y prepara la lámina sin remojo en agua, asegurando mayor durabilidad del gel y salud en las uñas.",
      },
      {
        q: "¿Qué incluye la pedicura completa spa?",
        a: "Incluye pedicura en seco, kit de tina spa para pies (sales epsom aromáticas, gel removedor de piel muerta/callos, exfoliación, mascarilla hidratante y crema) más gel o Acripié.",
      },
      {
        q: "¿Ofrecen atención bilingüe?",
        a: "¡Sí! Karelli Sandoval es completamente bilingüe (inglés y español) para atenderte en el idioma que prefieras.",
      },
      {
        q: "¿Cómo reservo mi cita?",
        a: "Elige tu servicio y horario en el formulario de reserva y la solicitud se envía directo a WhatsApp.",
      },
    ],
  },

  about: {
    headerEyebrow: "Sobre el equipo",
    headerTitle: "Ximena Moreno & Karelli Sandoval",
    headerAccent: "artistas y socias",
    headerSubtitle:
      "Unión de talento, técnica impecable y atención bilingüe para el cuidado de tus manos y pies.",
    storyEyebrow: "La historia",
    storyTitle: "Un estudio construido",
    storyAccent: "sobre oficio y cuidado",
    storyP1a: "Con casi",
    storyP1Strong: "nueve años de dominio profesional",
    storyP1b:
      ", Ximena Moreno y su socia Karelli Sandoval convierten cada cita en un ritual del que saldrás serena y renovada.",
    storyP2:
      "Desde el builder gel esculpido y el arte pintado a mano hasta la pedicura en seco con spa hidratante y técnicas de Acripié.",
    storyP3:
      "Tu sesión es privada, relajante y personalizada según tus gustos y necesidades.",
    partnerEyebrow: "Nuestra socia",
    partnerTitle: "Conoce a",
    partnerAccent: "Karelli Sandoval",
    partnerRole: "Manicurista & Pedicurista · Bilingüe (Inglés / Español)",
    partnerSubtitle:
      "Especialista en pedicura en seco, tratamientospa completos para pies y diseños de uñas.",
    partnerBio:
      "Karelli aporta al estudio una amplia experiencia en pedicura en seco, limado especializado y tratamientos spa para pies. Su trato cálido, atención al detalle y capacidad bilingüe (inglés/español) garantizan una estancia placentera y profesional.",
    partnerSpecialtiesTitle: "Especialidades de Karelli",
    partnerSpecialties: [
      "Pedicura en seco (limpieza, cutícula y limado de precisión)",
      "Tratamientos Spa completos con sales epsom y mascarilla",
      "Aplicación de gel de un solo color y diseños variados en pies",
      "Técnica Acripié en uña individual o set completo",
      "Atención bilingüe fluida en Inglés y Español",
    ],
    valuesEyebrow: "Cómo trabajamos",
    valuesTitle: "Tres principios",
    valuesAccent: "silenciosos",
    valuesSubtitle: "Los hábitos detrás de cada servicio que sale del estudio.",
    values: [
      {
        title: "La preparación primero",
        text: "Cada set o pedicura empieza con trabajo meticuloso de cutícula y una preparación en seco impecable.",
      },
      {
        title: "Estructura e higiene",
        text: "Herramientas esterilizadas, kits de uso individual y productos de primera categoría para tu seguridad.",
      },
      {
        title: "Lujo discreto y relajación",
        text: "Un ambiente tranquilo con aromaterapia spa y acabados elegantes que lucen perfectos durante semanas.",
      },
    ],
    studioEyebrow: "La experiencia",
    studioTitle: "Dentro del",
    studioAccent: "estudio",
    studioPoints: [
      "Citas privadas y atención personalizada.",
      "Pedicura en seco y kit spa para pies con sales epsom aromáticas.",
      "Atención bilingüe (Español e Inglés).",
      "Variedad en acrílico, polygel, builder gel y Acripié.",
    ],
  },

  services: {
    headerEyebrow: "Servicios y precios",
    headerTitle: "Servicios",
    headerAccent: "de autor",
    headerSubtitle:
      "Manicura esculpida, arte asiático y pedicura en seco profesional con tratamiento spa.",
    priceNote:
      "Los precios están sujetos a variación en diseños y extensión de acrílicos/poligel.",
    includesLabel: "Incluye",
    processEyebrow: "La cita",
    processTitle: "Cómo transcurre",
    processAccent: "una sesión",
    processSubtitle: "Cerca de 1.5 a 2 horas, según el servicio y diseño.",
    reserveCta: "Reserva tu cita",
    items: [
      {
        title: "Nivelación de Builder",
        price: "Desde $600 pesos",
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
        price: "Desde $700 pesos",
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
        price: "Desde $700 pesos",
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
      {
        title: "Pedicura en Seco + Gel Un Solo Color",
        price: "$300 pesos",
        badge: "Pedicura en seco",
        desc: "Limpieza precisa en seco con remoción de cutícula, limado y aplicación de gel de un solo color.",
        detail:
          "Tratamiento especializado de pedicura en seco enfocado en una limpieza profunda sin inmersión en agua, remoción meticulosa de cutícula, limado de uñas y acabado impecable con gel de un solo color.",
        includes: [
          "Limpieza en seco",
          "Remoción de cutícula",
          "Limado de uñas",
          "Aplicación de gel de un solo color",
        ],
      },
      {
        title: "Pedicura en Seco + Gel con Diseño ó Acripié",
        price: "$400 pesos",
        badge: "Diseño o Acripié",
        desc: "Limpieza en seco, remoción de cutícula, limado de uñas y aplicación de gel con diseño o técnica Acripié.",
        detail:
          "Limpieza completa en seco y remoción de cutícula, complementada con aplicación de gel de alta calidad con diseños personalizados o técnica Acripié para perfeccionar la forma y estética de los pies.",
        includes: [
          "Limpieza en seco profesional",
          "Remoción de cutícula y limado",
          "Aplicación de gel con diseño ó Acripié",
          "Diseños variados en pies",
        ],
      },
      {
        title: "Pedicura Completa Spa + Gel Un Solo Color",
        price: "$650 pesos",
        badge: "Experiencia Spa",
        desc: "Pedicura en seco más kit tina spa para pies con sales epsom, exfoliación, mascarilla y crema.",
        detail:
          "El ritual completo para tus pies: incluye pedicura en seco (limpieza, cutícula y limado), gel con color uniforme y kit tina spa relajante con sales aromáticas epsom, limado con gel removedor de piel muerta y callo, exfoliación profunda, mascarilla hidratante y crema nutricia.",
        includes: [
          "Pedicura en seco (limpieza, cutícula, limado)",
          "Aplicación de gel de un solo color",
          "Kit tina spa (sales epsom aromáticas)",
          "Gel removedor de piel muerta y callo",
          "Exfoliación, mascarilla hidratante y crema",
        ],
      },
      {
        title: "Pedicura Completa Spa con Diseño ó Acripié",
        price: "$700 - $800 pesos",
        badge: "Spa Premium",
        desc: "Pedicura en seco completa + kit tina spa relajante + gel con diseño o Acripié (opciones de $700 a $800).",
        detail:
          "Servicio de lujo integral para pies. Incluye la pedicura en seco completa, kit tina spa relajante (sales epsom, remoción de callos, exfoliación, mascarilla y crema) y acabado con diseño o Acripié. Opciones: A) Acripié en una uña ($750), B) Acripié en todas las uñas ($800), C) Diseño en gel ($700).",
        includes: [
          "Pedicura en seco completa",
          "Kit tina spa de lujo completo",
          "Opción A: Acripié en 1 uña = $750",
          "Opción B: Acripié en todas las uñas = $800",
          "Opción C: Diseño en gel = $700",
        ],
      },
    ],
    steps: [
      {
        title: "Consulta & Elección",
        text: "Definimos técnica, diseño, tonos o tipo de pedicura/manicura.",
      },
      {
        title: "Preparación en Seco",
        text: "Cutícula, deshidratación y preparado de uña. La clave de la durabilidad.",
      },
      {
        title: "Aplicación / Ritual Spa",
        text: "Escultura, nivelación o kit spa de pies con sales aromáticas y mascarilla.",
      },
      {
        title: "Acabado Perfecto",
        text: "Gel, diseño pintado a mano, top coat y nutrición de hidratación.",
      },
    ],
  },

  portfolio: {
    headerEyebrow: "El portafolio",
    headerTitle: "Trabajo reciente",
    headerAccent: "del estudio",
    headerSubtitle: "Selecciona un set para verlo de cerca.",
    cta: "Reservar un servicio como este",
    close: "Cerrar",
    tags: {
      builder: "Gel de constructor",
      handPainted: "Pintado a mano",
      fineLine: "Línea fina",
      acrylic: "Acrílico",
      polygel: "Polygel",
      crystal: "Detalle de cristal",
      french: "French tip",
      pedicure: "Pedicura en seco & Spa",
    },
  },

  booking: {
    headerEyebrow: "Con cita previa",
    headerTitle: "Reserva tu",
    headerAccent: "cita en el estudio",
    headerSubtitle:
      "Completa tus datos y tu solicitud se enviará directo por WhatsApp. Sin cuentas, sin esperas.",
    name: "Nombre completo",
    namePlaceholder: "Sofía Rodríguez",
    phone: "Número de teléfono (WhatsApp)",
    phonePlaceholder: "+52 664 000 0000",
    date: "Fecha preferida",
    time: "Hora preferida",
    artist: "Especialista",
    artistPlaceholder: "Selecciona una profesional",
    artistAny: "Cualquiera disponible",
    artistXimena: "Ximena Moreno (Uñas & Arte)",
    artistKarelli: "Karelli Sandoval (Manicura & Pedicura Bilingüe)",
    service: "Servicio",
    servicePlaceholder: "Selecciona un servicio",
    notes: "Notas e inspiración",
    notesPlaceholder: "Forma, largo, opciones de Acripié (A/B/C) o fotos de referencia…",
    send: "Enviar por WhatsApp",
    sendNote:
      "El mensaje se abre listo en tu WhatsApp para enviarlo en un clic.",
    hoursTitle: "Horarios de atención",
    required: "obligatorio",
    system: "Sistema de reservas",
    stepOf: "Paso {n} de {total}",
    back: "Atrás",
    next: "Continuar",
    confirm: "Confirmar reserva",
    stepService: "Elige tu servicio y especialista",
    stepWhen: "Fecha y hora",
    stepWhenNote: "Horarios Ximena: Martes, Jueves, Sábado y Domingo de 7am a 9pm. Lunes, Miércoles y Viernes de 7am a 3pm.",
    stepYou: "Tus datos",
    stepConfirm: "Confirma tu cita",
    selectDate: "Selecciona una fecha",
    selectTime: "Selecciona una hora",
    pickDateFirst: "Elige primero una fecha.",
    noSlots: "Este día no tiene horarios disponibles. Escríbenos por WhatsApp para coordinar.",
    summaryArtist: "Especialista",
    summaryService: "Servicio",
    summaryDate: "Fecha",
    summaryTime: "Hora",
    summaryName: "Nombre",
    summaryPhone: "WhatsApp",
    summaryNotes: "Notas",
    message: {
      intro: "Hola, me gustaría reservar una cita en X.Nailsm.",
      artist: "Especialista",
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
    headerAccent: "de tu próxima cita",
    headerSubtitle:
      "¿Dudas sobre uñas, pedicuras, precios o disponibilidad? Escríbenos por WhatsApp o Instagram.",
    channels: {
      whatsappSub: "Respuesta más rápida. Atención personalizada",
      whatsappCta: "Escribir por WhatsApp",
      instagramSub: "Mensajes directos y portfolio en vivo",
      instagramCta: "Escribir por Instagram",
      phoneSub: "Para consultas directas al estudio",
      phoneCta: "Llamar al estudio",
    },
    hoursEyebrow: "Horarios de atención",
    hoursTitle: "Nuestros",
    hoursAccent: "horarios",
    followEyebrow: "Síguenos",
    followTitle: "Inspiración diaria",
    followAccent: "desde el estudio",
    followSubtitle: "Novedades, manicuras, pedicuras y arte en vivo.",
  },

  footer: {
    explore: "Explorar",
    studio: "Estudio",
    about:
      "Estudio de uñas y pedicura de Ximena Moreno y Karelli Sandoval. Arte pintado a mano, extensiones y spa de pies.",
    rights: "Todos los derechos reservados.",
    credit: "Diseñado y desarrollado por",
    motto: "Donde cada detalle en tus manos y pies cuenta una historia.",
  },

  notFound: {
    eyebrow: "Página no encontrada",
    text: "Esta página no existe en X.Nailsm. Te llevamos de vuelta.",
    cta: "Volver al inicio",
  },

  stats: [
    { value: "9+", label: "Años de experiencia" },
    { value: "2", label: "Especialistas calificadas" },
    { value: "8", label: "Servicios de autor" },
  ],

  testimonials: [
    {
      name: "Sofía R.",
      role: "Clienta frecuente",
      text: "Ximena es una artista increible. Y la nueva pedicura en seco con Karelli dejó mis pies suaves e impecables por semanas.",
    },
    {
      name: "Valentina M.",
      role: "Clienta de Pedicura Spa",
      text: "El kit tina spa de pies con sales epsom y la mascarilla que hace Karelli es pura relajación. ¡Atención bilingüe súper amable!",
    },
    {
      name: "Daniela L.",
      role: "Clienta fiel",
      text: "La estructura en builder gel de Ximena y la pedicura completa con Acripié de Karelli son la combinación perfecta.",
    },
  ],
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "X.Nailsm · Nail & Pedicure Studio",
    description:
      "Nail studio of Ximena Moreno and Karelli Sandoval. Builder levelling, polygel, acrylics, hand-painted art, and dry pedicures. Book via WhatsApp.",
    langName: "English",
  },

  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    booking: "Booking",
    bookNow: "Book now",
    bookAppointment: "Book an appointment",
    studioLine: "Nail & Pedicure Studio",
    menu: "Menu",
  },

  common: {
    artist: "Ximena Moreno & Karelli Sandoval",
    viewPortfolio: "View portfolio",
    allServices: "All services & pricing",
    fullGallery: "See full gallery",
    moreAboutHer: "Meet our team",
    bookThisService: "Book this service",
    bookSession: "Book a session",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    phone: "Phone",
    hours: {
      tueThuSatSun: "Tuesday, Thursday, Saturday & Sunday",
      monWedFri: "Monday, Wednesday & Friday",
      ximenaHours1: "7:00 am to 9:00 pm",
      ximenaHours2: "7:00 am to 3:00 pm",
      weekdays: "Monday to Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      byAppointment: "By appointment",
      to: "to",
    },
    team: {
      ximena: {
        name: "Ximena Moreno",
        role: "Founder & Nail Artist",
        bio: "Specialist in builder gel levelling, polygel & acrylic extensions, and Asian hand-painted nail art. Nearly 9 years of craft.",
      },
      karelli: {
        name: "Karelli Sandoval",
        role: "Partner, Manicurist & Pedicurist",
        badge: "Bilingual (English / Spanish)",
        bio: "Specialist in dry pedicures, full foot spa treatments and foot nail art. Personalised bilingual care.",
      },
    },
  },

  home: {
    heroEyebrow: "Private studio · By appointment",
    heroTitle: "Where nails & feet",
    heroAccent: "become art",
    heroText:
      "Structured extensions, dry pedicures and custom art by",
    introEyebrow: "The studio",
    introTitle: "Passion crafted",
    introAccent: "into every detail",
    introP1:
      "A private studio with one idea: hand and foot care is a ritual, not an errand. Every service begins with careful preparation and ends with a flawless finish that lasts.",
    introP2:
      "From sculpted builder gel to Asian art and specialised dry pedicures with spa rituals.",
    badgeName: "Ximena & Karelli",
    badgeSub: "Professional Nails & Pedicure",
    servicesEyebrow: "What we offer",
    servicesTitle: "Signature",
    servicesAccent: "services",
    servicesSubtitle:
      "Sculpted nails and dry pedicures with gel options, Acripié, and spa treatments.",
    portfolioEyebrow: "Recent work",
    portfolioTitle: "The portfolio",
    portfolioSubtitle: "Recent sets and pedicures from the studio.",
    instagramEyebrow: "Live Instagram Preview",
    instagramTitle: "Follow us live on",
    instagramAccent: "@x.nailsm",
    instagramSubtitle:
      "Explore our official Instagram profile live. View our latest nail sets, pedicures, process reels, and studio updates.",
    instagramFollow: "Follow",
    instagramFollowing: "Following",
    instagramMessage: "Message",
    instagramOpenProfile: "Open in Instagram",
    instagramPosts: "Posts",
    instagramFollowers: "Followers",
    instagramFollowingCount: "Following",
    instagramBioName: "Ximena Moreno & Karelli Sandoval | Nails & Pedicure 💅",
    instagramBioLine1: "💅 Nail Artists & Dry Pedicure Specialists",
    instagramBioLine2: "✨ Builder Gel · Polygel · Acrylic · Acripié · Spa Feet",
    instagramBioLine3: "📍 Tijuana, B.C. · Private Studio by Appointment",
    instagramTabPosts: "Posts",
    instagramTabReels: "Reels",
    instagramTabTagged: "Tagged",
    instagramViewOnIg: "View on Instagram",
    instagramCopied: "Link copied!",
    testimonialsEyebrow: "Client words",
    testimonialsTitle: "What they say",
    ctaEyebrow: "By appointment",
    ctaTitle: "Reserve your",
    ctaAccent: "beauty experience",
    ctaSubtitle:
      "Send your date, specialist, and service on WhatsApp. We reply promptly.",
    faqEyebrow: "Frequent questions",
    faqTitle: "Before your appointment",
    faq: [
      {
        q: "Do I need an appointment?",
        a: "Yes. All sessions are by appointment only. Write to us on WhatsApp to confirm an available date and time.",
      },
      {
        q: "What is a dry pedicure?",
        a: "It is a clean, precise dry technique (Russian manicure/pedicure style) that removes cuticles and prepares the nail without soaking in water, guaranteeing longer gel retention and nail health.",
      },
      {
        q: "What does the full spa pedicure include?",
        a: "It includes dry pedicure, foot spa tub kit (aromatic epsom salts, dead skin/callus gel remover, exfoliation, hydrating mask & cream) plus gel or Acripié.",
      },
      {
        q: "Do you offer bilingual service?",
        a: "Yes! Karelli Sandoval is completely bilingual (English and Spanish) to assist you in your preferred language.",
      },
      {
        q: "How do I book my appointment?",
        a: "Choose your service and date in the booking form and your request will be sent directly via WhatsApp.",
      },
    ],
  },

  about: {
    headerEyebrow: "About the team",
    headerTitle: "Ximena Moreno & Karelli Sandoval",
    headerAccent: "artists & partners",
    headerSubtitle:
      "A combination of talent, flawless technique and bilingual service for your hand and foot care.",
    storyEyebrow: "The story",
    storyTitle: "A studio built on",
    storyAccent: "craft and care",
    storyP1a: "With nearly",
    storyP1Strong: "nine years of professional mastery",
    storyP1b:
      ", Ximena Moreno and her partner Karelli Sandoval turn every appointment into a relaxing, renewing ritual.",
    storyP2:
      "From sculpted builder gel and hand-painted art to dry pedicures with hydrating spa treatments and Acripié techniques.",
    storyP3:
      "Your session is private, calm, and tailored to your preferences and needs.",
    partnerEyebrow: "Our partner",
    partnerTitle: "Meet",
    partnerAccent: "Karelli Sandoval",
    partnerRole: "Manicurista & Pedicurista · Bilingual (English / Spanish)",
    partnerSubtitle:
      "Dry pedicure specialist, full foot spa treatments, and foot nail designs.",
    partnerBio:
      "Karelli brings extensive expertise in dry pedicures, specialized filing, and foot spa treatments to the studio. Her warm touch, attention to detail, and bilingual fluency (English/Spanish) ensure a pleasant, professional experience.",
    partnerSpecialtiesTitle: "Karelli's Specialties",
    partnerSpecialties: [
      "Dry pedicure (cleaning, cuticle care & precision filing)",
      "Full Spa treatments with epsom salts & hydrating mask",
      "Single colour gel application & varied foot art designs",
      "Acripié technique on individual toe or full set",
      "Fluent bilingual service in English & Spanish",
    ],
    valuesEyebrow: "How we work",
    valuesTitle: "Three quiet",
    valuesAccent: "principles",
    valuesSubtitle: "The habits behind every service that leaves the studio.",
    values: [
      {
        title: "Preparation first",
        text: "Every set or pedicure begins with meticulous cuticle care and flawless dry prep work.",
      },
      {
        title: "Structure & hygiene",
        text: "Sterilised tools, single-use kits and premium grade products for your ultimate safety.",
      },
      {
        title: "Quiet luxury & relaxation",
        text: "A serene atmosphere with spa aromatherapy and elegant finishes that stay flawless for weeks.",
      },
    ],
    studioEyebrow: "The experience",
    studioTitle: "Inside the",
    studioAccent: "studio",
    studioPoints: [
      "Private appointments & personal care.",
      "Dry pedicure & foot spa kit with aromatic epsom salts.",
      "Bilingual service (Spanish & English).",
      "Wide range of acrylic, polygel, builder gel & Acripié.",
    ],
  },

  services: {
    headerEyebrow: "Services & pricing",
    headerTitle: "Signature",
    headerAccent: "services",
    headerSubtitle:
      "Sculpted manicures, Asian nail art, and professional dry pedicures with spa treatments.",
    priceNote:
      "Prices are subject to variation based on design complexity and acrylic/polygel extensions.",
    includesLabel: "Includes",
    processEyebrow: "The appointment",
    processTitle: "How a session",
    processAccent: "unfolds",
    processSubtitle: "About 1.5 to 2 hours, depending on service and design.",
    reserveCta: "Reserve your appointment",
    items: [
      {
        title: "Builder levelling",
        price: "From $600 pesos",
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
        price: "From $700 pesos",
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
        price: "From $700 pesos",
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
      {
        title: "Dry Pedicure + Single Colour Gel",
        price: "$300 pesos",
        badge: "Dry pedicure",
        desc: "Precise dry cleaning with cuticle removal, nail shaping and single colour gel application.",
        detail:
          "Specialised dry pedicure focusing on thorough cleansing without water soak, meticulous cuticle removal, nail shaping, and a clean single colour gel finish.",
        includes: [
          "Dry cleaning",
          "Cuticle removal",
          "Nail shaping",
          "Single colour gel application",
        ],
      },
      {
        title: "Dry Pedicure + Gel Design or Acripié",
        price: "$400 pesos",
        badge: "Design or Acripié",
        desc: "Dry cleaning, cuticle removal, nail shaping and gel application with design or Acripié technique.",
        detail:
          "Thorough dry cleansing and cuticle removal, completed with high quality gel with custom nail art designs or Acripié toe technique.",
        includes: [
          "Professional dry cleaning",
          "Cuticle care & shaping",
          "Gel with design or Acripié",
          "Varied toe designs",
        ],
      },
      {
        title: "Full Spa Pedicure + Single Colour Gel",
        price: "$650 pesos",
        badge: "Spa experience",
        desc: "Dry pedicure plus foot spa tub kit with epsom salts, exfoliation, mask and cream.",
        detail:
          "The complete foot ritual: includes dry pedicure (cleaning, cuticle, shaping), uniform gel polish and foot spa tub kit with aromatic epsom salts, callus/dead skin remover gel, deep exfoliation, hydrating mask and nourishing cream.",
        includes: [
          "Dry pedicure (cleaning, cuticle, shaping)",
          "Single colour gel application",
          "Spa tub kit (aromatic epsom salts)",
          "Dead skin & callus gel remover",
          "Exfoliation, mask & cream",
        ],
      },
      {
        title: "Full Spa Pedicure with Design or Acripié",
        price: "$700 - $800 pesos",
        badge: "Spa Premium",
        desc: "Full dry pedicure + relaxing foot spa kit + gel with design or Acripié ($700 to $800 options).",
        detail:
          "Luxury all-inclusive foot service. Includes full dry pedicure, relaxing foot spa kit (epsom salts, callus removal, exfoliation, mask & cream) and gel design or Acripié finish. Options: A) Single toe Acripié ($750), B) Full toes Acripié ($800), C) Gel Design ($700).",
        includes: [
          "Full dry pedicure",
          "Luxury spa tub kit",
          "Option A: Acripié on 1 toe = $750",
          "Option B: Acripié on all toes = $800",
          "Option C: Gel design = $700",
        ],
      },
    ],
    steps: [
      {
        title: "Consultation & Choice",
        text: "We define technique, design, shade or type of manicure/pedicure.",
      },
      {
        title: "Dry Prep",
        text: "Cuticle work, dehydration and nail preparation. The key to long lasting sets.",
      },
      {
        title: "Application / Spa Ritual",
        text: "Sculpting, levelling, or foot spa kit with aromatic salts and hydrating mask.",
      },
      {
        title: "Perfect Finish",
        text: "Gel, hand-painted art, top coat and cuticle oil hydration.",
      },
    ],
  },

  portfolio: {
    headerEyebrow: "The portfolio",
    headerTitle: "Recent work",
    headerAccent: "from the studio",
    headerSubtitle: "Select a set to view it up close.",
    cta: "Book a service like this",
    close: "Close",
    tags: {
      builder: "Builder gel",
      handPainted: "Painted by hand",
      fineLine: "Fine line",
      acrylic: "Acrylic",
      polygel: "Polygel",
      crystal: "Crystal detail",
      french: "French tip",
      pedicure: "Dry Pedicure & Spa",
    },
  },

  booking: {
    headerEyebrow: "By appointment",
    headerTitle: "Reserve your",
    headerAccent: "studio appointment",
    headerSubtitle:
      "Fill in your details and your request goes straight to WhatsApp. No account, no waiting.",
    name: "Full name",
    namePlaceholder: "Sofía Rodríguez",
    phone: "Phone number (WhatsApp)",
    phonePlaceholder: "+52 664 000 0000",
    date: "Preferred date",
    time: "Preferred time",
    artist: "Specialist",
    artistPlaceholder: "Select a specialist",
    artistAny: "Any available",
    artistXimena: "Ximena Moreno (Nails & Art)",
    artistKarelli: "Karelli Sandoval (Bilingual Nails & Pedicure)",
    service: "Service",
    servicePlaceholder: "Select a service",
    notes: "Notes & inspiration",
    notesPlaceholder: "Preferred shape, length, Acripié options (A/B/C) or reference photos…",
    send: "Send via WhatsApp",
    sendNote:
      "The message opens pre-filled in your WhatsApp to send in one tap.",
    hoursTitle: "Studio hours",
    required: "required",
    system: "Reservation system",
    stepOf: "Step {n} of {total}",
    back: "Back",
    next: "Continue",
    confirm: "Confirm reservation",
    stepService: "Choose service and specialist",
    stepWhen: "Date and time",
    stepWhenNote: "Ximena's hours: Tuesday, Thursday, Saturday & Sunday 7am to 9pm. Monday, Wednesday & Friday 7am to 3pm.",
    stepYou: "Your information",
    stepConfirm: "Confirm appointment",
    selectDate: "Select a date",
    selectTime: "Select a time",
    pickDateFirst: "Pick a date first.",
    noSlots: "No available times on this date. Contact us on WhatsApp to arrange.",
    summaryArtist: "Specialist",
    summaryService: "Service",
    summaryDate: "Date",
    summaryTime: "Time",
    summaryName: "Name",
    summaryPhone: "WhatsApp",
    summaryNotes: "Notes",
    message: {
      intro: "Hello, I would like to book an appointment at X.Nailsm.",
      artist: "Specialist",
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
    headerAccent: "about your next appointment",
    headerSubtitle:
      "Questions about nails, pedicures, prices or availability? Write to us on WhatsApp or Instagram.",
    channels: {
      whatsappSub: "Fastest response. Personalised attention",
      whatsappCta: "Chat on WhatsApp",
      instagramSub: "Direct messages and live portfolio",
      instagramCta: "Message on Instagram",
      phoneSub: "For direct enquiries to the studio",
      phoneCta: "Call the studio",
    },
    hoursEyebrow: "Studio hours",
    hoursTitle: "Our",
    hoursAccent: "opening hours",
    followEyebrow: "Follow along",
    followTitle: "Daily inspiration",
    followAccent: "from the studio",
    followSubtitle: "Studio updates, finished sets, pedicures and live art.",
  },

  footer: {
    explore: "Explore",
    studio: "Studio",
    about:
      "Nail and pedicure studio of Ximena Moreno and Karelli Sandoval. Hand painted art, extensions and foot spa treatments.",
    rights: "All rights reserved.",
    credit: "Designed and developed by",
    motto: "Where every detail on your hands and feet tells a story.",
  },

  notFound: {
    eyebrow: "Page not found",
    text: "This page does not exist at X.Nailsm. Let us take you back.",
    cta: "Return home",
  },

  stats: [
    { value: "9+", label: "Years of craft" },
    { value: "2", label: "Qualified specialists" },
    { value: "8", label: "Signature services" },
  ],

  testimonials: [
    {
      name: "Sofía R.",
      role: "Regular client",
      text: "Ximena is an incredible artist. And the new dry pedicure with Karelli left my feet smooth and flawless for weeks.",
    },
    {
      name: "Valentina M.",
      role: "Spa Pedicure client",
      text: "The foot spa tub kit with epsom salts and mask by Karelli is pure relaxation. Super friendly bilingual service!",
    },
    {
      name: "Daniela L.",
      role: "Loyal client",
      text: "Ximena's builder gel structure and Karelli's full pedicure with Acripié are the perfect combination.",
    },
  ],
};

export const translations: Record<Lang, Dict> = { es, en };

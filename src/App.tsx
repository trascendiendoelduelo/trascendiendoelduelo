import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Mail, 
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Smartphone,
  HelpCircle,
  Handshake
} from 'lucide-react';

/**
 * --- GUÍA DE PERSONALIZACIÓN RÁPIDA ---
 * 1. WHATSAPP_URL: Link directo al chat de WhatsApp.
 * 2. GOOGLE_FORM_URL: Link de inserción (embed) del formulario de Google.
 * 3. SPEAKERS: Array con la información e imágenes de los ponentes.
 * 4. IMÁGENES: Reemplazar las URLs de Unsplash por links de Cloudinary.
 * 5. QR_YAPE: Reemplazar el link en la sección de pagos.
 */

// --- Configuración ---
const WHATSAPP_URL = "https://wa.me/51936253084?text=Hola,%20quiero%20reservar%20mi%20cupo%20para%20Trascendiendo%20el%20Duelo";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScXwW5vBAkDxyCZteQYU9DqyzXvWiHvWigkwhbIMvhySFbSmw/viewform?embedded=true"; 
const ACTUAL_FORM_LINK = "https://forms.gle/vYNYj8g54HUnFnGZ8";
const MERCADO_PAGO_URL = "https://mpago.la/11B5pAF"; 
const YAPE_QR_IMAGE = "https://res.cloudinary.com/doguggkp8/image/upload/v1775177598/Recurso_58_vmm76x.png";
const BROCHURE_PDF_URL = "https://res.cloudinary.com/doguggkp8/image/upload/v1775177834/Brochure_TeD_Abr1_abukyc.pdf"; 
const POWER_DIGITAL_LOGO = "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1774478696/Recurso_24_n6hfz5.png";
const EVENT_LOGO = "https://res.cloudinary.com/doguggkp8/image/upload/v1775182404/logo_m4hdrp.png";
const POWER_DIGITAL_WEB = "https://digital.juancapower.com";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/trascendiendoelduelo/",
  facebook: "https://www.facebook.com/trascendiendoelduelo",
  tiktok: "https://www.tiktok.com/@trascendiendoelduelo"
};

const SPEAKERS = [
  {
    name: "Daniela Sarfati",
    role: "Coach de Vida y Espiritual",
    tags: ["Meditación", "Mindfulness", "Conferencista"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176714/Daniela_Sarfati_PNG_transparente_nvvmrh.png",
  },
  {
    name: "Yolanda Ponce de León",
    role: "Especialista en Tanatología",
    tags: ["Duelo Consciente", "Meditación"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176683/Yolanda_Ponce_icqsbl.png",
  },
  {
    name: "Yhis Bohorquez",
    role: "Professional Coach IAC",
    tags: ["Conferencista Internacional", "Vibra el Alma"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176714/Yhis_Bohorquez_-_midshot_ffsniz.png",
  },
  {
    name: "Romy Díaz",
    role: "Doctora en Psicología",
    tags: ["Mindset", "Liderazgo", "Investigadora"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176714/Romy_D%C3%ADaz_vuvspf.png",
  },
  {
    name: "JuanCa Power",
    role: "Coach Estratégico",
    tags: ["PNL", "Ingeniería Emocional", "CEO Power Digital"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176715/JuanCa_Power_tnwgdo.png",
  },
  {
    name: "Claudia Hurtado",
    role: "Especialista Invitada",
    tags: ["Próximamente"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176714/ClaudiaHurtado_not6az.png",
  }
];

const FAQS = [
  {
    q: "¿Para quién es este evento?",
    a: "Para cualquier persona que esté atravesando un proceso de pérdida (fallecimiento, separación, cambio de vida) y busque herramientas reales y contención para sanar."
  },
  {
    q: "¿Necesito conocimientos previos?",
    a: "No. El taller está diseñado para guiarte paso a paso, sin importar en qué etapa de tu proceso te encuentres."
  },
  {
    q: "¿Qué incluye la entrada?",
    a: "Acceso al taller vivencial full day, coffee break premium, kit de materiales y espacio de preguntas y respuestas con los ponentes."
  },
  {
    q: "¿Cómo reservo mi cupo?",
    a: "Puedes hacerlo llenando el formulario de esta página y realizando el pago vía Yape o Mercado Pago. Luego envías tu comprobante por WhatsApp."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-pearl-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={EVENT_LOGO} alt="Logo Trascendiendo el Duelo" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#historia" className="text-sm font-medium hover:text-deep-bronze transition-colors">Nuestra Historia</a>
          <a href="#speakers" className="text-sm font-medium hover:text-deep-bronze transition-colors">Ponentes</a>
          <a href="#inversion" className="text-sm font-medium hover:text-deep-bronze transition-colors">Inversión</a>
          <a href={WHATSAPP_URL} className="bg-twilight-navy text-pearl-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-deep-bronze transition-all duration-300 shadow-lg shadow-twilight-navy/20">
            Reservar Cupo
          </a>
        </div>

        <button className="md:hidden text-twilight-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-pearl-white shadow-xl py-8 px-6 flex flex-col space-y-6 md:hidden border-t border-ethereal-blue"
          >
            <a href="#historia" onClick={() => setIsOpen(false)} className="text-lg font-medium">Nuestra Historia</a>
            <a href="#speakers" onClick={() => setIsOpen(false)} className="text-lg font-medium">Ponentes</a>
            <a href="#inversion" onClick={() => setIsOpen(false)} className="text-lg font-medium">Inversión</a>
            <a href={WHATSAPP_URL} className="bg-twilight-navy text-pearl-white py-4 rounded-xl text-center font-bold">
              Reservar mi Cupo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`italic-accent text-lg md:text-xl ${light ? 'text-champagne-gold' : 'text-deep-bronze'} block mb-2`}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter ${light ? 'text-pearl-white' : 'text-twilight-navy'}`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-1 mx-auto mt-6 ${light ? 'bg-champagne-gold' : 'bg-deep-bronze'}`}
    />
  </div>
);

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pearl-white via-transparent to-pearl-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <img 
                src={EVENT_LOGO} 
                alt="Logo Trascendiendo el Duelo" 
                className="h-24 md:h-32 mx-auto mb-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="inline-block px-4 py-1 border border-deep-bronze/30 rounded-full">
                <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-deep-bronze">
                  El evento de sanación más importante del norte del Perú
                </span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-none"
            >
              Trascendiendo <br />
              <span className="text-deep-bronze">el Duelo</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="italic-accent text-xl md:text-3xl text-twilight-navy/80 mb-10"
            >
              Herramientas para sanar y volver a honrar la vida.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="#inversion" 
                className="w-full sm:w-auto bg-twilight-navy text-pearl-white px-10 py-5 rounded-full font-bold text-lg hover:bg-deep-bronze transition-all duration-300 shadow-2xl shadow-twilight-navy/30 flex items-center justify-center gap-2 group"
              >
                Reservar mi cupo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href={WHATSAPP_URL} 
                className="w-full sm:w-auto bg-white border-2 border-twilight-navy text-twilight-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-ethereal-blue transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Hablar por WhatsApp
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-bold text-deep-bronze/60 uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Trujillo
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} /> Domingo 03 de Mayo
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> 08:30 AM - 04:00 PM
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MANIFIESTO --- */}
      <section className="py-24 bg-twilight-navy text-pearl-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-champagne-gold blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-ethereal-blue blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-12 h-12 border-2 border-champagne-gold rotate-45 mx-auto flex items-center justify-center">
                <div className="w-2 h-2 bg-champagne-gold" />
              </div>
            </motion.div>
            
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="italic-accent text-3xl md:text-5xl lg:text-6xl leading-tight mb-8"
            >
              “El duelo no es un proceso que se supera para olvidar, es una transformación que se atraviesa para volver a honrar la vida desde un nuevo renacer.”
            </motion.blockquote>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              className="h-px bg-champagne-gold/30 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* --- HISTORIA DE ORIGEN --- */}
      <section id="historia" className="py-32 bg-pearl-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/doguggkp8/image/upload/v1775176715/ElyCabrera_ejdxo2.png" 
                  alt="Ely Cabrera" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative frames */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-ethereal-blue rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-champagne-gold/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="italic-accent text-2xl text-deep-bronze mb-4 block">Nuestra esencia</span>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">¿Qué es más fuerte, <br />el dolor o el amor?</h2>
              
              <div className="space-y-6 text-lg text-twilight-navy/80 leading-relaxed">
                <p>
                  Durante varios meses, viví creyendo que el dolor por la partida de mi hijo de 13 años era un laberinto sin salida. Me sentía estancada, sin fuerzas, sin un propósito, midiendo mis días por la ausencia de quien ya no estaba, sumergida en el sufrimiento.
                </p>
                <p>
                  Fue entonces cuando llegué al “Regalo de tu Partida” y a “Thaniyay”, grupos de ayuda mutua en el duelo, surgiendo en mí una pregunta que lo cambió todo: <strong>¿Qué es más fuerte, el dolor o el amor?</strong>
                </p>
                <p className="italic-accent text-xl text-deep-bronze pt-4">
                  — Ely Cabrera
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUÉ LOGRARÁS --- */}
      <section className="py-32 bg-ethereal-blue/20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Tu camino de sanación" 
            subtitle="Lo que viviremos juntos" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mapear tu proceso",
                desc: "Identificar con claridad en qué etapa del duelo te encuentras hoy para trazar una ruta de salida.",
                icon: <MapPin className="text-deep-bronze" size={32} />
              },
              {
                title: "Reprogramar el dolor",
                desc: "Aplicar herramientas prácticas de PNL para transformar esos pensamientos intrusivos que te agotan.",
                icon: <Smartphone className="text-deep-bronze" size={32} />
              },
              {
                title: "Conexión trascendental",
                desc: "Integrar la ausencia física como una nueva forma de presencia espiritual y emocional.",
                icon: <CheckCircle2 className="text-deep-bronze" size={32} />
              },
              {
                title: "Autogestión emocional",
                desc: "Llevarte un kit de primeros auxilios emocionales para los momentos de mayor intensidad.",
                icon: <HelpCircle className="text-deep-bronze" size={32} />
              },
              {
                title: "Comunidad de soporte",
                desc: "Sentirte sostenido por una red de expertos y personas que han trascendido su propio fuego.",
                icon: <MessageCircle className="text-deep-bronze" size={32} />
              },
              {
                title: "Taller Vivencial",
                desc: "Una experiencia inmersiva diseñada para movilizar emociones y liberar cargas pesadas.",
                icon: <Calendar className="text-deep-bronze" size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-pearl-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-champagne-gold group"
              >
                <div className="mb-6 p-4 bg-ethereal-blue/30 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-twilight-navy/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPEAKERS --- */}
      <section id="speakers" className="py-32 bg-pearl-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Guías de este viaje" 
            subtitle="Expertos con propósito" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SPEAKERS.map((speaker, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-twilight-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-3xl mb-1">{speaker.name}</h3>
                <p className="italic-accent text-deep-bronze text-lg mb-4">{speaker.role}</p>
                <div className="flex flex-wrap gap-2">
                  {speaker.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-ethereal-blue/40 rounded-full text-twilight-navy/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETALLES DEL EVENTO --- */}
      <section className="py-32 bg-twilight-navy text-pearl-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <SectionTitle 
                title="Detalles del Encuentro" 
                subtitle="Prepárate para la experiencia" 
                light 
              />
              <div className="space-y-8">
                {[
                  { 
                    icon: <MapPin />, 
                    label: "Lugar", 
                    value: "Casona Rebaza, Trujillo",
                    sub: "Jirón San Martín 465 – Centro Histórico",
                    link: "https://maps.app.goo.gl/TQ67SvBd17eTrGNy7"
                  },
                  { icon: <Calendar />, label: "Fecha", value: "Domingo 03 de Mayo" },
                  { icon: <Clock />, label: "Horario", value: "08:30 a. m. a 04:00 p. m." },
                  { icon: <CheckCircle2 />, label: "Modalidad", value: "Taller Vivencial Presencial" },
                  { icon: <Smartphone />, label: "Incluye", value: "Coffee Break & Material para taller" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-pearl-white/10 flex items-center justify-center text-champagne-gold group-hover:bg-champagne-gold group-hover:text-twilight-navy transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pearl-white/40 mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">
                          <p className="text-xl font-medium">{item.value}</p>
                          {item.sub && <p className="text-sm text-pearl-white/60">{item.sub}</p>}
                        </a>
                      ) : (
                        <p className="text-xl font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-pearl-white text-twilight-navy p-12 rounded-[3rem] shadow-2xl relative"
            >
              <div className="absolute -top-4 -right-4 bg-champagne-gold text-twilight-navy px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
                Cupos Limitados
              </div>
              <h3 className="text-4xl mb-6">Agenda del Día</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 border-b border-ethereal-blue pb-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">08:30 AM</span>
                  <span>Registro y Bienvenida Ceremonial</span>
                </li>
                <li className="flex gap-4 border-b border-ethereal-blue pb-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">09:30 AM</span>
                  <span>Bloque 1</span>
                </li>
                <li className="flex gap-4 border-b border-ethereal-blue pb-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">11:00 AM</span>
                  <span>Coffee Break & Networking</span>
                </li>
                <li className="flex gap-4 border-b border-ethereal-blue pb-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">11:30 AM</span>
                  <span>Bloque 2</span>
                </li>
                <li className="flex gap-4 border-b border-ethereal-blue pb-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">01:30 PM</span>
                  <span>Receso Almuerzo (Libre)</span>
                </li>
                <li className="flex gap-4 border-b border-ethereal-blue pb-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">03:00 PM</span>
                  <span>Bloque 3</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-deep-bronze min-w-[80px]">04:00 PM</span>
                  <span>Cierre y Despedida</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INVERSIÓN --- */}
      <section id="inversion" className="py-32 bg-pearl-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Tu Inversión" 
            subtitle="Un paso hacia tu paz" 
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-soft-lavender/20 border-2 border-champagne-gold rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-champagne-gold via-deep-bronze to-champagne-gold" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-6 py-2 bg-twilight-navy text-pearl-white rounded-full text-sm font-bold uppercase tracking-widest mb-8">
                  Preventa Exclusiva — 50 Cupos
                </span>
                
                <div className="flex flex-col items-center justify-center mb-10">
                  <span className="text-twilight-navy/40 text-2xl line-through mb-2">S/199</span>
                  <div className="flex items-start">
                    <span className="text-4xl font-bold mt-2 mr-1 text-deep-bronze">S/</span>
                    <span className="text-8xl md:text-9xl font-cinzel leading-none text-twilight-navy">99</span>
                  </div>
                  <p className="italic-accent text-xl text-deep-bronze mt-4">Pago único por persona</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
                  {[
                    "Acceso total al taller presencial",
                    "Coffee Break premium incluido",
                    "Material para taller",
                    "Sesión de Q&A con ponentes",
                    "Material digital post-evento"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-champagne-gold shrink-0" size={20} />
                      <span className="text-twilight-navy/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#registro" 
                    className="bg-twilight-navy text-pearl-white px-12 py-6 rounded-full font-bold text-xl hover:bg-deep-bronze transition-all duration-300 shadow-xl"
                  >
                    Reservar mi lugar ahora
                  </a>
                  <a 
                    href={WHATSAPP_URL} 
                    className="bg-white border-2 border-twilight-navy text-twilight-navy px-12 py-6 rounded-full font-bold text-xl hover:bg-ethereal-blue transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={24} />
                    Consultar por WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REGISTRO & FORMULARIO --- */}
      <section id="registro" className="py-32 bg-ethereal-blue/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl mb-8">Reserva tu cupo</h2>
                <p className="text-lg text-twilight-navy/70 mb-10 leading-relaxed">
                  Completa tus datos en el formulario oficial para asegurar tu participación. Una vez enviado, procede con el pago y envíanos tu comprobante.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-twilight-navy text-pearl-white flex items-center justify-center shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Llena el formulario</h4>
                      <p className="text-sm text-twilight-navy/60">Ingresa tus datos personales y de contacto.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-twilight-navy text-pearl-white flex items-center justify-center shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Realiza el pago</h4>
                      <p className="text-sm text-twilight-navy/60">Usa Yape o Mercado Pago (ver opciones abajo).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-twilight-navy text-pearl-white flex items-center justify-center shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Envía tu comprobante</h4>
                      <p className="text-sm text-twilight-navy/60">Confirma tu reserva vía WhatsApp.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <a 
                    href={BROCHURE_PDF_URL} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-deep-bronze font-bold hover:text-twilight-navy transition-colors group"
                  >
                    <Download size={24} />
                    Descargar Brochure PDF
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-ethereal-blue min-h-[600px] flex flex-col">
                <iframe 
                  src={GOOGLE_FORM_URL} 
                  width="100%" 
                  height="1502" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full flex-grow"
                >
                  Cargando…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PAGOS --- */}
      <section className="py-32 bg-pearl-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Métodos de Pago" 
            subtitle="Seguro y directo" 
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Yape */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-ethereal-blue text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#7D2181]/10 rounded-2xl flex items-center justify-center text-[#7D2181] mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl mb-4">Yape</h3>
              <p className="text-sm text-twilight-navy/60 mb-8">Escanea el código QR desde tu app de Yape.</p>
              <div className="w-48 h-48 bg-ethereal-blue/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-ethereal-blue mb-8 overflow-hidden">
                <img 
                  src={YAPE_QR_IMAGE} 
                  alt="QR Yape" 
                  className="w-full h-full p-4"
                />
              </div>
              <p className="font-bold text-twilight-navy">Ely Cab*</p>
            </motion.div>

            {/* Mercado Pago */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-ethereal-blue text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#009EE3]/10 rounded-2xl flex items-center justify-center text-[#009EE3] mb-6">
                <Handshake size={32} />
              </div>
              <h3 className="text-2xl mb-4">Mercado Pago</h3>
              <p className="text-sm text-twilight-navy/60 mb-8">Paga con tarjeta de crédito, débito o efectivo.</p>
              <div className="flex-grow flex items-center justify-center mb-8">
                <div className="space-y-2">
                  <div className="h-2 w-32 bg-ethereal-blue/30 rounded-full" />
                  <div className="h-2 w-24 bg-ethereal-blue/30 rounded-full mx-auto" />
                </div>
              </div>
              <a 
                href={MERCADO_PAGO_URL} 
                className="w-full bg-[#009EE3] text-white py-4 rounded-full font-bold hover:bg-[#007BB3] transition-colors"
              >
                Pagar Online
              </a>
            </motion.div>

            {/* WhatsApp Confirm */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-twilight-navy p-10 rounded-[2.5rem] shadow-lg text-center flex flex-col items-center text-pearl-white"
            >
              <div className="w-16 h-16 bg-champagne-gold/20 rounded-2xl flex items-center justify-center text-champagne-gold mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl mb-4">Confirmar</h3>
              <p className="text-sm text-pearl-white/60 mb-8">Envía tu captura de pantalla para validar tu cupo.</p>
              <div className="flex-grow flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full border-4 border-champagne-gold/20 border-t-champagne-gold" />
              </div>
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-champagne-gold text-twilight-navy py-4 rounded-full font-bold hover:bg-white transition-colors"
              >
                Enviar Comprobante
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-32 bg-soft-lavender/10">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Despeja tus dudas" 
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-ethereal-blue overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold pr-4">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-full bg-ethereal-blue/30 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronRight size={18} />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-twilight-navy/70 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-twilight-navy">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000" 
            alt="Final CTA Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-pearl-white mb-8 leading-tight">
              No camines este <br />
              <span className="text-champagne-gold italic-accent">proceso en soledad.</span>
            </h2>
            <p className="text-xl text-pearl-white/70 mb-12 italic-accent">
              Solo 50 cupos disponibles para esta experiencia transformadora.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#registro" 
                className="bg-champagne-gold text-twilight-navy px-12 py-6 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 shadow-2xl shadow-champagne-gold/20"
              >
                Asegurar mi cupo ahora
              </a>
              <a 
                href={WHATSAPP_URL} 
                className="bg-transparent border-2 border-pearl-white text-pearl-white px-12 py-6 rounded-full font-bold text-xl hover:bg-pearl-white hover:text-twilight-navy transition-all duration-300"
              >
                Más información
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- AUSPICIO FINAL --- */}
      <section className="py-20 bg-twilight-navy border-t border-pearl-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-pearl-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">Una experiencia impulsada por</p>
          <a href={POWER_DIGITAL_WEB} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
            <img src={POWER_DIGITAL_LOGO} alt="Power Digital" className="h-16 md:h-20 object-contain brightness-0 invert" referrerPolicy="no-referrer" />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-pearl-white pt-24 pb-12 border-t border-ethereal-blue">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img src={EVENT_LOGO} alt="Logo" className="h-10 object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="text-twilight-navy/60 leading-relaxed mb-8">
                Un espacio de contención, herramientas y comunidad para sanar la pérdida y honrar la vida.
              </p>
              <div className="flex gap-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ethereal-blue/30 flex items-center justify-center text-twilight-navy hover:bg-twilight-navy hover:text-pearl-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ethereal-blue/30 flex items-center justify-center text-twilight-navy hover:bg-twilight-navy hover:text-pearl-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ethereal-blue/30 flex items-center justify-center text-twilight-navy hover:bg-twilight-navy hover:text-pearl-white transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-deep-bronze mb-8">Navegación</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#historia" className="hover:text-deep-bronze transition-colors">Nuestra Historia</a></li>
                <li><a href="#speakers" className="hover:text-deep-bronze transition-colors">Ponentes</a></li>
                <li><a href="#inversion" className="hover:text-deep-bronze transition-colors">Inversión</a></li>
                <li><a href="#registro" className="hover:text-deep-bronze transition-colors">Registro</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-deep-bronze mb-8">Contacto</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-deep-bronze transition-colors">
                    <MessageCircle size={16} className="text-deep-bronze" />
                    +51 936 253 084
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-deep-bronze mb-8">Auspicia</h4>
              <div className="bg-twilight-navy p-6 rounded-2xl border border-twilight-navy/80">
                <a href={POWER_DIGITAL_WEB} target="_blank" rel="noopener noreferrer">
                  <img src={POWER_DIGITAL_LOGO} alt="Power Digital" className="h-8 object-contain mb-4 brightness-0 invert" referrerPolicy="no-referrer" />
                </a>
                <p className="text-xs text-pearl-white/70 leading-relaxed">
                  Líderes en transformación digital y eventos con propósito en el norte del país.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-ethereal-blue flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-twilight-navy/40 uppercase tracking-widest">
            <p>© 2026 Trascendiendo el Duelo. Todos los derechos reservados.</p>
            <p>Web diseñada por <a href={POWER_DIGITAL_WEB} target="_blank" rel="noopener noreferrer" className="text-twilight-navy/60 hover:text-deep-bronze underline">Power Digital</a></p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-twilight-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Tienes dudas? Escríbenos
        </span>
      </a>
    </div>
  );
}

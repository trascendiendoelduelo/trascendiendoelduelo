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
  Handshake,
  Share2
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
    role: "Coach de PNL",
    tags: ["PNL", "Anclaje"],
    image: "https://res.cloudinary.com/doguggkp8/image/upload/v1775176714/ClaudiaHurtado_not6az.png",
  }
];

const FAQS = [
  {
    q: "¿Para quién es este evento?",
    a: "Para cualquier persona que esté atravesando un proceso de pérdida física de un familiar, amigo o persona cercana, ya sea para tu propia sanación o para ayudar a alguien más."
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
  },
  {
    q: "¿Qué tipo de ropa debo llevar?",
    a: "Te recomendamos asistir con ropa cómoda que te permita moverte libremente, disfrutar de las dinámicas del taller vivencial y estar a gusto durante la meditación en vivo."
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
          <a href="#blog" className="text-sm font-medium hover:text-deep-bronze transition-colors">Blog</a>
          <a href="#inversion" className="text-sm font-medium hover:text-deep-bronze transition-colors">Inversión</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-twilight-navy text-pearl-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-deep-bronze transition-all duration-300 shadow-lg shadow-twilight-navy/20">
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
            <a href="#blog" onClick={() => setIsOpen(false)} className="text-lg font-medium">Blog</a>
            <a href="#inversion" onClick={() => setIsOpen(false)} className="text-lg font-medium">Inversión</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-twilight-navy text-pearl-white py-4 rounded-xl text-center font-bold">
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

const BlogSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="blog" className="py-32 bg-soft-lavender/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Lectura Recomendada" 
          subtitle="Reflexiones para el alma" 
        />

        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-ethereal-blue">
          <div className="p-12 md:p-20">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-ethereal-blue pb-10 text-center md:text-left">
              <img 
                src={SPEAKERS.find(s => s.name.includes('Yhis'))?.image} 
                alt="Yhis Bohorquez, autora del blog sobre sanación del duelo" 
                className="w-32 h-32 rounded-full object-cover border-4 border-champagne-gold shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-3xl md:text-4xl font-cinzel text-twilight-navy mb-4 leading-tight">La Paz no es un milagro, es una construcción diaria</h3>
                <p className="text-deep-bronze font-cormorant italic text-xl">Por: Yhis Bohorquez</p>
              </div>
            </div>

            <div className={`prose prose-lg max-w-none text-twilight-navy/80 leading-relaxed space-y-8 relative transition-all duration-700 ${!isExpanded ? 'max-h-[400px] overflow-hidden' : ''}`}>
              <p className="font-medium text-2xl italic-accent text-twilight-navy text-center mb-10">
                Trascender el dolor no es fácil, al inicio es un gran desafío, pero la constancia gana la batalla.
              </p>
              <p className="text-lg">
                Estos fueron los hábitos de cada día que me ayudaron a transformar el dolor en AMOR puro e inquebrantable, aportando a un cambio en mi mentalidad, porque si la mente es fuerte, no hay tormenta que te derrote. Te puedes caer mil veces, pero la mentalidad y actitud te dan la fuerza para levantarte una y otra vez, con las rodillas raspadas, sacudiendo los raspones. Lo importante es nunca claudicar. La paz no es un milagro, es el resultado de las pequeñas acciones realizadas día a día. El duelo es la mutilación del alma; volver a pararse, a levantarse necesita mucho esfuerzo, constancia y disciplina en los simples hábitos que alimentan el alma...
              </p>

              <ul className="space-y-8 mt-12 list-none pl-0">
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🧘</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Medita:</strong> Todos los días aunque no quieras hacerlo, aunque el tiempo te gane y las tareas del día a día te consuman, aunque la tristeza envuelva en sus brazos y te sientas paralizada MEDITA.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🙏</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Agradece:</strong> Aunque no sepas de qué agradecer, aunque sientas que la vida ha sido injusta contigo, aunque sientas enojo con el mundo AGRADECE. Mira los pequeños milagros de la vida, mira las historias de tu entorno, aunque parezca que todo está mal tienes un corazón que late, tienes recuerdos en tu mente, y experiencias que alimentan el alma. No te centres en lo que no tienes, agradece hasta por el suelo que pisas, lo simple es un milagro.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🤝</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Comparte con alguien:</strong> No importa lo poco que puedas, a veces una palabra basta, un abrazo, un pan, escuchar también es un regalo.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🚶</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Camina:</strong> Sal de la cama, aunque quieras quedarte envuelta en el dolor, mira el sol, mira el cielo, pisa la tierra descalza, respira profundo, mira la creación y descubre su maravillosa armonía. Mira cómo todo cumple un ciclo, nada en la naturaleza se acaba, todo se transforma y regresa a la vida sin perder su esencia. Nosotros somos hijos de la naturaleza, nada se acaba, los ciclos de la vida son transformaciones constantes.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">💧</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Llora:</strong> No desde la queja, llora desde el entendimiento. Soy humana y siento mi dolor, no lo reprimo, pero tampoco dejo que me endurezca. Lluevo, me nublo, un día volveré a brillar.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">✉️</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Escribe una carta de agradecimiento:</strong> A esa personita que no está en tu vida física, pero está en tu vida espiritual, que es una presencia mayor. Escríbele agradeciendo por cada segundo de amor, el amor no se acaba con la ausencia.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">❤️</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Escríbete una carta de gratitud y de AMOR a ti:</strong> Perdónate, ámate, entiende que hiciste lo mejor que pudiste, no todo está en tus manos, entenderlo es sanador.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">📚</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Estudia, estudia, estudia:</strong> Todo lo referente a la espiritualidad, a la conciencia, filosofía, ahí habita nuestro conocimiento. El conocimiento es la llave de los candados del sufrimiento, investiga referencias científicas del alma, aprende que el AMOR es la fuerza más poderosa para romper las cadenas del dolor.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🌸</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Abraza la vida:</strong> Esta es una escuela, estamos de paso. Abraza un árbol, besa una flor, embellece tus ojos con el vuelo de un ave, háblale a la luna, mira las estrellas. Somos muy pequeños en este vasto universo para vivir sufriendo.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">✨</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Elimina la queja:</strong> Y cámbiala por la gratitud, Hooponopono, servicio, arte, acción, AMOR, acción.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🦅</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Perdónate:</strong> Por todo lo que esperabas de la vida y no llegó, desdibuja el futuro que tu mente dibujó y abraza la realidad que tu alma está viviendo, que aunque parezca no tener sentido está puliendo las fibras más finas de tu espíritu.</p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-3xl shrink-0">🫂</span>
                  <p className="text-lg"><strong className="text-twilight-navy">Abraza y despide tus expectativas:</strong> Esos sueños físicos que no se cumplieron, ese es el mayor duelo, y es el que debe ser abrazado y sanado. AMA tu vida real, con la personita que amas en un plano distinto pero presente. AMA sin condición, ama a quien te abraza desde adentro, a quien acaricia tus días con amor y magia, aunque a veces la mente es tan densa que no te permita ver con los ojos del alma, silencia la mente y deja que hable el corazón.</p>
                </li>
              </ul>

              <div className="mt-16 pt-12 border-t border-ethereal-blue text-center bg-soft-lavender/20 p-10 rounded-3xl">
                <p className="font-cormorant italic text-3xl text-deep-bronze mb-8 leading-relaxed">
                  "Te prometo que si lo haces todos los días, verás la luz de la vida que iluminará desde lo más profundo de tu ser."
                </p>
                <p className="mb-8 text-lg">
                  La vida es lo que es, no lo que quisiéramos, todo nos puede ser arrebatado pero la forma de atravesar nuestras mayores pruebas esa es nuestra gran libertad, esa es nuestra honra de AMOR, es la prueba de que el AMOR es más fuerte que el dolor, y que los milagros no solo se consiguen orando, se consiguen con oración en el corazón y acción en cada día de nuestra vida, lo que hacemos nos define.
                </p>
                <p className="font-bold text-twilight-navy text-2xl uppercase tracking-widest font-cinzel">
                  Un día a la vez
                </p>
              </div>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-4">
                  <button 
                    onClick={() => setIsExpanded(true)} 
                    className="bg-twilight-navy text-pearl-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-deep-bronze transition-colors shadow-lg flex items-center gap-2"
                  >
                    Seguir Leyendo <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {isExpanded && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setIsExpanded(false)} 
                  className="text-deep-bronze font-bold uppercase tracking-widest text-sm hover:text-twilight-navy transition-colors flex items-center gap-2 mx-auto"
                >
                  Ocultar texto
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

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
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
            >
              <a 
                href="#inversion" 
                className="w-full sm:w-auto bg-twilight-navy text-pearl-white px-8 py-4 rounded-full font-bold text-lg hover:bg-deep-bronze transition-all duration-300 shadow-2xl shadow-twilight-navy/30 flex items-center justify-center gap-2 group"
              >
                Reservar mi cupo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#evento"
                className="w-full sm:w-auto bg-champagne-gold text-twilight-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Ver detalles del evento
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white border-2 border-twilight-navy text-twilight-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-ethereal-blue transition-all duration-300 flex items-center justify-center gap-2"
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

      {/* --- PARA QUIÉN ES ESTE EVENTO --- */}
      <section className="py-24 bg-soft-lavender/20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="¿Para quién es este evento?" 
            subtitle="Un espacio seguro para ti" 
          />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-ethereal-blue text-center"
            >
              <div className="w-16 h-16 bg-ethereal-blue/30 rounded-full flex items-center justify-center mx-auto mb-6 text-twilight-navy">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-twilight-navy">Proceso de Pérdida</h3>
              <p className="text-twilight-navy/70 text-lg">
                Para cualquier persona que esté atravesando la pérdida física de un familiar, amigo o persona cercana, ya sea para sanar o para ayudar a alguien más.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-ethereal-blue text-center"
            >
              <div className="w-16 h-16 bg-champagne-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 text-deep-bronze">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-twilight-navy">Para Toda la Familia</h3>
              <p className="text-twilight-navy/70 text-lg">
                Un espacio diseñado para ser compartido. El duelo impacta a todo el entorno, y sanar en conjunto fortalece los lazos familiares.
              </p>
            </motion.div>
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
      <section id="evento" className="py-32 bg-twilight-navy text-pearl-white relative overflow-hidden">
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
                  { icon: <CheckCircle2 />, label: "Incluye", value: "Ingreso al Taller • Coffee Break • Almuerzo • Media Beca Piscina \"Berendson\" • Sorteos" }
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
                        <div>
                          <p className="text-xl font-medium text-white">{item.value}</p>
                          {item.sub && <p className="text-sm text-pearl-white/60 mb-3">{item.sub}</p>}
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] bg-champagne-gold/20 text-champagne-gold px-4 py-2 rounded-full hover:bg-champagne-gold hover:text-twilight-navy transition-all duration-300">
                            <MapPin size={14} /> Aquí mira en Google Maps
                          </a>
                        </div>
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
                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">08:30 AM</span>
                  <span className="font-medium flex items-center gap-2">Registro y bienvenida</span>
                </li>
                
                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">09:15 AM</span>
                  <div className="flex flex-col gap-3">
                    <span className="font-medium">Opening – Daniela Sarfatti</span>
                    <div>
                      <span className="font-bold block">JuanCa Power:</span>
                      <span className="text-sm text-twilight-navy/80 leading-snug">Neuro-Resiliencia: Programando la mente para trascender el dolor y crear una nueva realidad</span>
                    </div>
                  </div>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">09:30 AM</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-twilight-navy/40 font-bold mb-1">Bloque 1</span>
                    <span className="font-bold block">Yolanda Ponce De León:</span>
                    <span className="text-sm text-twilight-navy/80 leading-snug">¿Cómo vivir cuando una parte de ti se fue? Comprender la pérdida, la impermanencia y el vínculo que nunca muere</span>
                  </div>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">11:00 AM</span>
                  <span className="font-medium flex items-center gap-2"><span className="text-xl">☕</span> Coffee Break</span>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">11:30 AM</span>
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-twilight-navy/40 font-bold mb-1">Bloque 2</span>
                    <div>
                      <span className="font-bold block">Romy Díaz:</span>
                      <span className="text-sm text-twilight-navy/80 leading-snug">Estrategias para encontrar significado y propósito después de una pérdida</span>
                    </div>
                    <div>
                      <span className="font-bold block">Claudia Hurtado:</span>
                      <span className="text-sm text-twilight-navy/80 leading-snug">Resignificar, propósito y honrar. Un camino para sanar, el milagro que estabas esperando</span>
                    </div>
                  </div>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">01:00 PM</span>
                  <span className="font-medium flex items-center gap-2"><span className="text-xl">🍽️</span> Almuerzo</span>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">01:45 PM</span>
                  <span className="font-medium flex items-center gap-2"><span className="text-xl">🎁</span> Sorteo</span>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">02:00 PM</span>
                  <span className="font-medium flex items-center gap-2"><span className="text-xl">🗣️</span> Bloque de testimonios</span>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-ethereal-blue pb-5">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">02:30 PM</span>
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-twilight-navy/40 font-bold mb-1">Bloque 3</span>
                    <div>
                      <span className="font-bold block">Yhis Bohórquez:</span>
                      <span className="text-sm text-twilight-navy/80 leading-snug">El amor es más fuerte que el dolor</span>
                    </div>
                    <div>
                      <span className="font-bold block">Daniela Sarfatti:</span>
                      <span className="text-sm text-twilight-navy/80 leading-snug">Sentir para sanar. El poder del amor en el duelo</span>
                    </div>
                  </div>
                </li>

                <li className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                  <span className="font-bold text-deep-bronze shrink-0 sm:w-28">03:45 PM</span>
                  <span className="font-medium flex items-center gap-2"><span className="text-xl">✨</span> Cierre del evento</span>
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

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold font-cinzel text-twilight-navy">¿Qué incluye?</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
                  {[
                    "Ingreso al Taller",
                    "Coffee Break",
                    "Almuerzo",
                    "Media Beca Piscina \"Berendson\"",
                    "Sorteos"
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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

      {/* --- BLOG / LECTURA RECOMENDADA --- */}
      <BlogSection />

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
                target="_blank"
                rel="noopener noreferrer"
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
        target="_blank"
        rel="noopener noreferrer"
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

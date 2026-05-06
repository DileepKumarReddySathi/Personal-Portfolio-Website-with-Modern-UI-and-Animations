import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-violet-600/30 rounded-full blur-[120px] animate-blob"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[150px] animate-blob animation-delay-2000"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-violet-400 uppercase bg-violet-400/10 border border-violet-400/20 rounded-full">
            Available for New Projects
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Dileep Kumar</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cloud & DevOps Engineer passionate about building scalable, 
            automated systems and modern cloud architectures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass border border-white/20 text-white font-bold flex items-center gap-2 transition-all hover:bg-white/10"
            >
              Download CV <Download size={20} />
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/dileepkumarreddysathi" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dileep-kumar-reddy-sathi-454174291/" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}

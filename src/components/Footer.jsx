import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="text-2xl font-bold font-display">
            <span className="text-gradient">DILEEP.</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sathi Dileep Kumar Reddy. All rights reserved.
          </p>
          <div className="flex justify-center gap-8 pt-4">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

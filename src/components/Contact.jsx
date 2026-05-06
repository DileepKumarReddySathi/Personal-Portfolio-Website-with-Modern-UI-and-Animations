import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "dileepkumarreddysathi@gmail.com", href: "mailto:dileepkumarreddysathi@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 99128 17555", href: "tel:+919912817555" },
                { icon: MapPin, label: "Location", value: "Rajahmundry, Andhra Pradesh", href: "#" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="p-4 rounded-2xl glass border border-white/5 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                    <a href={item.href} className="text-lg text-slate-200 hover:text-violet-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-12">
              {[
                { icon: Github, href: "https://github.com/dileepkumarreddysathi" },
                { icon: Linkedin, href: "https://linkedin.com/in/dileepkumarreddysathi" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-4 rounded-full glass border border-white/5 text-slate-400 hover:text-white hover:border-violet-500/50 transition-all"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-violet-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-violet-500/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-violet-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Message</label>
                <textarea
                  placeholder="How can I help you?"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-violet-500/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-3"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

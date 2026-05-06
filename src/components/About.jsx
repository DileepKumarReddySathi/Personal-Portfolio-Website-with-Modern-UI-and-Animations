import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border-4 border-white/10 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                {/* Placeholder for Photo - Using a generated image or colored box */}
                <div className="text-8xl font-black text-white/5">SDKR</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Designing <span className="text-gradient">Robust</span> Cloud Solutions
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am Sathi Dileep Kumar Reddy, a dedicated Cloud & DevOps Engineer based in Rajahmundry, Andhra Pradesh. 
              Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at Aditya Engineering College.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              My journey in tech is driven by a fascination with automation and scalable architectures. 
              As an intern at Technical Hub, I've honed my skills in AWS services like EC2, S3, Lambda, and IAM, 
              while building streamlined CI/CD pipelines to ensure continuous delivery.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-white font-bold text-xl mb-1">90.8%</h4>
                <p className="text-slate-500 text-sm">Intermediate (MPC)</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">7.68</h4>
                <p className="text-slate-500 text-sm">Current B.Tech CGPA</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Top Certifications</h4>
              <div className="flex flex-wrap gap-3">
                {["AWS Cloud Practitioner", "AWS Developer Associate", "AI Fundamentals"].map((cert) => (
                  <span key={cert} className="px-3 py-1.5 rounded-xl bg-violet-500/10 text-violet-300 border border-violet-500/20 text-xs font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

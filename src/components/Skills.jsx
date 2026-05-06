import { motion } from "framer-motion";
import { 
  Code2, Cloud, Terminal, Database, 
  Layers, Github, Cpu, Layout
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C", "Java", "Python", "JavaScript"],
    color: "text-blue-400"
  },
  {
    title: "Web Technologies",
    icon: Layout,
    skills: ["HTML", "CSS", "Express", "Node.js"],
    color: "text-violet-400"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "AWS CLI", "Linux"],
    color: "text-cyan-400"
  },
  {
    title: "Tools & DB",
    icon: Database,
    skills: ["SQL", "MySQL", "Git", "VS Code"],
    color: "text-emerald-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Proficiency</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-400 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 p-8 -z-10 opacity-0 group-hover:opacity-10 transition-opacity">
                <cat.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

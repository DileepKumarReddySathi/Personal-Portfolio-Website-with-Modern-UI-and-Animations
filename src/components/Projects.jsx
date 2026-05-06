import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import dashboardImg from "../assets/dashboard.png";
import ecommerceImg from "../assets/ecommerce.png";
import cryptoImg from "../assets/crypto.png";

const projects = [
  {
    title: "AI Doctor Chatbot",
    description: "A serverless chatbot built with Amazon Lex and AWS Lambda for real-time doctor appointment bookings.",
    tags: ["Amazon Lex", "AWS Lambda", "S3"],
    github: "https://github.com",
    image: dashboardImg,
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Streamlined deployment workflows using AWS CodePipeline and Docker containers for enterprise applications.",
    tags: ["AWS", "Docker", "CodePipeline"],
    github: "https://github.com",
    image: ecommerceImg,
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Configured secure and scalable infrastructure using Terraform and AWS services like VPC, EC2, and RDS.",
    tags: ["Terraform", "AWS", "Infrastructure"],
    github: "https://github.com",
    image: cryptoImg,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my best work, focusing on cloud architecture and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden border border-white/5"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-slate-950 hover:bg-violet-500 hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-white text-slate-950 hover:bg-violet-500 hover:text-white transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Repository <ArrowRight size={14} className="text-violet-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Internal helper component to avoid circular dependency if ArrowRight is from Hero
import { ArrowRight } from "lucide-react";

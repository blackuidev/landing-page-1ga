import { motion } from "framer-motion";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { projects } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-5xl font-bold text-center mb-4">My Work</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Here's a selection of projects I'm proud of. Each one represents a unique challenge and a learning opportunity.
      </p>

      <GlowingCards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
           <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
           >
            <GlowingCard className="flex flex-col h-full">
              <div className="flex-grow">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to="#">
                   <span className="text-sky-500 hover:text-sky-400 flex items-center">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                   </span>
                </Link>
              </div>
            </GlowingCard>
           </motion.div>
        ))}
      </GlowingCards>
    </motion.div>
  );
};

export default ProjectsPage;

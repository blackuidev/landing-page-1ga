import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { Button } from "@/components/lightswind/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Globe from "@/components/lightswind/globe";

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* New Advanced Hero Section */}
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-start text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
              Building Digital Experiences
            </h1>
            <p className="font-light text-base md:text-xl dark:text-neutral-300 py-4">
              Hi, I'm Muhilan. A creative developer passionate about crafting
              beautiful and functional UI/UX that leaves a lasting impression.
            </p>
            <Link to="/projects">
              <Button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 text-lg font-semibold">
                View My Work
              </Button>
            </Link>
          </motion.div>

          {/* Right side: Interactive Globe */}
          <motion.div 
            initial={{ opacity: 0.0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-full h-full flex items-center justify-center md:justify-end"
          >
            <Globe
              className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
              baseColor="#2d55f3"
              glowColor="#a38aff"
              dark={1}
              scale={1.1}
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0.0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <GlowingCards>
          {featuredProjects.map((project) => (
            <GlowingCard key={project.id} className="flex flex-col">
              <div className="flex-grow">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to={`/projects`}>
                  <span className="text-sky-500 hover:text-sky-400 flex items-center">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline">
              See All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;

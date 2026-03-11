import { motion } from "framer-motion";
import { skills, experiences } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/lightswind/avatar";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <Avatar className="w-48 h-48 border-4 border-sky-500/50 shadow-lg">
                <AvatarImage src="https://i.imgur.com/sdG2fRx.png" alt="OdewithMuhilan" />
                <AvatarFallback>OM</AvatarFallback>
            </Avatar>
        </motion.div>
        <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate and creative developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in modern frontend technologies and a keen eye for design, I strive to create seamless digital experiences.
            </p>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="bg-card text-card-foreground border rounded-full px-6 py-2 shadow-sm cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
                <div key={index} className="flex gap-6 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <div className="flex-grow w-px bg-border -mb-1"></div>
                    </div>
                    <div className="pb-8">
                        <p className="text-muted-foreground">{exp.duration}</p>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                        <p className="mt-2 text-muted-foreground">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

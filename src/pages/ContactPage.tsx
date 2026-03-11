import { motion } from "framer-motion";
import { Input } from "@/components/lightswind/input";
import { Textarea } from "@/components/lightswind/textarea";
import { Button } from "@/components/lightswind/button";
import { Send } from "lucide-react";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Have a project in mind or just want to say hello? Feel free to send me a message.
        </p>
      </div>

      <motion.form 
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input type="text" placeholder="Your Name" className="h-12" />
          <Input type="email" placeholder="Your Email" className="h-12" />
        </div>
        <Textarea placeholder="Your Message" className="min-h-[150px] mb-6" />
        <div className="text-center">
            <Button type="submit" size="lg">
                Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactPage;

import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} OdewithMuhilan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

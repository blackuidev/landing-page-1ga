import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { ToggleTheme } from "@/components/lightswind/toggle-theme";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Code className="h-8 w-8 text-sky-500" />
            <span>OdewithMuhilan</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-lg transition-colors hover:text-primary ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`
                }
              >
                {({ isActive }) => (
                    <>
                        {link.name}
                        {isActive && (
                            <motion.div
                            className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-sky-500"
                            layoutId="underline"
                            />
                        )}
                    </>
                )}
              </NavLink>
            ))}
            <ToggleTheme animationType="flip-x-in" />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ToggleTheme animationType="flip-x-in" />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                        `text-lg ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

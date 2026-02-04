import { Mountain } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-display text-lg font-semibold"
          >
            <Mountain className="w-6 h-6" />
            <span>Ryan McDonald</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 font-body text-sm">
            <a
              href="#services"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/70">
            © {currentYear} Ryan McDonald. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

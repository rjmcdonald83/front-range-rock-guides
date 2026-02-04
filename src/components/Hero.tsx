import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/eldorado-canyon.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dramatic rock face at Eldorado Canyon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay-strong" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-accent font-body text-sm md:text-base font-medium tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
            AMGA Certified • Boulder, Colorado
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-foreground mb-6 leading-tight opacity-0 animate-fade-up delay-100">
            Custom Climbing
            <br />
            <span className="text-accent">Instruction & Guiding</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
            Learn to climb safely and confidently with Ryan McDonald, AMGA Assistant Rock Guide and seasoned educator. 
            Private coaching and guiding offered through ABC Kids Climbing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Level Up Your Climbing</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in delay-500">
        <a 
          href="#services" 
          className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <span className="font-body text-xs tracking-wider uppercase">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

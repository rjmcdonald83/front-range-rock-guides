import { ArrowRight } from "lucide-react";
import heroSunset from "@/assets/hero-sunset.jpeg";
import kidsClimbing from "@/assets/kids-climbing.jpeg";
import nightMountains from "@/assets/night-mountains.jpeg";

const services = [
  {
    title: "Private Indoor Coaching",
    description:
      "From first-time climbers learning the basics to established climbers refining advanced skills and tactics. Each session is targeted to your specific goals.",
    image: heroSunset,
    alt: "Sunset at the top of a climbing route",
  },
  {
    title: "Outdoor Guiding",
    description:
      "Guided climbing adventures with a focus on fun and learning for individual climbers, families, or groups. Trips include bouldering, single-pitch, or multi-pitch adventures.",
    image: kidsClimbing,
    alt: "Kids learning to climb outdoors",
  },
  {
    title: "Specialty Programs",
    description:
      "Custom full or half-day guiding on classic Front Range crags for team outings, homeschool groups, specialty skills like crack climbing, and project work.",
    image: nightMountains,
    alt: "Mountain landscape at night",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Better Foundations, Better Sending
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Climbers with the right foundation climb more, progress faster, and are safer. 
            With intentional, targeted coaching, skill and confidence building isn't just quicker—it's fun.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

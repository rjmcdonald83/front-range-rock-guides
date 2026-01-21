import { Clock, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingOptions = [
  {
    title: "Private Indoor Coaching",
    duration: "~1.5 hours",
    groupSize: "1–4 participants",
    features: [
      "Technique analysis & improvement",
      "Goal-oriented skill development",
      "All ages and skill levels",
      "Movement coaching included",
    ],
    popular: false,
  },
  {
    title: "Half-Day Outdoor Guiding",
    duration: "~4 hours",
    groupSize: "1–4 participants",
    features: [
      "Bouldering or single-pitch climbing",
      "All technical gear included",
      "Location based on your goals",
      "Safety instruction built-in",
    ],
    popular: true,
  },
  {
    title: "Full-Day Outdoor Guiding",
    duration: "~8 hours",
    groupSize: "1–4 participants",
    features: [
      "Multi-pitch climbing available",
      "All technical gear included",
      "Classic Front Range locations",
      "Lunch break at a scenic spot",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Programs & Pricing
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Private, educational, and tailored climbing programs for the Front Range area. 
            All rates are customized based on your specific needs—contact for a personalized quote.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className={`relative bg-card rounded-xl p-6 md:p-8 border transition-all duration-300 hover:shadow-lg ${
                option.popular
                  ? "border-accent shadow-md ring-1 ring-accent/20"
                  : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4 mt-2">
                {option.title}
              </h3>

              {/* Details */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="font-body text-sm">{option.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="font-body text-sm">{option.groupSize}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={option.popular ? "warm" : "warmOutline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-secondary/50 rounded-xl p-6 md:p-8 border border-border max-w-3xl mx-auto">
          <p className="font-body text-center text-muted-foreground">
            <strong className="text-primary">Note:</strong> All technical gear (ropes, harnesses, helmets) 
            is included. Rates do not include required park entry fees (e.g., Eldorado Canyon, State Parks) 
            if clients drive themselves. Custom programs and curriculum development available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

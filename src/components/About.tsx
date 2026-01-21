import { Award, BookOpen, Users, Mountain } from "lucide-react";
import ryanClimbing from "@/assets/ryan-climbing.jpeg";

const credentials = [
  {
    icon: Award,
    title: "AMGA Certified",
    description: "Assistant Rock Guide",
  },
  {
    icon: BookOpen,
    title: "Adventure Education",
    description: "Prescott College Graduate",
  },
  {
    icon: Users,
    title: "Outward Bound",
    description: "Instructor Alumnus",
  },
  {
    icon: Mountain,
    title: "Lead Coach",
    description: "ABC Kids Climbing",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ryanClimbing}
                alt="Ryan McDonald climbing on rock"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Meet Your Guide
            </h2>
            <p className="font-display text-xl md:text-2xl text-accent font-medium mb-6">
              Ryan McDonald
            </p>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed mb-8">
              <p>
                Ryan's approach prioritizes safety, education, and a pragmatic path to achieving 
                your climbing goals. With over a decade of experience guiding and instructing, 
                he creates supportive environments where climbers of all ages thrive.
              </p>
              <p>
                He earned a bachelor's in Adventure Education and Environmental Studies from 
                Prescott College and has instructed for a variety of organizations including 
                Prescott College, Chadwick School, and Outward Bound.
              </p>
              <p>
                Ryan holds an AMGA Assistant Rock Guide Certification and serves as a lead 
                guide and lead coach at ABC Kids Climbing, delivering effective, safe instruction 
                for youth and adults alike.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border"
                >
                  <cred.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-primary text-sm">
                      {cred.title}
                    </p>
                    <p className="font-body text-muted-foreground text-xs">
                      {cred.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

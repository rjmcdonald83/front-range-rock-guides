import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import familySummit from "@/assets/family-summit.jpeg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "3214f532-f41e-4448-9d9e-7adc6c57c8ab");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Ryan will get back to you within 24-48 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Error sending message",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
              Ready to Improve Your Climbing?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Fill out the form below and Ryan will personally respond to discuss 
              your custom guiding needs and availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-body text-sm font-medium text-primary">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-body text-sm font-medium text-primary">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="font-body text-sm font-medium text-primary">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="indoor-coaching">Private Indoor Coaching</option>
                  <option value="outdoor-guiding">Outdoor Guiding</option>
                  <option value="custom-programs">Custom Programs & Curriculum</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-body text-sm font-medium text-primary">
                  Tell us about your goals *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Share your goals, preferred dates, location preferences, group size, and any other details..."
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="warm"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Let's Go Climbing
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={familySummit}
                alt="Guide and clients at the summit"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body font-semibold text-primary">Email</p>
                  <a
                    href="mailto:ryan@abckidsclimbing.com"
                    className="font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    ryan@abckidsclimbing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body font-semibold text-primary">Service Area</p>
                  <p className="font-body text-muted-foreground">
                    Boulder Canyon, Flagstaff Mountain, Eldorado Canyon, Shelf Road, 
                    Clear Creek Canyon, and throughout the Colorado Front Range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No valid form endpoint provided - show helpful message
    window.location.href = `mailto:djt0717@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    )}`;
  };

  return (
    <>
      <SEO
        title="Contact Us | Styles Hair Salon and Day Spa"
        description="Contact Styles Hair Salon and Day Spa at 608 E 32nd St, Joplin, MO 64804. Call (417) 782-6167 or email us to book your appointment."
      />

      <PageHero
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
        image={heroSalon}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                Get In Touch
              </p>
              <h2 className="mb-8">Visit Styles Hair Salon Today</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">608 E 32nd St<br />Joplin, MO 64804</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Call</h3>
                    <a href="tel:4177826167" className="text-muted-foreground hover:text-secondary transition-colors">
                      (417) 782-6167
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Email</h3>
                    <a href="mailto:djt0717@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                      djt0717@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday–Friday: 8am–6pm</p>
                      <p>Saturday: 8am–3pm</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm italic">Appointments available upon request</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.95!2d-94.5133!3d36.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c86366e1b98c9f%3A0x1234567890abcdef!2s608+E+32nd+St%2C+Joplin%2C+MO+64804!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Styles Hair Salon location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-surface rounded-lg p-8 lg:p-10">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

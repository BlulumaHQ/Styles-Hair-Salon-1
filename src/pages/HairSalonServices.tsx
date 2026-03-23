import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import salonServicesImg from "@/assets/salon-services.jpg";

const services = [
  { name: "Haircuts", description: "Customized cuts tailored to your individual bone structure and facial features." },
  { name: "Hair Color", description: "From highlights and balayage to full color services, our experts deliver stunning results." },
  { name: "Hair Styling", description: "Updos, blowouts, and special occasion styles for every event." },
  { name: "Manicures", description: "Pamper your hands with our professional nail care and polish services." },
  { name: "Pedicures", description: "Relax and rejuvenate with our soothing pedicure treatments." },
  { name: "Waxing", description: "Professional waxing services for smooth, long-lasting results." },
];

const HairSalonServices = () => {
  return (
    <>
      <SEO
        title="Hair Salon Services | Styles Hair Salon and Day Spa"
        description="Full service hair salon in Joplin, MO offering haircuts, hair color, styling, manicures, pedicures, and waxing. Call (417) 782-6167 for an appointment."
      />

      <PageHero
        title="Salon Services"
        subtitle="Cutting Edge Hair Styles"
        image={salonServicesImg}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
              Our Services
            </p>
            <h2 className="mb-6">Customized to You</h2>
            <p className="text-foreground leading-relaxed">
              Each of our stylists here at Styles Hair Salon in Joplin has been specially trained to create hair styles customized to your individual bone structure and facial features. From hair color and hair cuts to styling, our stylists can create a look for all occasions that is "individually you."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-surface rounded-lg p-7 hover:shadow-md transition-shadow border border-border/50"
              >
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-foreground mb-6">Call us to book your appointment today!</p>
            <a href="tel:4177826167">
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                (417) 782-6167
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Looking for Spa Services?</h2>
          <p className="text-foreground leading-relaxed mb-8">
            Explore our full range of spa treatments including facials, massages, and more.
          </p>
          <Link to="/spa-services-massages-facials">
            <Button variant="cta" size="lg">See Our Spa Services</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HairSalonServices;

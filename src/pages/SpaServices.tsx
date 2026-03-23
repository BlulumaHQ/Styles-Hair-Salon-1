import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import spaTreatment from "@/assets/spa-treatment.jpg";

const spaServices = [
  { name: "Facials", description: "Customized facial treatments tailored for your specific skin needs. Rejuvenate and pamper your skin." },
  { name: "Massages", description: "Relax and restore with our professional massage services designed to melt away tension." },
  { name: "Body Treatments", description: "Treat your body to luxurious treatments that leave you feeling refreshed and renewed." },
  { name: "Skin Care", description: "Together, we can choose a customized treatment tailored for your specific needs." },
  { name: "Waxing", description: "Professional waxing services for smooth, long-lasting results in a comfortable setting." },
];

const SpaServices = () => {
  return (
    <>
      <SEO
        title="Spa Services – Massages & Facials | Styles Hair Salon and Day Spa"
        description="Day spa services in Joplin, MO including facials, massages, body treatments, and skincare. Treat yourself at Styles Hair Salon and Day Spa."
      />

      <PageHero
        title="Spa Services"
        subtitle="Wellness & Relaxation"
        image={spaTreatment}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
              Day Spa
            </p>
            <h2 className="mb-6">Pamper Your Skin, Body & Mind</h2>
            <p className="text-foreground leading-relaxed">
              You deserve the best for your skin care. Together, we can choose a customized treatment tailored for your specific needs. So treat yourself and pamper your skin, body and mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {spaServices.map((service) => (
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
            <p className="text-foreground mb-6">Ready to relax? Call us to schedule your spa appointment.</p>
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
          <h2 className="mb-6">Looking for Hair Services?</h2>
          <p className="text-foreground leading-relaxed mb-8">
            Explore our full range of salon services including haircuts, color, and styling.
          </p>
          <Link to="/hair-salon-services">
            <Button variant="cta" size="lg">See Our Salon Services</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SpaServices;

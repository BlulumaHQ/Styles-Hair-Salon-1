import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";

const JonRenau = () => {
  return (
    <>
      <SEO
        title="Jon Renau Wigs & Extensions | Styles Hair Salon and Day Spa"
        description="Styles Hair Salon in Joplin, MO is proud to offer Jon Renau wigs, hair extensions, additions, and hairpieces. 1,500+ styles available."
      />

      <PageHero
        title="Jon Renau"
        subtitle="Premium Wigs & Hair Extensions"
        image={heroSalon}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                Now Offering
              </p>
              <h2 className="mb-6">Jon Renau Collection</h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                Celebrated in the industry for their extensive color selection, Jon Renau's portfolio currently features 1,500+ different wig styles, hair extensions, hair additions, hairpieces, headwear, and hair care products, along with their exclusive SmartLace™, SmartLace™ Human Hair, Heat Defiant and toppers collections.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                Visit us at Styles Hair Salon to explore the full Jon Renau collection. Our experienced team can help you find the perfect style, fit, and color to match your needs.
              </p>
            </div>

            <div className="bg-surface rounded-lg p-10 text-center">
              <h3 className="text-xl font-semibold mb-4">Explore the Collection In-Store</h3>
              <p className="text-muted-foreground mb-6">
                Call us to schedule a private consultation with our Jon Renau specialists.
              </p>
              <a href="tel:4177826167">
                <Button variant="cta" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  (417) 782-6167
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JonRenau;

import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import heroSalon from "@/assets/hero-salon.jpg";

const brands = [
  {
    name: "Jon Renau",
    description: "Industry-leading wigs, extensions, and hair additions with 1,500+ styles.",
    link: "/jon-renau",
  },
  {
    name: "Milkshake",
    description: "Premium hair care products crafted with natural ingredients for healthy, vibrant hair.",
  },
  {
    name: "Pureology",
    description: "Sulfate-free hair care formulas designed for color-treated hair.",
  },
  {
    name: "Babe Hair Extensions",
    description: "Professional-grade hair extensions for seamless, natural-looking length and volume.",
  },
  {
    name: "Gelish",
    description: "Professional gel polish systems for long-lasting, salon-quality manicures.",
  },
];

const Brands = () => {
  return (
    <>
      <SEO
        title="Brands We Carry | Styles Hair Salon and Day Spa"
        description="Discover the premium brands we carry at Styles Hair Salon including Jon Renau, Milkshake, Pureology, Babe Hair Extensions, and Gelish."
      />

      <PageHero
        title="Our Brands"
        subtitle="Premium Products for Beautiful Results"
        image={heroSalon}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
              Quality Products
            </p>
            <h2 className="mb-6">Check Out The Brands We Carry</h2>
            <p className="text-foreground leading-relaxed">
              We are our very own unique boutique located right inside our shop. Come by our shop and take a look at the premium brands we trust and recommend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-surface rounded-lg p-7 hover:shadow-md transition-shadow border border-border/50 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {brand.description}
                </p>
                {brand.link && (
                  <Link
                    to={brand.link}
                    className="text-sm text-secondary font-medium mt-4 hover:underline"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-foreground mb-6">
              Visit our in-store boutique to see our full product selection.
            </p>
            <Link to="/contact-us">
              <Button variant="cta" size="lg">Visit Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;

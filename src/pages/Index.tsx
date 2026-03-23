import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Phone, Scissors, Sparkles, Clock, MapPin, Star } from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";
import salonServices from "@/assets/salon-services.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import hairModel from "@/assets/hair-model.jpg";

const Index = () => {
  return (
    <>
      <SEO
        title="Styles Hair Salon and Day Spa | Joplin, MO"
        description="Styles Hair Salon and Day Spa has been in Joplin, MO for over 20 years. Full service comfort, friendly stylists and a relaxing atmosphere. Call (417) 782-6167."
      />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroSalon}
          alt="Styles Hair Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-site relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] font-normal mb-4" style={{ color: "hsl(0,0%,80%)" }}>
            Joplin's Premier Hair Salon & Day Spa
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6" style={{ color: "hsl(0,0%,97%)" }}>
            Relax. Refresh.
            <br />
            Renew.
          </h1>
          <p className="text-lg font-light max-w-lg mb-8" style={{ color: "hsl(0,0%,82%)" }}>
            Your experience at Styles Hair Salon will leave you glowing inside and out.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:4177826167">
              <Button variant="hero" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Book an Appointment
              </Button>
            </a>
            <Link to="/hair-salon-services">
              <Button variant="heroOutline" size="lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                Over 20 Years of Excellence
              </p>
              <h2 className="mb-6">
                Come See What All The Buzz Is About
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Styles Hair Salon and Day Spa has been in Joplin, MO for over 20 years. Owner Dianna Thompson strives to ensure that Styles Hair Salon will change the way you think about hair salons with full service comfort, friendly stylists and a relaxing atmosphere.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                Styles Hair Salon is home to ten independent Hair Stylists, Nail Technicians, and an Aesthetician who will customize each service for their clients.
              </p>
              <Link to="/meet-our-hairstylists">
                <Button variant="cta" size="lg">
                  Meet Our Team
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={hairModel}
                alt="Beautiful hair styling"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
              What We Offer
            </p>
            <h2>Hair Salon & Spa Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Salon Card */}
            <Link to="/hair-salon-services" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={salonServices}
                alt="Hair salon services"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Scissors className="w-5 h-5" style={{ color: "hsl(0,0%,90%)" }} />
                  <p className="text-sm uppercase tracking-widest font-medium" style={{ color: "hsl(0,0%,90%)" }}>Hair Services</p>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "hsl(0,0%,97%)" }}>Cutting Edge Hair Styles</h3>
                <p className="text-sm font-light" style={{ color: "hsl(0,0%,80%)" }}>
                  From hair color and hair cuts to styling, our stylists create a look for all occasions that is "individually you."
                </p>
              </div>
            </Link>

            {/* Spa Card */}
            <Link to="/spa-services-massages-facials" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={heroSpa}
                alt="Spa services"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5" style={{ color: "hsl(0,0%,90%)" }} />
                  <p className="text-sm uppercase tracking-widest font-medium" style={{ color: "hsl(0,0%,90%)" }}>Spa Services</p>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "hsl(0,0%,97%)" }}>Wellness & Relaxation</h3>
                <p className="text-sm font-light" style={{ color: "hsl(0,0%,80%)" }}>
                  Treat yourself and pamper your skin, body and mind with customized treatments tailored for your specific needs.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-primary-dark">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Star, label: "#1 Hair Salon in Joplin" },
              { icon: Clock, label: "Over 20 Years in Business" },
              { icon: Scissors, label: "10+ Expert Stylists" },
              { icon: MapPin, label: "Proudly Serving Joplin" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <item.icon className="w-7 h-7" style={{ color: "hsl(152, 55%, 50%)" }} />
                <p className="text-sm font-medium text-on-dark">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="section-padding bg-surface-warm">
        <div className="container-site text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
            Special Offer
          </p>
          <h2 className="mb-6">10% Off Your First Service</h2>
          <p className="text-foreground leading-relaxed mb-8">
            We'll take 10% off your first salon or spa service when you sign up for our e-Newsletter! Only valid with Toni Weston and Sherri Stout.
          </p>
          <a href="tel:4177826167">
            <Button variant="cta" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Call For an Appointment Today
            </Button>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Visit Styles Hair Salon Today</h2>
          <p className="text-foreground leading-relaxed mb-3">
            608 E 32nd St, Joplin, MO 64804
          </p>
          <p className="text-foreground leading-relaxed mb-2">
            Monday–Friday: 8am–6pm &nbsp;|&nbsp; Saturday: 8am–3pm &nbsp;|&nbsp; Sunday: Closed
          </p>
          <p className="text-sm text-muted-foreground mb-8">Appointments available upon request</p>
          <a href="tel:4177826167">
            <Button variant="cta" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              (417) 782-6167
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;

import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import salonServices from "@/assets/salon-services.jpg";

const teamMembers = [
  {
    name: "Dianna Thompson",
    role: "Owner / Stylist",
    description: "With over 20 years leading Styles Hair Salon, Dianna ensures every client receives the highest level of care and service.",
  },
  {
    name: "Sherri Stout",
    role: "Stylist",
    description: "Sherri is dedicated to creating beautiful, customized styles for every client. Gift cards available through Sherri.",
  },
  {
    name: "Toni Weston",
    role: "Stylist",
    description: "Toni brings creativity and precision to every appointment. Gift cards available through Toni.",
  },
];

const MeetOurHairstylists = () => {
  return (
    <>
      <SEO
        title="Meet Our Hairstylists | Styles Hair Salon and Day Spa"
        description="Meet the talented team at Styles Hair Salon in Joplin, MO. Ten independent Hair Stylists, Nail Technicians, and an Aesthetician ready to serve you."
      />

      <PageHero
        title="Meet Our Stylists"
        subtitle="Styles Hair Salon Has A Great Team"
        image={salonServices}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3">
              Our Team
            </p>
            <h2 className="mb-6">Talented Professionals, Personalized Service</h2>
            <p className="text-foreground leading-relaxed">
              Styles Hair Salon is home to ten independent Hair Stylists, Nail Technicians, and an Aesthetician who will customize each service for their clients. Whether it be a haircut, style, manicure, pedicure, facial, or waxing — the design team will ensure that your experience leaves you glowing inside and out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-surface rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-surface-warm rounded-lg p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Styles Hair Salon is Hiring!</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Styles salon is currently seeking experienced and licensed cosmetologists to join our team. We are a full service hair salon that has been in business over 20 years. We are active in our community and enjoy serving the Joplin area.
            </p>
            <p className="text-foreground leading-relaxed">
              If you feel you would be a good fit for our team, please contact Dianna by calling{" "}
              <a href="tel:4177826167" className="text-secondary font-medium hover:underline">
                (417) 782-6167
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurHairstylists;

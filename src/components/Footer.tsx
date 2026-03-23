import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-on-dark">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-on-dark mb-4" style={{ color: "hsl(0, 0%, 95%)" }}>
              Styles
            </h3>
            <p className="text-sm text-on-dark-muted leading-relaxed">
              Joplin's premier hair salon and day spa. Over 20 years of exceptional service.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-on-dark mb-4" style={{ color: "hsl(0, 0%, 95%)" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Stylists", path: "/meet-our-hairstylists" },
                { label: "Hair Services", path: "/hair-salon-services" },
                { label: "Spa Services", path: "/spa-services-massages-facials" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-on-dark-muted hover:text-on-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: More */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-on-dark mb-4" style={{ color: "hsl(0, 0%, 95%)" }}>
              More
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Jon Renau", path: "/jon-renau" },
                { label: "Brands", path: "/brands" },
                { label: "Contact", path: "/contact-us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-on-dark-muted hover:text-on-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-on-dark mb-4" style={{ color: "hsl(0, 0%, 95%)" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-on-dark-muted">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                608 E 32nd St, Joplin, MO 64804
              </li>
              <li>
                <a
                  href="tel:4177826167"
                  className="flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (417) 782-6167
                </a>
              </li>
              <li>
                <a
                  href="mailto:djt0717@gmail.com"
                  className="flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  djt0717@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-on-dark-muted">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon–Fri: 8am–6pm</p>
                  <p>Sat: 8am–3pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5">
          <p className="text-xs text-on-dark-muted text-center">
            © {new Date().getFullYear()} Styles Hair Salon and Day Spa. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-dark transition-colors"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-dark transition-colors"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

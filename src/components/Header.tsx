import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Meet Our Stylists", path: "/meet-our-hairstylists" },
  { label: "Salon Services", path: "/hair-salon-services" },
  { label: "Spa Services", path: "/spa-services-massages-facials" },
  { label: "Jon Renau", path: "/jon-renau" },
  { label: "Brands", path: "/brands" },
  { label: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-site flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-xl font-bold tracking-tight text-primary" style={{ height: 75 }}>
            Styles
          </span>
          <span className="hidden sm:inline text-xs font-light text-muted-foreground ml-1 tracking-widest uppercase">
            Hair Salon & Day Spa
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-light tracking-wide transition-colors hover:text-secondary ${
                location.pathname === item.path
                  ? "text-secondary font-normal"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:4177826167" className="ml-3">
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-site py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-light tracking-wide rounded-md transition-colors hover:bg-muted ${
                  location.pathname === item.path
                    ? "text-secondary font-normal bg-accent"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:4177826167" className="mt-2 px-4">
              <Button variant="cta" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                (417) 782-6167
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

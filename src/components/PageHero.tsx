interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-site relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3" style={{ color: "hsl(0,0%,97%)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg font-light text-on-dark-muted max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;

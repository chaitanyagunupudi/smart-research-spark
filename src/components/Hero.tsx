interface HeroProps {
  title: string;
  subtitle?: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lab-dark/50 to-lab-darker" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-lab-cyan-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lab-cyan to-transparent" />
    </section>
  );
};

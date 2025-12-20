import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-humanitarian.jpg';
import logoImage from '@/assets/logo-bsf.png';

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barbero voluntario dando un corte de cabello con cuidado y dignidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="opacity-0 animate-fade-up -mt-16">
            <img 
              src={logoImage} 
              alt="Barberos Sin Fronteras Logo" 
              className="w-36 h-36 md:w-44 md:h-44 mx-auto object-contain brightness-75 contrast-110 -rotate-40"
            />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-display italic text-primary opacity-0 animate-fade-up delay-200">
            Elevando Dignidad. Restaurando Almas.
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up delay-300">
            "Un corte. Una mirada. Una vida que vuelve a levantarse."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 opacity-0 animate-fade-up delay-400">
            <Button variant="hero" size="xl" onClick={scrollToForm}>
              Unirme al Movimiento
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToForm}>
              Quiero Ser Patrocinador
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-500">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

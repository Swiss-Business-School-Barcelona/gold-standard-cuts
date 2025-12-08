import { AnimatedSection } from '@/components/AnimatedSection';
import transformationImage from '@/assets/transformation.jpg';

const locations = [
  'Refugios de personas sin hogar',
  'Campamentos de refugiados',
  'Zonas de crisis humanitaria',
  'Comunidades vulnerables',
  'Centros de rehabilitación',
  'Hospitales y asilos',
];

export function LocationsSection() {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
                Alcance
              </span>
              <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent mb-8" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-12">
                Dónde <span className="text-primary italic">Intervenimos</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <AnimatedSection key={location} delay={index * 80}>
                  <div className="flex items-center gap-3 p-4 border-l-2 border-primary/30 hover:border-primary bg-background/50 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-body">{location}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Image */}
          <AnimatedSection className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-transparent blur-2xl" />
              <img
                src={transformationImage}
                alt="Transformación después de un corte de cabello"
                className="relative w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-card to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Trophy, Film } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: 'Embajador Humanitario',
    description: 'Reconocimiento oficial como aliado del movimiento global.'
  },
  {
    icon: MapPin,
    title: 'Presencia en Misiones',
    description: 'Tu marca presente en intervenciones humanitarias reales.'
  },
  {
    icon: Trophy,
    title: 'Reconocimiento Internacional',
    description: 'Visibilidad en medios y redes sociales globales.'
  },
  {
    icon: Film,
    title: 'Reportes Audiovisuales',
    description: 'Documentación profesional del impacto de tu alianza.'
  },
];

export function SponsorBenefitsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-6 block">
            Para Patrocinadores
          </span>
          <div className="divider-gold mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Beneficios de <span className="text-primary">Unirse</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 100}>
              <div className="p-8 border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center">
          <Button variant="gold" size="xl">
            Solicitar Alianza Estratégica
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

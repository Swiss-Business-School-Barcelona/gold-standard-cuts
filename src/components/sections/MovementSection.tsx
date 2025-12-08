import { AnimatedSection } from '@/components/AnimatedSection';
import missionImage from '@/assets/mission-global.jpg';
import { Globe, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Voluntarios Certificados',
    description: 'Barberos profesionales entrenados en intervención humanitaria.'
  },
  {
    icon: Globe,
    title: 'Misiones Globales',
    description: 'Presencia en crisis humanitarias alrededor del mundo.'
  },
  {
    icon: Zap,
    title: 'Operación Ágil',
    description: 'Despliegue rápido donde la dignidad es urgente.'
  }
];

export function MovementSection() {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-2xl" />
              <img
                src={missionImage}
                alt="Misión humanitaria al atardecer"
                className="relative w-full aspect-video object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection>
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
                El Movimiento Internacional
              </span>
              <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent mb-8" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight">
                Una red global de <span className="text-primary italic">dignidad en acción</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 100}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-body">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

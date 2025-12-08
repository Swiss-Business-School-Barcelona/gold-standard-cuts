import { AnimatedSection } from '@/components/AnimatedSection';
import { Globe, Heart, Video, Award, History } from 'lucide-react';

const reasons = [
  { icon: Globe, text: 'Universal: Trasciende idiomas y culturas' },
  { icon: Heart, text: 'Emocional: Conecta a nivel humano profundo' },
  { icon: Video, text: 'Mediático: Historias que inspiran al mundo' },
  { icon: Award, text: 'Noble: Legado empresarial con propósito' },
  { icon: History, text: 'Histórico: Parte de un movimiento global' },
];

export function WhyCompaniesSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-6 block">
              Alianzas Estratégicas
            </span>
            <div className="divider-gold mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
              Por Qué las Empresas <span className="text-primary">Se Suman</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.text} delay={index * 80}>
                <div className="flex items-center gap-4 p-6 border border-border hover:border-primary/40 bg-background transition-all duration-300 group">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-body">{reason.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

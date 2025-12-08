import { AnimatedSection } from '@/components/AnimatedSection';
import { Scissors, Heart, Users, Eye } from 'lucide-react';

const solutions = [
  {
    icon: Scissors,
    title: 'Corte Profesional',
    description: 'Técnica de primer nivel aplicada con respeto y cuidado.'
  },
  {
    icon: Heart,
    title: 'Afeitado Digno',
    description: 'Un ritual de restauración personal y autoestima.'
  },
  {
    icon: Users,
    title: 'Escucha Humana',
    description: 'Conversación genuina que sana el alma.'
  },
  {
    icon: Eye,
    title: 'Presencia Emocional',
    description: 'Estar presente cuando más se necesita.'
  }
];

export function SolutionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-6 block">
            Nuestra Solución
          </span>
          <div className="divider-gold mb-8" />
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Cuatro Pilares de Transformación
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.title} delay={index * 100}>
              <div className="group p-8 border border-border hover:border-primary/50 bg-card transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_60%_58%_/_0.1)]">
                <div className="w-16 h-16 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

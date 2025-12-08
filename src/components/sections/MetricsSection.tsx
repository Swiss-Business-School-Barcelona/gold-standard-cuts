import { AnimatedSection } from '@/components/AnimatedSection';

const metrics = [
  { value: '12,500+', label: 'Personas Asistidas' },
  { value: '23', label: 'Países' },
  { value: '45,000+', label: 'Horas de Servicio' },
];

export function MetricsSection() {
  return (
    <section className="section-padding bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-6 block">
            Impacto Real
          </span>
          <div className="divider-gold" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 100}>
              <div className="text-center p-8 border border-border bg-card/50">
                <p className="text-5xl md:text-6xl lg:text-7xl font-display text-primary mb-4">
                  {metric.value}
                </p>
                <p className="text-lg text-muted-foreground uppercase tracking-wider font-body">
                  {metric.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} className="text-center">
          <p className="text-xl md:text-2xl font-display text-foreground italic max-w-3xl mx-auto">
            "Cada número representa una historia que volvió a levantarse."
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { AnimatedSection } from '@/components/AnimatedSection';

export function PurposeSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-6 block">
            Propósito Global
          </span>
          <div className="divider-gold mb-12" />
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed text-foreground">
            <span className="text-primary">Barberos Sin Fronteras</span> restaura identidad y 
            esperanza usando la barbería como herramienta humanitaria. Donde otros ven cabello, 
            nosotros vemos <span className="italic">dignidad esperando ser despertada</span>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

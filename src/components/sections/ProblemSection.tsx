import { AnimatedSection } from '@/components/AnimatedSection';

export function ProblemSection() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-6 block">
            El Problema
          </span>
          <div className="divider-gold mb-16" />
          
          <blockquote className="relative">
            <span className="absolute -top-8 -left-4 text-8xl text-primary/20 font-display">"</span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-foreground italic">
              La autoestima es la comida del alma.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-primary mt-4">
              Y millones no la reciben hace años.
            </p>
            <span className="absolute -bottom-12 -right-4 text-8xl text-primary/20 font-display rotate-180">"</span>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}

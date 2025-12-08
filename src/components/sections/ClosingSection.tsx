import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export function ClosingSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="divider-gold mb-12" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight mb-8">
            No invitamos a donar.
            <br />
            <span className="text-primary italic">Invitamos a dejar legado.</span>
          </h2>

          <p className="text-xl text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Cada decisión de unirse es una marca en la historia. Tu nombre junto al de quienes 
            decidieron que la dignidad no es negociable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Unirme al Movimiento
            </Button>
            <Button variant="gold" size="xl">
              Crear Alianza de Legado
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { AnimatedSection } from '@/components/AnimatedSection';

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h3 className="font-display text-2xl text-foreground mb-4">
            Barberos Sin Fronteras
          </h3>
          <p className="text-primary italic font-display mb-8">
            Elevando Dignidad. Restaurando Almas.
          </p>
          
          <div className="flex justify-center gap-8 mb-8 text-sm text-muted-foreground font-body uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors">Misión</a>
            <a href="#" className="hover:text-primary transition-colors">Voluntariado</a>
            <a href="#" className="hover:text-primary transition-colors">Patrocinadores</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="divider-gold mb-8" />

          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Barberos Sin Fronteras. Todos los derechos reservados.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
}

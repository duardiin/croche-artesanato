import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-2">
              Mãos que Criam
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Artesanato com alma desde 2009
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>pela nossa comunidade</span>
          </div>

          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Mãos que Criam. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

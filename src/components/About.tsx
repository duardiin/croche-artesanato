import { Heart, Users, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada peça carrega a dedicação e o carinho dos nossos artesãos.",
  },
  {
    icon: Users,
    title: "Comunidade Unida",
    description: " 5 artesãos locais trabalhando juntos há 8 anos.",
  },
  {
    icon: Leaf,
    title: "Materiais Naturais",
    description: "Utilizamos matérias-primas sustentáveis e da nossa região.",
  },
  {
    icon: Award,
    title: "Tradição e Qualidade",
    description: "Técnicas passadas de geração em geração com excelência.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-sage-light/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-medium mb-2 block">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Preservando a Arte de Criar com as Mãos
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              O grupo <strong className="text-foreground">Mãos que Criam</strong> nasceu em 2009 
              da união de artesãos apaixonados por manter vivas as tradições da nossa região. 
              Começamos com apenas 5 pessoas e hoje somos uma família de mais de 20 artistas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nosso objetivo vai além de criar peças bonitas — queremos contar histórias, 
              preservar memórias e fortalecer a cultura local. Cada produto que sai das 
              nossas mãos é uma obra de arte única.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

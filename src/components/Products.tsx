import { Card, CardContent } from "@/components/ui/card";
import ceramicaImg from "@/assets/product-ceramica.png";
import macrameImg from "@/assets/product-macrame.png";
import bijuteriaImg from "@/assets/product-bijuteria.png";
import cestariaImg from "@/assets/product-cestaria.png";

const products = [
  {
    id: 1,
    name: "Capivara Crochê",
    description: "Que tal aproveitar o clima de fim de ano e de formatura e presentear algum formando especial com uma capivara fofíssima?",
    image: ceramicaImg,
    price: "A partir de R$ 45",
  },
  {
    id: 2,
    name: "Bolsinha transversal Gigi 🌻",
    description: "Acessórios em crochê para combinar com elegância.",
    image: macrameImg,
    price: "A partir de R$ 60",
  },
  {
    id: 3,
    name: "Chopper Crochê",
    description: "Para os fãs de One Piece, esse Chopper lindinho.",
    image: bijuteriaImg,
    price: "A partir de R$ 35",
  },
  {
    id: 4,
    name: "Dona abelha e baby abelhinha",
    description: "Abelhinhas feitas para derreter corações. 💛",
    image: cestariaImg,
    price: "A partir de R$ 30",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-2 block">
            Nossos Trabalhos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Produtos Artesanais
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada peça é única, feita com dedicação e carinho pelos nossos
            artesãos. Descubra a beleza do feito à mão.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group bg-card border-border overflow-hidden hover:shadow-hover transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <span className="text-primary font-semibold">{product.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

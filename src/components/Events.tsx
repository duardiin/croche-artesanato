import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Feira de Artesanato de Dezembro",
    date: "15 de Dezembro, 2024",
    time: "09:00 - 18:00",
    location: "Praça Central",
    description: "Nossa tradicional feira de fim de ano com peças especiais para presentear.",
  },
  {
    id: 2,
    title: "Oficina do crochê",
    date: "20 de Dezembro, 2024",
    time: "14:00 - 17:00",
    location: "Ateliê Mãos que Criam",
    description: "Aprenda as técnicas básicas de crochê com nossos mestres.",
  },
  {
    id: 3,
    title: "Workshop de Crochê",
    date: "10 de Janeiro, 2025",
    time: "10:00 - 14:00",
    location: "Centro Cultural",
    description: "Crie seu animalzinho de crochê.",
  },
];

const Events = () => {
  return (
    <section id="eventos" className="py-20 md:py-28">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-2 block">
            Participe
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Próximos Eventos
          </h2>
          <p className="text-muted-foreground text-lg">
            Venha nos conhecer pessoalmente! Participamos de feiras e oferecemos
            oficinas para quem quer aprender.
          </p>
        </div>

        {/* Events List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="bg-card border-border overflow-hidden hover:shadow-card transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

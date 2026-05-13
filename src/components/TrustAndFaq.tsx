import { MessageCircle, Star, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Eu nunca passava do segundo mês. Na NextLevel, peguei o badge de 100 dias de streak porque vejo meu progresso claro todos os dias.",
    name: "Marcos V.",
    role: "Career Builder",
  },
  {
    quote:
      "Antes era uma briga. Hoje a Sofia quer fazer a Quest Diária para ganhar Stars. O vocabulário dela cresceu muito.",
    name: "Juliana C.",
    role: "Mãe de uma Little Adventurer",
  },
  {
    quote:
      "O vocabulário é atual e o modo PvP contra meus amigos deixa tudo competitivo sem parecer dever de casa.",
    name: "Lucas T.",
    role: "Level Hunter",
  },
];

const faqs = [
  {
    question: "É de graça mesmo?",
    answer:
      "Sim. Você pode começar no plano Free, com missões diárias e progresso constante. O NextLevel Plus libera IA de conversa ilimitada, mais missões e recursos avançados.",
  },
  {
    question: "Como o app sabe meu nível atual?",
    answer:
      "A Missão de Recrutamento é um desafio gamificado de cerca de 5 minutos. A IA usa suas respostas, tempo de hesitação e categorias fortes/fracas para montar seu rank inicial.",
  },
  {
    question: "Funciona para crianças e adultos na mesma família?",
    answer:
      "Sim. O plano Family permite perfis separados, então uma criança pode jogar no Kids Mode enquanto um adulto segue uma trilha de carreira ou viagem.",
  },
  {
    question: "Quanto tempo preciso praticar por dia?",
    answer:
      "Missões de 5 a 10 minutos já mantêm o streak vivo. Quem tem mais tempo pode acelerar XP com missões semanais, Speaking Arena e desafios épicos.",
  },
];

export default function TrustAndFaq() {
  return (
    <>
      <section className="section-space">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">Prova social</p>
              <h2 className="section-title">Quem deu Level Up na vida real.</h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4">
              <Users className="h-5 w-5 text-secondary" />
              <span className="font-mono text-sm font-bold text-white">50.000+ jornadas iniciadas</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="hover:-translate-y-1 hover:border-primary/50">
                <CardHeader>
                  <div className="flex gap-1 text-warning" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-base leading-7 text-white/86">“{item.quote}”</blockquote>
                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <p className="font-display font-bold text-white">{item.name}</p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-space border-y border-white/[0.08] bg-surface/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.76fr_1fr] lg:px-8">
          <div>
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-secondary/12 text-secondary">
              <MessageCircle className="h-7 w-7" />
            </div>
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Suas dúvidas, resolvidas.</h2>
            <p className="section-copy">
              Respostas diretas para pais, adolescentes e adultos testarem o app sem travar
              na decisão.
            </p>
          </div>
          <Card>
            <CardContent className="p-5 sm:p-8">
              <Accordion type="single" collapsible defaultValue="item-0">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

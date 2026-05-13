import { lazy, Suspense } from "react";
import {
  Apple,
  BellRing,
  Bot,
  BrainCircuit,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Crown,
  Flame,
  Gamepad2,
  GraduationCap,
  Headphones,
  Home,
  LockKeyhole,
  Map,
  Mic2,
  Play,
  Route,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
  UserRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TrustAndFaq = lazy(() => import("@/components/TrustAndFaq"));

const modes = [
  {
    value: "kids",
    label: "Kids",
    title: "The Little Adventurers",
    age: "6 a 12 anos",
    copy: "Missões curtas, stickers, pets virtuais e recompensas que fazem a criança pedir para praticar inglês.",
    stat: "93%",
    statLabel: "voltam no dia seguinte",
    icon: GraduationCap,
    accent: "from-warning to-[#FFE066]",
    preview: {
      badge: "Mapa Kids",
      reward: "Pet raro",
      headline: "Aventura da Floresta",
      description: "A criança escolhe quests visuais, ganha Stars e libera itens para o avatar.",
      missions: [
        ["Pet Park Quest", "5 palavras novas", 82, "Ativa"],
        ["Sticker Lab", "frases com cores", 64, "Próxima"],
        ["Story Island", "história guiada", 38, "Bloqueada"],
      ],
    },
  },
  {
    value: "teen",
    label: "Teen",
    title: "The Level Hunters",
    age: "13 a 17 anos",
    copy: "Inglês de séries, games, música e internet, com rankings, badges épicos e desafios PvP entre amigos.",
    stat: "4.8x",
    statLabel: "mais missões concluídas",
    icon: Swords,
    accent: "from-tertiary to-secondary",
    preview: {
      badge: "Arena Teen",
      reward: "Badge épico",
      headline: "Liga da Semana",
      description: "Rankings, clips de cultura pop e desafios PvP para aprender o inglês que eles usam.",
      missions: [
        ["PvP Vocabulary", "duelo com amigos", 91, "Ao vivo"],
        ["Series Clip", "listening rápido", 72, "Ativa"],
        ["Meme Grammar", "checkpoint leve", 45, "Próxima"],
      ],
    },
  },
  {
    value: "adult",
    label: "Adult",
    title: "The Career Builders",
    age: "18+ anos",
    copy: "Trilhas objetivas para carreira, viagem ou tecnologia, com IA ajustando dificuldade e revisão.",
    stat: "10min",
    statLabel: "para manter o streak",
    icon: ShieldCheck,
    accent: "from-primary to-success",
    preview: {
      badge: "Plano Adult",
      reward: "Sprint de carreira",
      headline: "Rota Business",
      description: "Sessões curtas com foco em entrevista, reunião, viagem e vocabulário profissional.",
      missions: [
        ["Interview Sprint", "respostas reais", 76, "Ativa"],
        ["Tech Standup", "fala profissional", 58, "Próxima"],
        ["Business Email", "escrita guiada", 34, "Revisão"],
      ],
    },
  },
];

const pillars = [
  {
    icon: Gamepad2,
    title: "Gamificação real",
    copy: "XP, streak, loot, ranks e missões não são decoração. Eles estruturam o hábito e dão recompensa imediata a cada avanço.",
  },
  {
    icon: BrainCircuit,
    title: "IA adaptativa",
    copy: "A Missão de Recrutamento calibra seu rank, identifica hesitação e ajusta revisão, ritmo e dificuldade em tempo real.",
  },
  {
    icon: Bot,
    title: "Speaking Arena 24/7",
    copy: "Treine conversa, pronúncia e situações reais com feedback instantâneo antes de usar o inglês fora do app.",
  },
];

const stats = [
  ["50k+", "jogadores em beta"],
  ["5-10min", "por missão diária"],
  ["4.9/5", "avaliação média"],
];

function StoreButtons() {
  return (
    <div className="flex w-full max-w-[calc(100vw-2.5rem)] flex-col gap-3 sm:w-auto sm:flex-row">
      <Button asChild size="lg" className="w-full min-w-48 sm:w-auto">
        <a href="#download" aria-label="Baixar na App Store">
          <Apple className="h-5 w-5" />
          App Store
        </a>
      </Button>
      <Button asChild size="lg" variant="secondary" className="w-full min-w-48 sm:w-auto">
        <a href="#download" aria-label="Baixar no Google Play">
          <Play className="h-5 w-5" />
          Google Play
        </a>
      </Button>
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="NextLevel English">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_28px_rgba(0,102,255,0.35)]">
        <ChevronRight className="-rotate-90 text-white" aria-hidden="true" />
      </span>
      <span className="font-display text-base font-extrabold text-white">
        NextLevel <span className="text-secondary">English</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Principal">
        <Logo />
        <div className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
          <a className="hover:text-white" href="#modos">
            Modos
          </a>
          <a className="hover:text-white" href="#como-funciona">
            Como funciona
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </div>
        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#download">Baixar</a>
        </Button>
      </nav>
    </header>
  );
}

function HeroMockup() {
  return (
    <div className="hero-device-wrap" aria-label="Prévia do app NextLevel English">
      <div className="float-card float-card-left">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/15 text-success">
          <Zap className="h-5 w-5" />
        </div>
        <div>
          <p className="font-mono text-lg font-bold text-white">+240 XP</p>
          <p className="text-xs font-semibold text-muted">Quest diária concluída</p>
        </div>
      </div>
      <div className="float-card float-card-right">
        <Crown className="h-5 w-5 text-warning" />
        <div>
          <p className="font-display text-sm font-bold text-white">Rank Explorador</p>
          <p className="text-xs font-semibold text-muted">próximo: Guerreiro</p>
        </div>
      </div>

      <div className="phone-shell">
        <div className="phone-screen">
          <div className="notification-strip">
            <BellRing className="h-4 w-4" />
            <span>Reajuste de dificuldade aplicado</span>
          </div>

          <div className="journey-status-card">
            <div className="app-topbar">
              <div>
                <p className="text-xs font-bold uppercase text-secondary">Jornada ativa</p>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-white">Dungeon 08</h2>
              </div>
              <div className="streak-pill" aria-label="14 dias de streak">
                <Flame className="h-4 w-4" />
                <p className="font-mono text-sm font-bold text-warning">14</p>
              </div>
            </div>

            <div className="rank-progress">
              <div>
                <p className="text-sm font-bold text-white">Rank Explorador</p>
                <p className="text-xs font-semibold text-muted">420 XP para Guerreiro</p>
              </div>
              <Crown className="h-5 w-5 text-warning" />
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-raised">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-secondary to-primary" />
            </div>
          </div>

          <div className="adaptive-card">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Missão reajustada</p>
              <p className="text-xs font-semibold text-muted">Dificuldade adaptada: since vs. for</p>
            </div>
          </div>

          <div className="mission-route">
            {[
              ["Speaking Arena", "treino de entrevista", Mic2, true],
              ["Vocabulary Quest", "12 palavras úteis", BookOpen, true],
              ["Boss Checkpoint", "desbloqueia às 19h", LockKeyhole, false],
            ].map(([title, detail, Icon, active]) => {
              const MissionIcon = Icon as typeof Mic2;
              return (
                <div key={title as string} className={active ? "mission-node active" : "mission-node"}>
                  <span className="mission-dot">
                    <MissionIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p>{title as string}</p>
                    <span>{detail as string}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skill-grid">
            {["Vocabulário", "Gramática", "Pronúncia"].map((item, index) => (
              <div key={item} className="skill-tile">
                <p>{[86, 74, 92][index]}%</p>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="app-bottom-nav" aria-hidden="true">
            {[Home, Route, Headphones, UserRound].map((Icon, index) => (
              <span key={index} className={index === 1 ? "active" : ""}>
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section overflow-hidden pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-8 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:pb-16 lg:pt-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase text-secondary">
            <Sparkles className="h-4 w-4" />
            Inglês em modo jogo
          </div>
          <h1 className="hero-title mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-6xl xl:text-7xl">
            Aprender inglês virou o jogo que você quer vencer.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A NextLevel English transforma estudo em missão: IA adaptativa cria sua jornada,
            gamificação real mantém o streak vivo e cada acerto vira progresso visível.
          </p>
          <div className="mt-7">
            <StoreButtons />
          </div>
          <p className="mt-4 text-sm font-semibold text-muted">
            Comece grátis. Nenhuma missão inicial exige cartão de crédito.
          </p>
          <dl className="hero-stats mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
            {stats.map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3 sm:p-4">
                <dt className="font-mono text-lg font-bold text-white sm:text-xl">{value}</dt>
                <dd className="mt-1 text-[11px] font-semibold leading-4 text-muted sm:text-xs">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="method-section border-y border-white/[0.08] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.72fr_1fr] lg:px-8">
        <div>
          <p className="section-kicker">Método NextLevel</p>
          <h2 className="section-title">O inglês entra na rotina porque cada avanço recompensa.</h2>
        </div>
        <div>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Em vez de empilhar conteúdo, a NextLevel combina missões rápidas, IA adaptativa
            e progressão visível. O usuário sabe o que fazer agora, por que aquilo importa
            e qual recompensa vem depois.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Desafio certo", "A dificuldade muda conforme acertos, hesitação e retenção."],
              ["Recompensa imediata", "XP, streak e drops aparecem a cada missão concluída."],
              ["Evolução visível", "Ranks e rotas mostram o próximo passo sem fricção."],
            ].map(([title, copy]) => (
              <div key={title} className="method-card">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeJourneyPreview({ mode }: { mode: (typeof modes)[number] }) {
  return (
    <div className="mode-preview">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-white/[0.07] px-3 py-2 text-xs font-bold uppercase text-secondary">
          {mode.preview.badge}
        </span>
        <span className="font-mono text-xs font-bold text-warning sm:text-sm">{mode.preview.reward}</span>
      </div>
      <div className="mt-7 rounded-3xl border border-white/[0.08] bg-background/55 p-5">
        <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${mode.accent}`}>
          <Map className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-display text-2xl font-extrabold text-white">{mode.preview.headline}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{mode.preview.description}</p>
      </div>
      <div className="journey-map">
        {mode.preview.missions.map(([mission, detail, progress, status]) => (
          <div key={mission as string} className="journey-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display font-bold text-white">{mission as string}</p>
                <span className="text-xs font-semibold text-muted">{detail as string}</span>
              </div>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase text-secondary">
                {status as string}
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-raised">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModesSection() {
  return (
    <section id="modos" className="section-space">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Modos por perfil</p>
          <h2 className="section-title">Um app. Três experiências completamente diferentes.</h2>
          <p className="section-copy">
            A IA adapta linguagem, visual, missões e dificuldade para crianças, adolescentes
            e adultos avançarem sem sentir que estão em uma sala de aula tradicional.
          </p>
        </div>

        <Tabs defaultValue="kids" className="mt-10">
          <TabsList className="grid w-full grid-cols-3 sm:w-auto">
            {modes.map((mode) => (
              <TabsTrigger key={mode.value} value={mode.value}>
                {mode.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <TabsContent key={mode.value} value={mode.value}>
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <Card className="hover:border-primary/55 hover:shadow-[0_0_32px_rgba(0,102,255,0.18)]">
                    <CardHeader>
                      <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${mode.accent}`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-3xl">{mode.title}</CardTitle>
                      <CardDescription>{mode.age}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-8 text-muted">{mode.copy}</p>
                      <div className="mt-8 flex items-end gap-3">
                        <span className="font-mono text-5xl font-bold text-white">{mode.stat}</span>
                        <span className="pb-2 text-sm font-semibold text-muted">{mode.statLabel}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <ModeJourneyPreview mode={mode} />
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section id="como-funciona" className="section-space border-y border-white/[0.08] bg-surface/35">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="section-kicker">Como funciona</p>
            <h2 className="section-title">Do Rank Iniciante ao Rank Nativo.</h2>
            <p className="section-copy">
              Duas forças trabalham juntas: mecânicas de jogo para manter consistência e IA
              para não deixar sua jornada ficar fácil ou difícil demais.
            </p>
          </div>
          <div className="grid gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} className="group hover:-translate-y-1 hover:border-secondary/40">
                  <CardHeader className="flex-row items-start gap-5 space-y-0">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-secondary group-hover:bg-secondary/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{pillar.title}</CardTitle>
                      <CardDescription className="mt-2 text-base">{pillar.copy}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadCta() {
  return (
    <section id="download" className="section-space">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-success/12 px-4 py-2 text-sm font-bold text-success">
          <Trophy className="h-4 w-4" />
          Sua primeira missão leva menos de 5 minutos
        </div>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          O próximo nível do seu inglês está a um toque de distância.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
          Baixe grátis, faça a Missão de Recrutamento e veja sua trilha personalizada
          antes mesmo de fechar o app pela primeira vez.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ModesSection />
        <PillarsSection />
        <Suspense fallback={<div className="mx-auto h-48 max-w-7xl px-5" aria-hidden="true" />}>
          <TrustAndFaq />
        </Suspense>
        <DownloadCta />
      </main>
      <footer className="border-t border-white/[0.08] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between lg:px-8">
          <Logo />
          <div className="flex flex-wrap gap-5">
            <a href="#modos" className="hover:text-white">
              Kids Mode
            </a>
            <a href="#modos" className="hover:text-white">
              Teen Mode
            </a>
            <a href="#modos" className="hover:text-white">
              Adult Mode
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>
          <p>© 2026 NextLevel English.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

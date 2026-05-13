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
  ArrowRight,
  Star,
  Target,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TrustAndFaq = lazy(() => import("@/components/TrustAndFaq"));

// ─── DATA ─────────────────────────────────────────────────────────────────────

const modes = [
  {
    value: "kids",
    label: "Kids",
    title: "The Little Adventurers",
    age: "6 a 12 anos",
    // ANTES: "Missões curtas, stickers, pets virtuais e recompensas que fazem a criança pedir para praticar inglês."
    // DEPOIS: Fala primeiro com o pai (quem paga), depois com a criança (quem usa)
    copy: "A criança quer jogar. O pai vê inglês de verdade sendo aprendido. Missões curtas, pets virtuais e drops de recompensa transformam estudo em pedido — não em briga.",
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
    // ANTES: genérico demais, sem gancho cultural
    // DEPOIS: inicia com a dor ("inglês da escola"), vira desejo cultural
    copy: "Inglês da escola? Chato e inútil. Inglês de séries, games, música e memes? É o que a gente ensina. Rankings, badges épicos e duelos PvP com amigos — porque aprender junto é mais vício.",
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
    // ANTES: começa com features (IA, trilha)
    // DEPOIS: começa com a dor (tempo, tentativas falhas), termina com solução objetiva
    copy: "Você já tentou antes. Desistiu na semana três. Desta vez é diferente: sem enrolação, sem apostila. A IA monta sua trilha em 5 minutos, você aparece por 10 minutos por dia — e o rank prova que você avançou.",
    stat: "10min",
    statLabel: "por dia para manter o streak",
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
    title: "Gamificação que cria hábito",
    // ANTES: descritivo, genérico
    // DEPOIS: emoção + dado + consequência
    copy: "XP, streak, loot e ranks não são enfeite — são a estrutura que faz o cérebro querer voltar. Cada missão de 5–10 minutos entrega uma recompensa imediata. O hábito se forma antes mesmo de você perceber.",
  },
  {
    icon: BrainCircuit,
    title: "IA que aprende com você",
    // ANTES: muito técnico
    // DEPOIS: mais humano, foco em consequência prática
    copy: "A Missão de Recrutamento descobre seu nível real em 5 minutos. A partir daí, a IA monitora hesitação, ritmo e retenção — e ajusta dificuldade, revisão e próxima missão em tempo real. Nunca fácil demais. Nunca impossível.",
  },
  {
    icon: Bot,
    title: "Speaking Arena 24/7",
    // ANTES: não menciona o diferencial emocional (sem julgamento)
    // DEPOIS: destaca o "sem vergonha" — maior barreira do brasileiro com inglês
    copy: "Treinar conversa com humano dá vergonha. Com a IA não — pode errar à vontade, repetir sem julgamento e simular entrevistas, viagens e reuniões antes de viver a situação de verdade. Feedback instantâneo, sem constrangimento.",
  },
];

const stats = [
  // ANTES: "50k+ jogadores em beta" — "beta" gera desconfiança
  // DEPOIS: lista de espera soa como prova social positiva
  ["50k+", "na lista de espera"],
  ["5–10min", "por missão diária"],
  ["4.9 ★", "avaliação média"],
];

// Onboarding steps — nova seção para mostrar jornada do usuário
const onboardingSteps = [
  {
    step: "01",
    icon: Target,
    title: "Escolha seu modo",
    copy: "Kids, Teen ou Adult. Cada modo tem visual, linguagem e missões completamente diferentes — nenhum parece uma sala de aula.",
    color: "text-secondary",
    glow: "bg-secondary/10",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Missão de Recrutamento",
    copy: "5 minutos. Um teste gamificado que descobre seu nível real em vocabulário, gramática, listening e pronúncia.",
    color: "text-warning",
    glow: "bg-warning/10",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Sua jornada está pronta",
    copy: "A IA monta sua trilha personalizada na hora. Rank inicial, próximas missões e metas de streak — tudo calibrado para o seu ritmo.",
    color: "text-success",
    glow: "bg-success/10",
  },
  {
    step: "04",
    icon: Crown,
    title: "Jogue e evolua",
    copy: "Primeira missão desbloqueada. XP na conta. Streak começando. Você já está avançando antes de fechar o app pela primeira vez.",
    color: "text-tertiary",
    glow: "bg-tertiary/10",
  },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

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

// ─── HEADER ───────────────────────────────────────────────────────────────────

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
          {/* NOVO: link "Para Pais" porque pais são decisores no Kids/Teen */}
          <a className="hover:text-white" href="#modos">
            Para Pais
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </div>
        {/* MELHORIA: CTA mais específico e com urgência */}
        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#download">Entrar na fila grátis</a>
        </Button>
      </nav>
    </header>
  );
}

// ─── HERO MOCKUP (não alterado — CSS customizado) ─────────────────────────────

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

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="hero-section overflow-hidden pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-8 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:pb-16 lg:pt-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase text-secondary">
            <Sparkles className="h-4 w-4" />
            {/* MELHORIA: menção à lista de espera cria FOMO */}
            50k+ na fila — Inglês em modo jogo
          </div>

          {/* ANTES: "Aprender inglês virou o jogo que você quer vencer."
              DEPOIS: direto da brand story, mais memorizável e confrontador */}
          <h1 className="hero-title mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-6xl xl:text-7xl">
            O jogo cujo objetivo é te tornar fluente.
          </h1>

          {/* ANTES: longa lista de features sem fio emocional
              DEPOIS: curto, benefício claro, tom de desafio */}
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            IA adaptativa monta sua jornada. Gamificação real mantém você na missão. Cada acerto vira XP, rank e
            progresso que você consegue ver todos os dias.
          </p>

          <div className="mt-7">
            <StoreButtons />
          </div>

          {/* MELHORIA: mais conciso e sem dupla negação */}
          <p className="mt-4 text-sm font-semibold text-muted">Grátis para começar. Sem cartão de crédito.</p>

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

// ─── PROBLEM / METHOD ─────────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="method-section border-y border-white/[0.08] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.72fr_1fr] lg:px-8">
        <div>
          <p className="section-kicker">Por que funciona</p>
          {/* ANTES: "O inglês entra na rotina porque cada avanço recompensa."
              DEPOIS: mais confrontador, cita o problema real antes da solução */}
          <h2 className="section-title">Outros apps te distraem. A NextLevel te vicia em aprender.</h2>
        </div>
        <div>
          {/* ANTES: muito descritivo, corpo de texto genérico
              DEPOIS: começa com o problema do usuário, termina com a diferença da plataforma */}
          <p className="max-w-3xl text-lg leading-8 text-muted">
            O problema nunca foi o inglês. Foi a falta de recompensa imediata, de progresso visível e de um desafio
            calibrado para o seu nível. A NextLevel resolve as três coisas ao mesmo tempo — e faz o cérebro querer
            voltar todos os dias.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              // ANTES: genérico ("Desafio certo", "Recompensa imediata", "Evolução visível")
              // DEPOIS: usa vocabulário da marca + fala de consequência real
              [
                "Checkpoint na medida",
                "A dificuldade sobe com seus acertos e cai quando você hesita. Nunca fácil demais, nunca impossível.",
              ],
              [
                "Loot a cada missão",
                "XP, drops e streaks aparecem imediatamente após cada Quest. O cérebro vê progresso — e pede mais.",
              ],
              [
                "Rank que prova o avanço",
                "De Iniciante a Nativo, cada rank é visível no perfil público. Você tem prova concreta de que evoluiu.",
              ],
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

// ─── ONBOARDING FLOW (seção nova) ────────────────────────────────────────────

function OnboardingFlow() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Do zero ao primeiro XP</p>
          {/* Nova seção que mostra os 4 passos do onboarding — reduz fricção do usuário */}
          <h2 className="section-title">Sua jornada começa em menos de 5 minutos.</h2>
          <p className="section-copy">
            Sem cadastro longo, sem formulário chato, sem aula inaugural de 30 minutos. Você escolhe o modo, faz a
            Missão de Recrutamento e já tem sua trilha pronta.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Linha conectora (desktop) */}
          <div
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {onboardingSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.step}
                  className="relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16]"
                >
                  {/* Número do step */}
                  <span className="font-mono text-xs font-bold tracking-widest text-muted">PASSO {step.step}</span>
                  {/* Ícone */}
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${step.glow}`}>
                    <Icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.copy}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#download"
            className="group inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-white"
          >
            Começar minha jornada agora
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── MODES ────────────────────────────────────────────────────────────────────

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
          {/* MANTIDO — headline já é forte e memorizável */}
          <h2 className="section-title">Um app. Três experiências completamente diferentes.</h2>
          {/* MELHORIA: antes usava "sala de aula tradicional" duas vezes no arquivo */}
          <p className="section-copy">
            A IA adapta linguagem, visual, missões e dificuldade para cada perfil. Mesma plataforma, jornadas que não
            têm nada em comum — a não ser o resultado: inglês que fica.
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

// ─── PILLARS ──────────────────────────────────────────────────────────────────

function PillarsSection() {
  return (
    <section id="como-funciona" className="section-space border-y border-white/[0.08] bg-surface/35">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="section-kicker">Como funciona</p>
            {/* MANTIDO — forte e usa vocabulário de rank da marca */}
            <h2 className="section-title">Do Rank Iniciante ao Rank Nativo.</h2>
            {/* MELHORIA: mais concreto, menciona as duas forças em ação */}
            <p className="section-copy">
              Mecânicas de jogo constroem o hábito. IA adaptativa garante que o desafio nunca para. Juntas, elas fazem o
              progresso acontecer — visível, todos os dias.
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

// ─── DOWNLOAD CTA ─────────────────────────────────────────────────────────────

function DownloadCta() {
  return (
    <section id="download" className="section-space">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        {/* MELHORIA: badge com avaliação + estrelas para prova social */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-warning/12 px-4 py-2 text-sm font-bold text-warning">
          <div className="flex gap-0.5" aria-label="Avaliação 4.9 de 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          4.9 de 5 — 50k+ na lista de espera
        </div>

        {/* ANTES: "O próximo nível do seu inglês está a um toque de distância." — fraco, genérico
            DEPOIS: usa o posicionamento central da marca + urgência de FOMO */}
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Seu inglês não vai melhorar sozinho.
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            A NextLevel faz isso pelo seu jeito.
          </span>
        </h2>

        {/* MELHORIA: menciona a Missão de Recrutamento (vocabulário de marca) + urgência de 5 min */}
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
          Baixe grátis, complete a Missão de Recrutamento em 5 minutos e veja sua trilha personalizada antes mesmo de
          fechar o app pela primeira vez. Sem cartão. Sem compromisso. Só XP.
        </p>

        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>

        {/* NOVO: mini prova social abaixo do CTA */}
        <p className="mt-6 text-xs font-semibold text-muted">
          Junte-se a <span className="font-bold text-white">50.000+ pessoas</span> que já estão na fila de espera do
          lançamento.
        </p>
      </div>
    </section>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        {/* NOVA SEÇÃO: OnboardingFlow — reduz fricção mostrando que é rápido começar */}
        <OnboardingFlow />
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

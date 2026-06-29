import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, CheckCircle2, Flame, Goal, Sparkles, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Código Fénix | Mentoría 1 a 1 con Matías Osses",
  description:
    "Mentoría de transformación personal y marca personal para ganar confianza, claridad y dirección con un plan real de acción.",
}

const paraQuienItems = [
  "Ves tu potencial pero procrastinás",
  "Tenés miedo a exponerte",
  "Dudás de vos mismo",
  "Te comparás constantemente",
  "Tus pensamientos te dominan",
  "No tenés diferenciación como marca",
  "No tenés un sistema de ventas en Instagram",
  "No sabés crear contenido",
] as const

const resultadosItems = [
  "Confianza en vos",
  "Claridad",
  "Seguridad para exponerte",
  "Diferenciación",
  "Dirección",
  "Construcción de embudo de ventas en Instagram",
] as const

const comoFuncionaItems = [
  "Mentoría personalizada 1 a 1",
  "Acompañamiento semanal",
  "Duración: 1 o 2 meses",
  "Enfoque interno + externo",
  "Plan semanal con objetivos",
  "PDFs personalizados",
  "Métricas y seguimiento de resultados",
] as const

const planes = [
  {
    nombre: "Plan Base",
    duracion: "1 mes",
    sesiones: "4 sesiones personalizadas",
    precio: "$200 USD",
    destacado: false,
  },
  {
    nombre: "Plan Pro",
    duracion: "2 meses",
    sesiones: "8 sesiones personalizadas",
    precio: "$350 USD",
    destacado: true,
  },
] as const

export default function CodigoFenixPrivadoPage() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ff6a00]/30 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff2e2e]/20 blur-[120px]" />
      </div>

      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
        <Link
          href="/contacto?origen=codigo-fenix"
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff2e2e] via-[#ff6a00] to-[#ff9f1a] px-5 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(255,106,0,0.45)] transition hover:scale-[1.01]"
        >
          Quiero empezar <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/codigo felix.jpeg"
          alt="Fénix en fuego"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.30),transparent_55%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 text-center md:px-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            <Flame className="h-4 w-4 text-[#ff6a00]" />
            Mentoría de transformación personal
          </p>
          <h1 className="text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl">
            Código <span className="text-[#ff6a00]">Fénix</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-white/90 md:text-2xl">
            Un proceso de transformación interna donde dejás atrás tus límites, construís confianza real y
            aprendés a mostrarte al mundo con claridad y propósito.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto?origen=codigo-fenix"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff2e2e] via-[#ff6a00] to-[#ff9f1a] px-8 py-4 text-base font-semibold shadow-[0_0_40px_rgba(255,106,0,0.55)] transition hover:scale-105"
            >
              Quiero empezar <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#problema"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/35 px-8 py-4 text-base font-medium text-white/90 backdrop-blur transition hover:border-[#ff6a00]/70 hover:text-white"
            >
              Ver cómo funciona
            </Link>
          </div>
          <a
            href="#problema"
            className="mx-auto mt-14 flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            Bajá para empezar
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      <section id="problema" className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
        <h2 className="text-balance text-3xl font-extrabold leading-tight md:text-5xl">
          Si hoy no te mostrás, no es porque no sabés...{" "}
          <span className="bg-gradient-to-r from-[#ff2e2e] to-[#ff9f1a] bg-clip-text text-transparent">
            es porque no confiás en vos.
          </span>
        </h2>
        <p className="mt-8 text-pretty text-lg text-white/85 md:text-xl">
          Código Fénix está diseñado para que rompas ese bloqueo, desarrolles seguridad real y empieces a
          exponerte con claridad, propósito y estrategia.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <h3 className="text-center text-3xl font-extrabold md:text-4xl">Esto es para vos si...</h3>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {paraQuienItems.map((item) => (
            <article
              key={item}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 transition hover:-translate-y-1 hover:border-[#ff6a00]/60 hover:shadow-[0_0_28px_rgba(255,106,0,0.22)]"
            >
              <p className="flex items-start gap-3 text-base text-white/92 md:text-lg">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#ff6a00]" />
                <span>{item}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <h3 className="text-center text-3xl font-extrabold md:text-4xl">Lo que vas a lograr</h3>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resultadosItems.map((item, index) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#ff2e2e]/60 hover:shadow-[0_0_25px_rgba(255,46,46,0.24)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6a00]/20 text-[#ff9f1a]">
                {index % 3 === 0 ? <Target className="h-5 w-5" /> : index % 3 === 1 ? <Sparkles className="h-5 w-5" /> : <Goal className="h-5 w-5" />}
              </div>
              <p className="text-lg font-semibold text-white">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h3 className="text-3xl font-extrabold md:text-4xl">Cómo funciona</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {comoFuncionaItems.map((item) => (
              <p key={item} className="flex items-start gap-3 text-base text-white/90 md:text-lg">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff6a00]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <h3 className="text-center text-3xl font-extrabold md:text-4xl">Planes y precios</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {planes.map((plan) => (
            <article
              key={plan.nombre}
              className={`rounded-3xl border p-7 md:p-8 ${
                plan.destacado
                  ? "border-[#ff6a00]/60 bg-gradient-to-b from-[#ff6a00]/15 to-transparent shadow-[0_0_35px_rgba(255,106,0,0.28)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.destacado ? (
                <p className="mb-4 inline-flex rounded-full border border-[#ff9f1a]/50 bg-[#ff6a00]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#ffd59f]">
                  Más elegido
                </p>
              ) : null}
              <h4 className="text-2xl font-bold">{plan.nombre}</h4>
              <p className="mt-4 text-white/80">Duración: {plan.duracion}</p>
              <p className="mt-1 text-white/80">{plan.sesiones}</p>
              <p className="mt-6 text-4xl font-black text-[#ff9f1a]">{plan.precio}</p>
              <Link
                href="/contacto?origen=codigo-fenix-plan"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff2e2e] via-[#ff6a00] to-[#ff9f1a] px-6 py-3.5 text-base font-semibold shadow-[0_0_30px_rgba(255,106,0,0.5)] transition hover:scale-[1.01]"
              >
                Aplicar ahora <ArrowRight className="h-5 w-5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10">
          <Image src="/matiasosses1.jpeg" alt="Matías Osses retrato" fill className="object-cover" />
          <div className="absolute -bottom-4 -right-4 hidden h-40 w-32 overflow-hidden rounded-2xl border border-[#ff6a00]/45 shadow-[0_0_20px_rgba(255,106,0,0.35)] md:block">
            <Image src="/matiasosses2.jpeg" alt="Matías Osses en sesión" fill className="object-cover" />
          </div>
        </div>
        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9f1a]">Sobre el mentor</p>
          <h3 className="mt-4 text-3xl font-extrabold">Matías Osses</h3>
          <p className="mt-2 text-lg text-white/80">Mentor de desarrollo personal y marca personal</p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-white/88 md:text-lg">
            Matías ayuda a personas a desbloquear su potencial, construir confianza real y posicionarse con
            claridad en el mundo digital.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <p className="text-2xl font-black text-[#ff6a00]">1:1</p>
              <p className="text-sm text-white/75">Mentoría enfocada</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <p className="text-2xl font-black text-[#ff6a00]">Acción</p>
              <p className="text-sm text-white/75">Resultados medibles</p>
            </div>
          </div>
        </article>
      </section>

      <section id="aplicar" className="relative mx-auto max-w-6xl px-6 pb-24 pt-14 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#ff6a00]/40 bg-black p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.32),transparent_60%)]" />
          <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-[#ff2e2e]/25 blur-[90px]" />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9f1a]">Código Fénix</p>
            <h3 className="mt-4 text-balance text-3xl font-black md:text-5xl">
              Dejá de esperar. <span className="text-[#ff6a00]">Empezá a mostrarte.</span>
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-white/85 md:text-lg">
              Si sentís que ya no podés seguir postergándote, este es el momento. Entrá al proceso y empezá tu
              renacimiento personal con dirección real.
            </p>
            <Link
              href="/contacto?origen=codigo-fenix-final"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff2e2e] via-[#ff6a00] to-[#ff9f1a] px-8 py-4 text-base font-semibold shadow-[0_0_40px_rgba(255,106,0,0.55)] transition hover:scale-105"
            >
              Quiero entrar a Código Fénix <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

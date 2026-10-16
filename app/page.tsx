import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { ADDRESS, MAPS_EMBED, MAPS_URL } from "@/lib/config";

const specialties = [
  ["Acompanhamento do Crescimento", "Avaliação minuciosa do desenvolvimento físico e de cada etapa da infância, garantindo um olhar individualizado sobre a evolução da criança."],
  ["Protocolo Alimentar", "Análise da rotina alimentar da criança, tirando todas as dúvidas dos pais para construir hábitos saudáveis e adequados a cada idade."],
  ["Avaliação da Rotina de Sono", "Olhar atento para a qualidade do sono infantil, compreendendo o ritmo da criança e orientando a família para noites mais tranquilas."],
  ["Acompanhamento do Comportamento", "Escuta acolhedora para compreender as fases do comportamento infantil, ajudando os pais a lidarem com os desafios de cada etapa com clareza e confiança."],
  ["Revisão e Orientação de Vacinas", "Checagem completa do calendário vacinal para esclarecer dúvidas e manter a imunização do seu filho sempre atualizada."],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* HERO */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#174B4B] text-[#F0E3D0]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#BD7475]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[520px] w-[520px] rounded-full bg-[#2a7070]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 z-20 h-16 rounded-t-[5rem] bg-[#E8D6BA]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-32 pt-16 md:grid-cols-12 md:gap-8 md:py-24">
          <div className="order-2 md:order-1 md:col-span-7">
            <h1 className="font-serif text-6xl font-medium leading-[0.95] md:text-8xl">
              Dra. Thaís <span className="italic text-[#E3AFB0]">Costa</span>
            </h1>
            <div className="my-8 h-px w-24 bg-[#BD7475]" />
            <h2 className="max-w-xl text-lg font-light leading-relaxed text-[#F0E3D0] md:text-xl">
              Experiência de +12 anos em Pediatria, cuidando da saúde e do crescimento do seu filho com atenção integral em Salvador.
            </h2>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CTAButton />
              <CTAButton variant="outline" label="Saiba mais" href="#sobre" external={false} />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="relative mx-auto w-[72%] max-w-sm md:w-full md:max-w-md">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#E3AFB0]/60" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#E8D6BA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <Image
                  src="/hero-dra-thais.webp"
                  alt="Dra. Thaís Costa lendo um livro sobre alimentação infantil"
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 72vw"
                  className="object-cover object-[60%_30%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#174B4B]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="overflow-hidden bg-[#E8D6BA] py-28 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              {/* moldura deslocada */}
              <div className="absolute -bottom-4 -right-4 top-4 left-4 rounded-t-[999px] rounded-b-[2rem] border border-[#BD7475]/60" />
              {/* detalhe em rosa */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#BD7475]/25 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#174B4B] shadow-[0_40px_80px_-30px_rgba(23,75,75,0.6)]">
                <Image
                  src="/dra-thais.webp"
                  alt="Dra. Thaís Costa, pediatra"
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-[50%_20%] transition-transform duration-[1500ms] ease-out hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#174B4B]/35 via-transparent to-transparent" />
              </div>
              {/* selo */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#174B4B] px-6 py-3 text-sm font-medium text-[#F0E3D0] shadow-xl md:-left-6 md:translate-x-0">
                <span className="font-serif text-2xl italic text-[#E3AFB0]">+12</span> anos de Pediatria
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <h2 className="font-serif text-5xl leading-tight text-[#174B4B] md:text-6xl">
              Um pouco <span className="italic">sobre mim</span>
            </h2>
            <div className="my-8 h-px w-16 bg-[#BD7475]" />
            <p className="text-lg leading-[1.9] text-[#3d5a5a]">
              Sou médica pediatra formada pela UFBA com residência em Pediatria pelo Hospital Santo Antônio (OSID) e cuido da saúde de crianças há mais de 12 anos. Acredito que não dá para cuidar bem da saúde de uma criança em uma consulta de 10 minutos. Por isso, escolhi o atendimento particular. No meu consultório, a minha consulta dura até 1 hora. E o meu objetivo é simples: ter tempo para examinar seu filho de verdade, ouvir todas as suas dúvidas com calma e garantir que você volte para casa tranquila, sabendo exatamente o que fazer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="bg-[#E8D6BA] py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="mb-16 font-serif text-5xl text-[#174B4B] md:text-6xl">
              Minhas <span className="italic">especialidades</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {specialties.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className={i === 4 ? "md:col-span-2" : ""}>
                <article className="h-full rounded-3xl border border-[#D3BF9F] bg-[#F0E3D0] p-9 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(23,75,75,0.45)]">
                  <span className="font-serif text-5xl italic text-[#BD7475]">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl text-[#174B4B] md:text-3xl">{t}</h3>
                  <p className="mt-3 leading-relaxed text-[#3d5a5a]">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <p className="mx-auto max-w-3xl font-serif text-2xl italic leading-relaxed text-[#174B4B] md:text-3xl">
              Consultas realizadas em ambiente exclusivo e sem sala de espera lotada, evitando o risco de contaminação e garantindo mais conforto para sua família.
            </p>
            <div className="mt-10">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="overflow-hidden py-28 md:py-36">
        <Reveal className="mb-14 px-6 text-center md:mb-20">
          <h2 className="mx-auto max-w-2xl font-serif text-5xl leading-tight text-[#174B4B] md:text-6xl">
            As mães que passaram por mim <span className="italic">dizem…</span>
          </h2>
        </Reveal>
        <Testimonials />
        <Reveal className="mt-16 flex justify-center px-6 md:mt-20">
          <CTAButton />
        </Reveal>
      </section>

      {/* LOCAL */}
      <section className="rounded-t-[4rem] bg-[#174B4B] pb-44 pt-28 text-[#F0E3D0] md:pb-52 md:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Onde atendo <span className="italic text-[#E3AFB0]">em Salvador</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#F0E3D0]">{ADDRESS}</p>
            <p className="mt-6 leading-relaxed text-[#D8E2DC]">
              Nossa clínica conta com todo conforto pensado para a sua família: temos estacionamento no local, atendimento no horário marcado e sem sala de espera lotada.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-b border-[#BD7475] pb-1 text-sm uppercase tracking-[0.2em] text-[#E3AFB0] transition hover:text-white"
            >
              Abrir no mapa →
            </a>
          </Reveal>
          <Reveal delay={150}>
            <iframe
              title="Mapa do consultório"
              src={MAPS_EMBED}
              loading="lazy"
              className="h-96 w-full rounded-3xl border-0 md:h-full md:min-h-96"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative -mt-16 rounded-t-[4rem] bg-[#0F3A3A] pb-28 pt-28 text-[#F0E3D0] md:pb-36 md:pt-36">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:gap-20">
          <Reveal className="shrink-0 md:w-1/3">
            <div className="flex flex-col gap-6 md:sticky md:top-28">
              <h2 className="font-serif text-4xl font-medium leading-tight text-[#E3AFB0] md:text-5xl">
                Perguntas Frequentes
              </h2>
              <p className="leading-relaxed text-[#F0E3D0]/60">
                Dúvidas sobre valores, reembolso, duração da consulta ou agendamento? Respondemos as mais comuns ao lado — e a Melissa está no WhatsApp para o que mais precisar.
              </p>
              <div>
                <CTAButton label="Falar pelo WhatsApp" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="md:flex-1">
            <FAQ />
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#0F3A3A] border-t border-[#F0E3D0]/10 py-10 text-center text-sm text-[#F0E3D0]/50">
        © 2026 Dra. Thaís Costa · Pediatria · Salvador - BA
      </footer>
    </main>
  );
}

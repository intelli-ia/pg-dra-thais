import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { ADDRESS, MAPS_EMBED, MAPS_URL } from "@/lib/config";

const heroHighlights = [
  "Mais de 12 anos de experiência em Pediatria.",
  "Atendimento particular no STIEP, Salvador.",
  "Acompanhamento de bebês, crianças e adolescentes.",
];

const followUp = [
  ["Crescimento e desenvolvimento", "Avaliação do peso, altura e desenvolvimento físico e neuropsicomotor, respeitando as particularidades de cada criança."],
  ["Alimentação infantil", "Orientações sobre amamentação, introdução alimentar e hábitos alimentares adequados a cada fase da infância."],
  ["Sono infantil", "Avaliação da rotina de sono do bebê e da criança, com orientações para ajudar a família a compreender as necessidades de cada idade."],
  ["Comportamento infantil", "Acompanhamento das mudanças de comportamento e dos marcos do desenvolvimento, auxiliando os pais a compreender os desafios de cada fase."],
  ["Vacinação", "Revisão da caderneta de vacinação e orientações sobre as vacinas recomendadas para cada etapa da infância."],
  ["Saúde e controle do peso", "Avaliação do peso, da alimentação e dos hábitos de vida, com acompanhamento individualizado de crianças e adolescentes."],
];

const steps = [
  ["Escuta e atenção às suas preocupações", "A consulta começa com uma conversa sobre a saúde da criança, seu histórico, sua rotina e as dúvidas dos pais."],
  ["Avaliação cuidadosa da criança", "A Dra. Thaís realiza uma avaliação individualizada, considerando o crescimento, o desenvolvimento e as necessidades de saúde de cada paciente."],
  ["Orientações claras para a família", "Você recebe explicações sobre a avaliação realizada, as condutas indicadas e os cuidados necessários, com espaço para esclarecer suas dúvidas."],
  ["Suporte após a consulta", "O cuidado também inclui suporte posterior ao atendimento, conforme as orientações e condições estabelecidas durante a consulta."],
];

const serviceInfo = [
  "Consultas exclusivamente particulares.",
  "Atendimento com horário marcado.",
  "Consultório no STIEP, Salvador.",
  "Ambiente confortável e estacionamento no prédio.",
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* DOBRA 01 — HERO */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#174B4B] text-[#F0E3D0]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#BD7475]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[520px] w-[520px] rounded-full bg-[#2a7070]/40 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-32 pt-16 md:grid-cols-12 md:gap-8 md:py-24">
          <div className="order-2 md:order-1 md:col-span-7">
            <h1 className="font-serif type-section font-medium">
              Pediatra em Salvador para cuidar da saúde e do desenvolvimento do seu filho.
            </h1>
            <div className="my-6 h-px w-24 bg-[#BD7475]" />
            <h2 className="max-w-xl text-base font-light leading-relaxed text-[#F0E3D0]/90 md:text-lg">
              Com mais de 12 anos de experiência, a Dra. Thaís Costa oferece um acompanhamento pediátrico atencioso e individualizado, com avaliações cuidadosas, orientações claras e atenção às necessidades de cada família.
            </h2>
            <ul className="mt-6 space-y-3">
              {heroHighlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-[#F0E3D0]/90 md:text-base">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-[#E3AFB0]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CTAButton />
              <CTAButton variant="outline" label="Saiba mais" href="#depoimentos" external={false} />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="relative mx-auto w-[72%] max-w-sm md:w-full md:max-w-md">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#E3AFB0]/60" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#E8D6BA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <Image
                  src="/hero-dra-thais.webp"
                  alt="Dra. Thaís Costa, pediatra em Salvador, lendo um livro sobre alimentação infantil"
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

      {/* DOBRA 02 — DEPOIMENTOS */}
      <section id="depoimentos" className="overflow-hidden bg-[#E8D6BA] pb-40 pt-20 md:pb-44 md:pt-28">
        <Reveal className="mb-10 px-6 text-center md:mb-20">
          <h2 className="mx-auto max-w-5xl font-serif type-section text-[#174B4B]">
            O que as famílias dizem sobre o atendimento da Dra. Thaís Costa
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#3d5a5a]">
            Conheça a experiência de pais e mães que confiaram o cuidado de seus filhos à Dra. Thaís Costa.
          </p>
        </Reveal>
        <Testimonials />
      </section>

      {/* DOBRA 03 — MANIFESTO / CONEXÃO */}
      <section className="relative -mt-16 rounded-t-[4rem] bg-[#174B4B] pb-44 pt-24 text-[#F0E3D0] md:pb-52 md:pt-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif type-section">
              Suas preocupações merecem ser ouvidas.{" "}
              <span className="italic text-[#E3AFB0]">A saúde do seu filho, cuidada com atenção.</span>
            </h2>
            <div className="mx-auto my-7 h-px w-24 bg-[#BD7475]" />
          </Reveal>
          <Reveal delay={120} className="space-y-4 text-base leading-[1.7] md:text-lg text-[#F0E3D0]/85">
            <p>
              Desde as primeiras dúvidas sobre o recém-nascido até os desafios de cada fase da infância, é natural ter perguntas, inseguranças e preocupações.
            </p>
            <p>E você precisa de uma pediatra que tenha tempo para ouvir, avaliar e explicar.</p>
            <p>
              Na consulta com a Dra. Thaís Costa, cada criança é acompanhada de forma individualizada, com uma avaliação cuidadosa e orientações que ajudam os pais a compreender melhor a saúde e o desenvolvimento dos filhos.
            </p>
            <p className="mt-8 border-t border-[#F0E3D0]/15 pt-8 font-serif text-xl italic leading-snug text-[#E3AFB0] md:text-2xl">
              Porque uma boa consulta pediátrica não termina quando a criança é examinada. Ela também precisa deixar os pais seguros sobre os próximos cuidados.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-9">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 04 — ACOMPANHAMENTO PEDIÁTRICO */}
      <section id="acompanhamento" className="relative -mt-16 rounded-t-[4rem] bg-[#E8D6BA] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="font-serif type-section text-[#174B4B]">
              Acompanhamento pediátrico em Salvador para <span className="italic">cada fase da infância</span>
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#3d5a5a]">
              Da chegada do bebê às transformações da adolescência, a Dra. Thaís Costa acompanha o crescimento e o desenvolvimento infantil, orientando as famílias sobre os cuidados necessários em cada etapa.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {followUp.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80}>
                <article className="h-full rounded-3xl border border-[#D3BF9F] bg-[#F0E3D0] p-9 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(23,75,75,0.45)]">
                  <span className="font-serif text-5xl italic text-[#BD7475]">0{i + 1}</span>
                  <h3 className="mt-3 font-serif type-card text-[#174B4B]">{t}</h3>
                  <p className="mt-2 leading-relaxed text-[#3d5a5a]">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CTAButton label="Agende uma consulta pediátrica" />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 05 — COMO FUNCIONA O ATENDIMENTO */}
      <section id="como-funciona" className="relative -mt-16 rounded-t-[4rem] bg-[#174B4B] pb-44 pt-24 text-[#F0E3D0] md:pb-52 md:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="font-serif type-section">
              Como funciona a consulta com a <span className="italic text-[#E3AFB0]">Dra. Thaís Costa?</span>
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#F0E3D0]/80">
              Um atendimento pediátrico pensado para avaliar seu filho com cuidado, ouvir suas preocupações e orientar sua família com clareza.
            </p>
          </Reveal>
          <ol className="relative max-w-3xl">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <li className="relative flex gap-5 pb-10 last:pb-0 md:gap-8">
                  {i < steps.length - 1 && (
                    <span className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-[#E3AFB0]/40" aria-hidden />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E3AFB0] bg-[#174B4B] text-sm font-semibold text-[#E3AFB0]">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-serif type-card">{t}</h3>
                    <p className="mt-2 leading-relaxed text-[#F0E3D0]/75">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="font-serif type-sub">
                Informações sobre o <span className="italic text-[#E3AFB0]">atendimento</span>
              </h3>
              <ul className="mt-4 space-y-2">
                {serviceInfo.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[#F0E3D0]/90">
                    <svg className="mt-1.5 h-4 w-4 shrink-0 text-[#E3AFB0]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-[#D8E2DC]">{ADDRESS}</p>
              <div className="mt-8 flex w-full flex-col gap-4">
                <CTAButton />
                <CTAButton variant="outline" label="Abrir no mapa" href={MAPS_URL} />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <iframe
                title="Mapa do consultório da Dra. Thaís Costa em Salvador"
                src={MAPS_EMBED}
                loading="lazy"
                className="h-96 w-full rounded-3xl border-0 md:h-full md:min-h-96"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOBRA 06 — SOBRE A MÉDICA */}
      <section id="sobre" className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#E8D6BA] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#BD7475]/60" />
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#BD7475]/25 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#174B4B] shadow-[0_40px_80px_-30px_rgba(23,75,75,0.6)]">
                <Image
                  src="/dra-thais.webp"
                  alt="Dra. Thaís Costa, pediatra"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-[50%_20%] transition-transform duration-[1500ms] ease-out hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#174B4B]/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#174B4B] px-6 py-3 text-sm font-medium text-[#F0E3D0] shadow-xl md:-left-6 md:translate-x-0">
                <span className="font-serif text-2xl italic text-[#E3AFB0]">+12</span> anos de Pediatria
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <h2 className="font-serif type-section text-[#174B4B]">
              Conheça a Dra. Thaís Costa, <span className="italic">pediatra em Salvador</span>
            </h2>
            <div className="my-6 h-px w-16 bg-[#BD7475]" />
            <div className="space-y-4 text-base leading-[1.7] md:text-lg text-[#3d5a5a]">
              <p>
                Sou médica formada pela Universidade Federal da Bahia (UFBA), com residência em Pediatria pelo Hospital Santo Antônio, das Obras Sociais Irmã Dulce.
              </p>
              <p>Há mais de 12 anos, dedico minha trajetória profissional ao cuidado da saúde de crianças e adolescentes.</p>
              <p>
                Ao longo dessa experiência, compreendi que uma boa consulta pediátrica vai além do exame físico. É preciso ouvir as preocupações dos pais, compreender a rotina da criança e explicar cada orientação com clareza.
              </p>
              <p>
                Por isso, escolhi oferecer um atendimento particular, com tempo para conhecer cada família e realizar avaliações cuidadosas, sem deixar que a pressa comprometa a atenção que cada criança merece.
              </p>
              <p>
                Meu objetivo é que você saia da consulta compreendendo melhor a saúde do seu filho e sabendo quais cuidados seguir.
              </p>
            </div>
            <p className="mt-6 font-serif text-2xl text-[#174B4B]">Dra. Thaís Costa</p>
            <p className="text-sm tracking-wide text-[#3d5a5a]">CRM-BA 23340 | RQE 19602</p>
            <div className="mt-8">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 07 — PERGUNTAS FREQUENTES */}
      <section id="faq" className="relative -mt-16 rounded-t-[4rem] bg-[#0F3A3A] pb-20 pt-24 text-[#F0E3D0] md:pb-28 md:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:gap-20">
          <Reveal className="shrink-0 md:w-1/3">
            <div className="flex flex-col gap-6 md:sticky md:top-28">
              <h2 className="font-serif type-sub font-medium text-[#E3AFB0]">
                Dúvidas frequentes sobre a consulta pediátrica em Salvador
              </h2>
              <div>
                <CTAButton label="Tenho mais dúvidas" icon="whatsapp" variant="green" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="md:flex-1">
            <FAQ />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#F0E3D0]/10 bg-[#0F3A3A] py-10 text-center text-sm text-[#F0E3D0]/50">
        © 2026 Dra. Thaís Costa · CRM-BA 23340 | RQE 19602 · Pediatria · Salvador - BA
      </footer>
    </main>
  );
}

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Balloon, Cloud, Teddy, CuteIcon, Heart, Squiggle, Star, type IconName } from "@/components/Decor";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { ADDRESS, MAPS_EMBED } from "@/lib/config";

const heroHighlights = [
  "Mais de 12 anos de experiência em Pediatria.",
  "Atendimento particular no STIEP, Salvador.",
  "Acompanhamento de bebês, crianças e adolescentes.",
];

const followUp: [string, string, IconName, string][] = [
  ["Crescimento e desenvolvimento", "Avaliação do peso, altura e desenvolvimento físico e neuropsicomotor, respeitando as particularidades de cada criança.", "growth", "#F6DDA0"],
  ["Alimentação infantil", "Orientações sobre amamentação, introdução alimentar e hábitos alimentares adequados a cada fase da infância.", "food", "#F3C4C4"],
  ["Sono infantil", "Avaliação da rotina de sono do bebê e da criança, com orientações para ajudar a família a compreender as necessidades de cada idade.", "moon", "#C9DDF0"],
  ["Comportamento infantil", "Acompanhamento das mudanças de comportamento e dos marcos do desenvolvimento, auxiliando os pais a compreender os desafios de cada fase.", "smile", "#CFE5D3"],
  ["Vacinação", "Revisão da caderneta de vacinação e orientações sobre as vacinas recomendadas para cada etapa da infância.", "shield", "#F6DDA0"],
  ["Saúde e controle do peso", "Avaliação do peso, da alimentação e dos hábitos de vida, com acompanhamento individualizado de crianças e adolescentes.", "scale", "#F3C4C4"],
];

const ages: [string, string, string][] = [
  ["Recém-nascidos", "#F3C4C4", "heart"],
  ["Bebês", "#F6DDA0", "moon"],
  ["Crianças", "#CFE5D3", "smile"],
  ["Adolescentes", "#C9DDF0", "chat"],
];

const steps: [string, string][] = [
  ["Escuta e atenção às suas preocupações", "A consulta começa com uma conversa sobre a saúde da criança, seu histórico, sua rotina e as dúvidas dos pais."],
  ["Avaliação cuidadosa da criança", "A Dra. Thaís realiza uma avaliação individualizada, considerando o crescimento, o desenvolvimento e as necessidades de saúde de cada paciente."],
  ["Orientações claras para a família", "Você recebe explicações sobre a avaliação realizada, as condutas indicadas e os cuidados necessários, com espaço para esclarecer suas dúvidas."],
  ["Suporte após a consulta", "O cuidado também inclui suporte posterior ao atendimento, conforme as orientações e condições estabelecidas durante a consulta."],
];

const privateBenefits: [string, string, IconName, string][] = [
  ["Qualidade", "Consultas com tempo para ouvir, examinar e explicar, sem a pressa de um atendimento em volume.", "stethoscope", "#F6DDA0"],
  ["Segurança", "Avaliação cuidadosa e orientações claras, para você sair da consulta sabendo quais cuidados seguir.", "shield", "#C9DDF0"],
  ["Conforto", "Horário marcado, ambiente acolhedor e estacionamento no prédio, para uma experiência tranquila.", "heart", "#F3C4C4"],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* DOBRA 01 — HERO */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#174B4B] text-[#F0E3D0]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#BD7475]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[520px] w-[520px] rounded-full bg-[#2a7070]/40 blur-3xl" />
        <Cloud className="pointer-events-none absolute left-[6%] top-28 w-24 text-[#F0E3D0]/10 float-slow" />
        <Cloud className="pointer-events-none absolute bottom-40 right-[8%] w-32 text-[#F0E3D0]/10 float-slow [animation-delay:-3s]" />
        <Star className="pointer-events-none absolute left-[46%] top-24 w-6 text-[#F6DDA0] twinkle" />
        <Star className="pointer-events-none absolute bottom-20 left-[42%] w-5 text-[#E3AFB0] twinkle [animation-delay:-1s]" />
        <Star className="pointer-events-none absolute right-[5%] top-1/3 w-4 text-[#F6DDA0]/80 twinkle [animation-delay:-2s]" />
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
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <CTAButton />
              <CTAButton variant="outline" label="Saiba mais" href="#depoimentos" external={false} pulse={false} />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <div className="relative mx-auto w-[72%] max-w-sm md:w-full md:max-w-md">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#E3AFB0]/60" />
              <Balloon className="absolute -left-6 top-10 z-10 w-10 text-[#E3AFB0] float-slow md:-left-10 md:w-14" />
              <Balloon className="absolute -right-3 top-2 z-10 w-8 text-[#F6DDA0] float-slow [animation-delay:-2s] md:-right-8 md:w-11" />
              <Heart className="absolute -bottom-3 -left-3 z-10 w-9 text-[#BD7475] md:w-12" />
              <Star className="absolute -right-4 bottom-16 z-10 w-8 text-[#F6DDA0] twinkle" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#E8D6BA] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <Image
                  src="/dra-thais.webp"
                  alt="Dra. Thaís Costa, pediatra em Salvador"
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 72vw"
                  className="object-cover object-[50%_20%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#174B4B]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 02 — DEPOIMENTOS */}
      <section id="depoimentos" className="relative overflow-hidden bg-[#E8D6BA] pb-40 pt-20 md:pb-44 md:pt-28">
        <Star className="pointer-events-none absolute left-[8%] top-16 w-6 text-[#E3AFB0] twinkle" />
        <Star className="pointer-events-none absolute right-[10%] top-24 w-5 text-[#E0A93B] twinkle [animation-delay:-1.5s]" />
        <Heart className="pointer-events-none absolute right-[18%] top-12 w-5 text-[#BD7475]/60" />
        <Reveal className="mx-auto mb-14 flex max-w-4xl flex-wrap items-center justify-center gap-3 px-6 md:mb-20">
          {ages.map(([label, tint, icon]) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#174B4B] shadow-sm transition duration-300 hover:-translate-y-1 hover:rotate-2 md:text-base"
              style={{ backgroundColor: tint }}
            >
              <CuteIcon name={icon as IconName} className="h-6 w-6" />
              {label}
            </span>
          ))}
        </Reveal>
        <Reveal className="mb-10 px-6 text-center md:mb-20">
          <h2 className="mx-auto max-w-5xl font-serif type-section text-[#174B4B]">
            O que as famílias dizem sobre o atendimento da Dra. Thaís Costa
          </h2>
          <Squiggle className="mx-auto mt-5 w-28 text-[#BD7475]" />
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#3d5a5a]">
            Conheça a experiência de pais e mães que confiaram o cuidado de seus filhos à Dra. Thaís Costa.
          </p>
        </Reveal>
        <Testimonials />
      </section>

      {/* DOBRA 03 — MANIFESTO / CONEXÃO */}
      <section className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#174B4B] pb-44 pt-24 text-[#F0E3D0] md:pb-52 md:pt-32">
        <Cloud className="pointer-events-none absolute left-[4%] top-32 w-28 text-[#F0E3D0]/10 float-slow" />
        <Cloud className="pointer-events-none absolute bottom-48 right-[3%] w-36 text-[#F0E3D0]/10 float-slow [animation-delay:-4s]" />
        <Balloon className="pointer-events-none absolute right-[8%] top-28 hidden w-12 text-[#E3AFB0] float-slow md:block" />
        <Balloon className="pointer-events-none absolute left-[7%] bottom-56 hidden w-10 text-[#F6DDA0] float-slow [animation-delay:-2s] md:block" />
        <Star className="pointer-events-none absolute left-[18%] top-24 w-5 text-[#F6DDA0] twinkle" />
        <Star className="pointer-events-none absolute bottom-60 right-[20%] w-6 text-[#E3AFB0] twinkle [animation-delay:-1s]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Teddy className="mx-auto mb-4 w-24 float-slow" />
          <Reveal>
            <h2 className="font-serif type-section">
              Suas preocupações merecem ser ouvidas.{" "}
              <span className="italic text-[#E3AFB0]">A saúde do seu filho, cuidada com atenção.</span>
            </h2>
            <div className="mx-auto my-7 h-px w-24 bg-[#BD7475]" />
          </Reveal>
          <Reveal delay={120} className="space-y-4 text-base leading-[1.7] md:text-lg text-[#F0E3D0]/85">
            <p className="md:hidden">
              É natural ter dúvidas e preocupações em cada fase da infância. Na consulta com a Dra. Thaís Costa, seu filho é avaliado com cuidado e você recebe orientações claras para entender melhor a saúde e o desenvolvimento dele.
            </p>
            <p className="hidden md:block">
              Desde as primeiras dúvidas sobre o recém-nascido até os desafios de cada fase da infância, é natural ter perguntas, inseguranças e preocupações.
            </p>
            <p className="hidden md:block">E você precisa de uma pediatra que tenha tempo para ouvir, avaliar e explicar.</p>
            <p className="hidden md:block">
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
      <section id="acompanhamento" className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#E8D6BA] pb-40 pt-20 md:pb-44 md:pt-28">
        <Star className="pointer-events-none absolute right-[6%] top-24 w-6 text-[#E0A93B] twinkle" />
        <Heart className="pointer-events-none absolute right-[12%] top-40 w-5 text-[#E3AFB0]" />
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
            {followUp.map(([t, d, icon, tint], i) => (
              <Reveal key={t} delay={(i % 3) * 80}>
                <article className="group h-full rounded-3xl border border-[#D3BF9F] bg-[#F0E3D0] p-9 text-center md:text-left transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(23,75,75,0.45)]">
                  <span
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl md:mx-0 text-[#174B4B] transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{ backgroundColor: tint }}
                  >
                    <CuteIcon name={icon} className="h-10 w-10" />
                  </span>
                  <h3 className="mt-5 font-serif type-card text-[#174B4B]">{t}</h3>
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

      {/* DOBRA 04b — ATENDIMENTO PARTICULAR */}
      <section id="atendimento-particular" className="relative -mt-16 overflow-hidden bg-[#174B4B] pb-44 pt-24 text-[#F0E3D0] md:pb-52 md:pt-28">
        <Cloud className="pointer-events-none absolute left-[4%] top-28 w-28 text-[#F0E3D0]/10 float-slow" />
        <Cloud className="pointer-events-none absolute bottom-48 right-[4%] w-32 text-[#F0E3D0]/10 float-slow [animation-delay:-3s]" />
        <Star className="pointer-events-none absolute right-[12%] top-24 w-5 text-[#F6DDA0] twinkle" />
        <Star className="pointer-events-none absolute bottom-56 left-[10%] w-6 text-[#E3AFB0] twinkle [animation-delay:-1.5s]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif type-section">
              Atendimento <span className="italic text-[#E3AFB0]">exclusivamente particular</span>
            </h2>
            <div className="mx-auto my-7 h-px w-24 bg-[#BD7475]" />
            <p className="text-base leading-[1.7] text-[#F0E3D0]/90 md:text-lg">
              A Dra. Thaís Costa atende exclusivamente de forma particular. Essa escolha garante mais qualidade, segurança e conforto para cada paciente e sua família, com a atenção que a saúde do seu filho merece.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {privateBenefits.map(([t, d, icon, tint], i) => (
              <Reveal key={t} delay={i * 80}>
                <article className="group h-full rounded-3xl border border-[#2a7070] bg-[#1d5a5a] p-8 text-center md:text-left transition duration-500 hover:-translate-y-1">
                  <span
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl md:mx-0 text-[#174B4B] transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{ backgroundColor: tint }}
                  >
                    <CuteIcon name={icon} className="h-10 w-10" />
                  </span>
                  <h3 className="mt-5 font-serif type-card">{t}</h3>
                  <p className="mt-2 leading-relaxed text-[#F0E3D0]/80">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <CTAButton label="Agendar consulta particular" />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 05 — COMO FUNCIONA O ATENDIMENTO */}
      <section id="como-funciona" className="relative -mt-16 rounded-t-[4rem] bg-[#F0E3D0] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto mb-12 max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif type-section text-[#174B4B]">
              Como funciona a consulta com a <span className="italic text-[#BD7475]">Dra. Thaís Costa?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d5a5a] md:text-lg">
              Um atendimento pediátrico pensado para avaliar seu filho com cuidado, ouvir suas preocupações e orientar sua família com clareza.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 md:grid-cols-[1.2fr_1fr] md:grid-rows-[auto_1fr] md:gap-x-12 md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <ol className="relative max-w-3xl">
              {steps.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80}>
                  <li className={`relative flex gap-5 md:gap-8 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                    {i < steps.length - 1 && (
                      <span className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-[#BD7475]/40" aria-hidden />
                    )}
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#BD7475] bg-[#F0E3D0] text-sm font-semibold text-[#BD7475]">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-serif type-card text-[#174B4B]">{t}</h3>
                      <p className="mt-2 leading-relaxed text-[#3d5a5a]">{d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={150} className="md:col-start-2 md:row-span-2 md:row-start-1">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-3xl border border-[#BD7475]/60" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#174B4B] shadow-[0_40px_80px_-30px_rgba(23,75,75,0.6)]">
                <iframe
                  title="Mapa do consultório da Dra. Thaís Costa em Salvador"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
            <p className="mt-6 text-center text-xs leading-snug text-[#3d5a5a]">{ADDRESS}</p>
          </Reveal>

          <Reveal className="text-center md:col-start-1 md:row-start-2 md:mt-12 md:text-left">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 06 — SOBRE A MÉDICA */}
      <section id="sobre" className="relative -mt-16 overflow-hidden bg-[#E8D6BA] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-12 md:gap-14">
          <Reveal className="order-2 md:order-none md:col-span-5">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#BD7475]/60" />
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#BD7475]/25 blur-2xl" />
              <Star className="absolute -left-3 top-8 z-10 w-9 text-[#F6DDA0] twinkle" />
              <Heart className="absolute -right-3 top-1/3 z-10 w-9 text-[#BD7475]" />
              <Star className="absolute -right-2 bottom-24 z-10 w-6 text-[#E3AFB0] twinkle [animation-delay:-1s]" />
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
          <div className="contents md:col-span-7 md:block">
            <Reveal delay={150} className="order-1 -mb-6 md:order-none md:mb-0">
              <h2 className="font-serif type-section text-[#174B4B]">
                Conheça a Dra. Thaís Costa, <span className="italic">pediatra em Salvador</span>
              </h2>
              <div className="my-6 h-px w-16 bg-[#BD7475]" />
            </Reveal>
            <Reveal delay={150} className="order-3 md:order-none">
              <div className="space-y-4 text-base leading-[1.7] md:text-lg text-[#3d5a5a]">
                <p className="md:hidden">
                  Sou médica formada pela UFBA, com residência em Pediatria pelo Hospital Santo Antônio, das Obras Sociais Irmã Dulce. Há mais de 12 anos, dedico minha trajetória ao cuidado da saúde de crianças e adolescentes.
                </p>
                <p className="md:hidden">
                  Para mim, uma boa consulta vai além do exame físico: por isso ofereço um atendimento particular, com tempo para ouvir cada família e explicar cada orientação com clareza, para que você saia sabendo quais cuidados seguir.
                </p>
                <p className="hidden md:block">
                  Sou médica formada pela Universidade Federal da Bahia (UFBA), com residência em Pediatria pelo Hospital Santo Antônio, das Obras Sociais Irmã Dulce.
                </p>
                <p className="hidden md:block">Há mais de 12 anos, dedico minha trajetória profissional ao cuidado da saúde de crianças e adolescentes.</p>
                <p className="hidden md:block">
                  Ao longo dessa experiência, compreendi que uma boa consulta pediátrica vai além do exame físico. É preciso ouvir as preocupações dos pais, compreender a rotina da criança e explicar cada orientação com clareza.
                </p>
                <p className="hidden md:block">
                  Por isso, escolhi oferecer um atendimento particular, com tempo para conhecer cada família e realizar avaliações cuidadosas, sem deixar que a pressa comprometa a atenção que cada criança merece.
                </p>
                <p className="hidden md:block">
                  Meu objetivo é que você saia da consulta compreendendo melhor a saúde do seu filho e sabendo quais cuidados seguir.
                </p>
              </div>
              <p className="mt-6 text-center font-serif md:text-left text-2xl text-[#174B4B]">Dra. Thaís Costa</p>
              <p className="text-center text-sm tracking-wide text-[#3d5a5a] md:text-left">CRM-BA 23340 | RQE 19602</p>
              <div className="mt-8 text-center md:text-left">
                <CTAButton />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOBRA 07 — PERGUNTAS FREQUENTES */}
      <section id="faq" className="relative -mt-16 rounded-t-[4rem] bg-[#0F3A3A] pb-20 pt-24 text-[#F0E3D0] md:pb-28 md:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:gap-20">
          <Reveal className="shrink-0 md:w-1/3">
            <div className="flex flex-col gap-6 md:sticky md:top-28">
              <h2 className="text-center font-serif type-sub font-medium text-[#E3AFB0] md:text-left">
                Dúvidas frequentes sobre a consulta pediátrica em Salvador
              </h2>
              <div className="text-center md:text-left">
                <CTAButton label="Tenho mais dúvidas" icon="whatsapp" variant="green" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="md:flex-1">
            <FAQ />
          </Reveal>
        </div>

        <div className="relative mt-24 overflow-hidden py-16 md:mt-44 md:py-20">
          <Cloud className="pointer-events-none absolute left-[4%] top-6 w-28 text-[#F0E3D0]/10 float-slow" />
          <Cloud className="pointer-events-none absolute bottom-6 right-[4%] w-32 text-[#F0E3D0]/10 float-slow [animation-delay:-3s]" />
          <Balloon className="pointer-events-none absolute left-[7%] top-1/3 hidden w-12 text-[#E3AFB0] float-slow md:block" />
          <Balloon className="pointer-events-none absolute right-[8%] top-10 hidden w-10 text-[#F6DDA0] float-slow [animation-delay:-2s] md:block" />
          <Star className="pointer-events-none absolute left-[18%] top-8 w-5 text-[#F6DDA0] twinkle" />
          <Star className="pointer-events-none absolute bottom-10 right-[20%] w-6 text-[#E3AFB0] twinkle [animation-delay:-1s]" />
          <Heart className="pointer-events-none absolute bottom-16 left-[14%] w-5 text-[#BD7475]/70" />
          <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
            <Teddy className="mx-auto mb-4 w-24 float-slow" />
            <h2 className="font-serif type-section">
              Sua criança merece o melhor cuidado. <span className="italic text-[#E3AFB0]">E você sabe disso.</span>
            </h2>
            <div className="mx-auto my-7 h-px w-24 bg-[#BD7475]" />
            <p className="text-base leading-[1.7] text-[#F0E3D0]/85 md:text-lg">
              Agende a consulta do seu filho e conte com um acompanhamento atencioso, em cada fase da infância.
            </p>
            <div className="mt-9">
              <CTAButton label="Agende sua consulta" variant="green" icon="whatsapp" />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#0F3A3A] pb-28 pt-8 md:py-10 text-center text-sm text-[#F0E3D0]/50">
        © 2026 Dra. Thaís Costa · CRM-BA 23340 | RQE 19602 · Pediatria · Salvador - BA
      </footer>
    </main>
  );
}

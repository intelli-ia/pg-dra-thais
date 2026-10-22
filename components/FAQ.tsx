"use client";
import { useState } from "react";

const faqs = [
  {
    q: "A Dra. Thaís Costa atende por plano de saúde?",
    a: [
      "Não. Os atendimentos são exclusivamente particulares, permitindo uma consulta com mais tempo para avaliação da criança e esclarecimento das dúvidas da família.",
      "Após a consulta, é emitida a nota fiscal, que pode ser utilizada para solicitar reembolso ao plano de saúde, conforme as condições do convênio.",
    ],
  },
  {
    q: "Quanto tempo dura a consulta?",
    a: [
      "A consulta pode durar até 1 hora, permitindo uma avaliação cuidadosa da criança e tempo para conversar sobre as preocupações e dúvidas dos pais.",
    ],
  },
  {
    q: "A Dra. Thaís atende bebês e recém-nascidos?",
    a: [
      "Sim. A Dra. Thaís realiza o acompanhamento pediátrico de recém-nascidos, bebês, crianças e adolescentes, avaliando o crescimento, o desenvolvimento e as necessidades de cada fase.",
    ],
  },
  {
    q: "A Dra. Thaís atende crianças especiais com TDAH?",
    a: [
      "Sim. A Dra. Thaís atende crianças especiais, incluindo aquelas com TDAH, com toda dedicação, paciência e expertise.",
      "Cada criança tem seu próprio ritmo e suas particularidades. Por isso, a consulta é conduzida com tempo e escuta, para compreender o comportamento, a rotina e o desenvolvimento do seu filho, além de acolher as dúvidas e as preocupações da família.",
      "Os pais recebem orientações claras sobre os cuidados indicados e os próximos passos, sempre com respeito às necessidades de cada criança.",
    ],
  },
  {
    q: "Onde fica o consultório da Dra. Thaís Costa em Salvador?",
    a: [
      "O consultório está localizado no Condomínio Metropolis Empresarial, na Rua Dr. José Peroba, 275, Sala 1210, STIEP, Salvador - BA, CEP 41770-235.",
      "O prédio conta com estacionamento para maior comodidade das famílias.",
    ],
  },
  {
    q: "Como funciona o agendamento da consulta?",
    a: [
      "Para agendar, basta clicar no botão de WhatsApp disponível nesta página.",
      "Você será atendido pela Melissa, responsável pelos agendamentos, que informará os dias e horários disponíveis.",
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-[#F0E3D0]/10">
            <button
              type="button"
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-3 py-5 text-left"
            >
              <span className="font-serif text-lg font-medium leading-snug text-[#F0E3D0] transition-colors duration-200 group-hover:text-[#E3AFB0] md:text-xl">
                
                {f.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-[#E3AFB0]" : "bg-[#F0E3D0]/10"
                }`}
              >
                <svg
                  className={`h-3.5 w-3.5 transition-colors duration-300 ${isOpen ? "text-[#174B4B]" : "text-[#F0E3D0]/50"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 pb-5 text-sm leading-relaxed text-[#F0E3D0]/60 md:text-base">
                  {f.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

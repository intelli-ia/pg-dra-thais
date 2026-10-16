"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Dra. Thaís, você atende por plano de saúde?",
    a: "Não, meus atendimentos são apenas particulares. Escolhi trabalhar assim porque o modelo dos convênios não me permite dar a atenção e o tempo que o seu filho merece. Mas fique tranquila: eu emito a Nota Fiscal para você solicitar o reembolso pelo seu plano.",
  },
  {
    q: "E como funciona esse reembolso pelo convênio?",
    a: "É bem simples. Logo após a nossa consulta, a minha equipe te entrega a Nota Fiscal. Você só precisa enviar esse documento pelo aplicativo do seu convênio, e eles depositam uma parte ou o valor total da consulta direto na sua conta bancária.",
  },
  {
    q: "Qual é o valor da consulta e como posso pagar?",
    a: "O valor da consulta é R$ 380,00, e você pode pagar no cartão de crédito ou débito. Se preferir fazer no Pix, dou um desconto e o valor fica R$ 360,00.",
  },
  {
    q: "Quanto tempo dura a nossa consulta?",
    a: "Eu separo até 1 hora para estarmos juntas. Diferente daquelas consultas corridas de 10 minutos, eu faço questão desse tempo para examinar seu filho por inteiro, olhar exames com calma e tirar absolutamente todas as suas dúvidas. A pressa não entra no meu consultório.",
  },
  {
    q: "Onde fica o seu consultório? Tem onde estacionar?",
    a: "Fica no STIEP, no Condomínio Metropolis Empresarial (Rua Dr. José Peroba, 275, Sala 1210). E sim, o prédio tem estacionamento próprio. Você pode vir com tranquilidade, sem se preocupar em procurar vaga na rua com criança pequena no carro.",
  },
  {
    q: "Como faço para agendar a consulta?",
    a: "É só clicar em qualquer botão verde aqui da página. Você vai falar direto com a Melissa, que cuida do meu atendimento no WhatsApp. Ela vai te mostrar os dias e horários livres na minha agenda para a gente se encontrar.",
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
                <p className="pb-5 text-sm leading-relaxed text-[#F0E3D0]/60 md:text-base">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Avaliações originais do Google (texto mantido sem edições)
const testimonials = [
  {
    name: "Maisa Quele",
    role: "Avaliação no Google",
    quote:
      "Estava em busca de uma pediatra que me ouvisse, que tivesse atenção as minhas preocupações como mãe , e com Dra Thais encontrei esse olhar atento ... Depois de 7 anos em busca de uma pediatra atenciosa , responsável e humana , encontrei ❤️🙏🏽",
  },
  {
    name: "Leandro Bolivar",
    role: "Avaliação no Google",
    quote: "Atendimento excelente. Enfim, uma pediatra que realmente dá atenção e examina o paciente com cuidado.",
  },
  {
    name: "Miriam Felicio",
    role: "Avaliação no Google",
    quote:
      "Gostei muito da médica, muito atenciosa, conversa bastante, tira todas as duvidas, dá muitas dicas e avalia toda a criança. Eu fui para a primeira consulta de RN e eu amei porque pude tirar todas as minhas dúvidas e preocupações que toda mamãe tem, o que a gente quer e ficar tranquila e dra Thaís ajudou. Recomendo!",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#BD7475]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="mx-2 flex h-[22rem] w-72 shrink-0 flex-col rounded-3xl border border-[#174B4B]/10 bg-white p-5 shadow-[0_20px_40px_-30px_rgba(23,75,75,0.4)] sm:mx-3 sm:h-[23rem] sm:w-80 sm:p-7">
      <Stars />
      <blockquote className="flex-1 overflow-hidden text-sm leading-relaxed text-[#174B4B]/70">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center gap-3 border-t border-[#174B4B]/10 pt-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#BD7475]/20">
          <span className="text-xs font-bold text-[#BD7475]">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#174B4B]">{t.name}</p>
          <p className="text-xs text-[#BD7475]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

// Poucos depoimentos: repete a lista para o loop (-50%) cobrir telas largas
function Row({ reverse = false }: { reverse?: boolean }) {
  const base = reverse ? [...testimonials].reverse() : testimonials;
  const half = [...base, ...base, ...base];
  return (
    <div className="marquee-row relative flex overflow-hidden">
      <div className={`marquee-track flex ${reverse ? "marquee-reverse" : ""}`}>
        {[...half, ...half].map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="space-y-4">
      <Row />
      <Row reverse />
    </div>
  );
}

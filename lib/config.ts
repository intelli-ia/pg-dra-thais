// TODO: substituir pelo número real da Melissa (formato internacional, só dígitos)
export const WHATSAPP_NUMBER = "5571900000000";
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma consulta com a Dra. Thaís Costa.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ADDRESS =
  "Condomínio Metropolis Empresarial, Rua Dr. José Peroba, 275, Sala 1210 — STIEP, Salvador - BA, CEP 41770-235";
const MAP_QUERY = encodeURIComponent(
  "Condomínio Metropolis Empresarial, Rua Dr. José Peroba, 275, Salvador - BA",
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

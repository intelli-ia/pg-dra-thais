export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5571981923570&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20particular";

export const ADDRESS =
  "Condomínio Metropolis Empresarial, Rua Dr. José Peroba, 275, Sala 1210 — STIEP, Salvador - BA, CEP 41770-235";
const MAP_QUERY = encodeURIComponent(
  "Condomínio Metropolis Empresarial, Rua Dr. José Peroba, 275, Salvador - BA",
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

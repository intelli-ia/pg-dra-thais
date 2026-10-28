import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pediatra em Salvador | Dra. Thaís Costa",
  description:
    "Procurando uma pediatra em Salvador? Conheça a Dra. Thaís Costa. Acompanhamento de bebês, crianças e adolescentes. Atendimento particular no STIEP.",
  metadataBase: new URL("https://drathaiscosta.com.br"),
  alternates: { canonical: "/" },
  keywords: [
    "pediatra em Salvador",
    "consulta pediátrica em Salvador",
    "pediatra para bebês",
    "pediatra infantil",
    "acompanhamento pediátrico",
    "médico que cuida de crianças",
  ],
};

const GTM_ID = "GTM-P2C8W5HL";
const GADS_ID = "AW-16637218372";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} antialiased`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        {/* Google Tag Manager: carregado após o load para não competir com o LCP/TBT */}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`} strategy="lazyOnload" />
        <Script id="gtag" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GADS_ID}');`}
        </Script>
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css"; // Onde o Tailwind CSS é injetado
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  // --- Metadados Básicos de SEO ---
  title:
    "Quant-Tecnologia: Obras Elétricas, Hidráulicas, Gás, Civis e IoT para Indústria",
  description:
    "Soluções completas em engenharia para seu projeto: obras elétricas, hidráulicas, instalações de gás, obras civis, monitoramento de grandezas, manutenção preditiva de bombas de recalque e inovação IoT.",
  keywords: [
    "Quant-Tecnologia",
    "obras elétricas",
    "obras hidráulicas",
    "instalação de gás",
    "obras civis",
    "engenharia",
    "soluções em engenharia",
    "monitoramento de grandezas",
    "manutenção preditiva",
    "bombas de recalque",
    "IoT industrial",
    "automação predial",
    "eficiência energética",
    "projetos industriais",
    "tecnologia para obras",
    "gestão de projetos",
    "Rio de Janeiro", // Considerando sua localização
    "consultoria em engenharia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {/* Se o Header for global para TODAS as páginas, coloque-o aqui. */}
        {/* Caso contrário, remova esta linha e coloque-o apenas em app/page.tsx */}
        {children} {/* Este 'children' é o conteúdo do seu app/page.tsx */}
      </body>
    </html>
  );
}

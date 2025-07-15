// components/AplicativoSection.tsx
import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

// Início do componente com 'export default function'
export default function AplicativoSection() {
  // Dados do aplicativo diretamente definidos dentro do componente.
  // Sem props, sem interfaces, direto no JSX.
  const appTitle = "Monitoramento em Tempo Real com a Quant-Tecnologia";
  const appSubheading =
    "Nossa plataforma inovadora oferece visibilidade completa e controle preciso sobre seus sistemas, otimizando performance e garantindo segurança diretamente da palma da sua mão.";
  const appFeaturesTitle = "Funcionalidades Chave do Nosso Aplicativo:";
  const appFeatures = [
    "Dashboard Intuitivo e Personalizável",
    "Alertas e Notificações Instantâneas",
    "Relatórios Analíticos Detalhados",
    "Acesso Remoto Seguro e Confiável",
    "Integração Simples com Seus Sistemas",
    "Análise Preditiva e Histórico de Dados",
  ];
  const appImageSrc = "/app-mockup.png"; // Certifique-se de ter esta imagem em `public/images/`
  const appImageAlt =
    "Interface do aplicativo Quant-Tecnologia em um dispositivo móvel, mostrando um dashboard com gráficos e dados.";
  const ctaPrimaryText = "Tenho Interesse";
  const ctaPrimaryLink =
    "https://wa.me/5521986066603?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20da%20Quant-Tecnologia.";
  const ctaSecondaryText = "Quero uma Demonstração";
  const ctaSecondaryLink =
    "mailto:admin@quant-tecnologia.com.br?subject=Contato%20pelo%20site%20-%20Quant-Tecnologia&body=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Quant-Tecnologia."; // Link para enviar um e-mail.

  return (
    <section id="APP" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {appTitle}
          </h2>
          <p className="text-xl text-gray-700">{appSubheading}</p>
        </div>

        {/* Conteúdo Principal: Imagem do App e Recursos */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Lado Esquerdo: Imagem do Aplicativo (Mockup) */}
          <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-md aspect-[9/16] rounded-3xl shadow-2xl bg-gray-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out">
              <Image
                src={appImageSrc}
                alt={appImageAlt}
                layout="fill"
                objectFit="cover"
                className="object-top"
              />
            </div>
            {/* Elementos decorativos (Blobs) - Opcional, requer configuração no tailwind.config.js */}
            {/* Remova se não quiser usar ou não configurar o tailwind.config.js */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          {/* Lado Direito: Lista de Funcionalidades e CTAs */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {appFeaturesTitle}
            </h3>
            <ul className="space-y-4 mb-10 text-lg text-gray-700">
              {appFeatures.map((feature, index) => (
                <li key={index} className="flex items-start lg:items-center">
                  <svg
                    className="h-7 w-7 text-green-600 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href={ctaPrimaryLink}
                // ADICIONE AQUI flex items-center E AJUSTE justify-center se necessário
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              >
                {/* INSERIR O ÍCONE FaWhatsapp AQUI */}
                <FaWhatsapp className="mr-2 text-xl" />{" "}
                {/* Ícone com margem à direita e tamanho */}
                {ctaPrimaryText} {/* Seu texto original do CTA */}
              </a>
              <a
                href={ctaSecondaryLink}
                target="_blank" // Adicionado para indicar abertura externa
                rel="noopener noreferrer" // Boa prática de segurança com target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-green-600 text-base font-medium rounded-full text-green-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              >
                {ctaSecondaryText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  // Links para o WhatsApp e E-mail com templates de mensagem/assunto
  const whatsappLink =
    "https://wa.me/5521986066603?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20da%20Quant-Tecnologia.";
  const emailLink =
    "mailto:admin@quant-tecnologia.com.br?subject=Contato%20pelo%20site%20-%20Quant-Tecnologia&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Quant-Tecnologia.";

  return (
    <section className="relative w-full h-screen bg-quant-dark overflow-hidden font-poppins">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0">
        <div className="opacity-80">
          {" "}
          {/* Wrapper div for opacity */}
          <Image
            src="/hero-background.png" // Caminho para sua imagem
            alt="Background de equipamento elétrico"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Conteúdo do Hero */}
      {/* Removi justify-center e adicionei pt-16 para controlar o espaçamento superior no celular */}
      <div className="relative z-10 flex flex-col items-start h-full max-w-7xl mx-auto px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32">
        <div className="max-w-4xl">
          <h1 className="text-quant-text-primary text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-quant-green">Quant-Tecnologia:</span> Inovação
            e Soluções Completas.
          </h1>
          <h2 className="text-quant-text-primary text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
            <p className="text-quant-text-primary text-lg sm:text-xl leading-relaxed max-w-2xl mb-6">
              Somos especialistas em obras elétricas, civis e hidráulicas, além
              de instalação de estruturas de gás.
            </p>
            <p className="text-quant-text-primary text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
              Oferecemos monitoramento por telemetria e transformamos ideias em
              realidade utilizando tecnologia de ponta.
            </p>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto py-8">
            {/* Botão do WhatsApp */}
            <a
              href={whatsappLink} // Link para o WhatsApp com mensagem pré-escrita
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Segurança para target="_blank"
              className="w-full sm:w-auto px-4 py-3 md:px-8 md:py-3 bg-quant-green text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 text-base md:text-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Entre em contato
            </a>

            {/* Botão do E-mail */}
            <a
              href={emailLink} // Link para o E-mail com assunto e corpo pré-escritos
              className="w-full sm:w-auto px-4 py-3 md:px-8 md:py-3 bg-quant-blue text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 text-base md:text-lg flex items-center justify-center gap-2"
            >
              <FaEnvelope className="text-xl" />
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

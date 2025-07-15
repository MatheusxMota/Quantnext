// components/ContatoSection.tsx
import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function ContatoSection() {
  return (
    <section id="contato" className="py-16 bg-gray-100">
      {/* py-16: Padding vertical levemente diminuído. */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          {/* mb-12: Margem inferior do cabeçalho levemente diminuída.
              max-w-2xl: Largura máxima do texto do cabeçalho ligeiramente menor. */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-700">
            Estamos prontos para atender você e transformar suas ideias em realidade.
          </p>
        </div>

        {/* Conteúdo Principal: Informações de Contato em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* gap-6: Espaçamento entre os cards diminuído de gap-12 para gap-6. */}
          
          {/* Cartão de Endereço */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center transform  transition-transform duration-300">
            {/* p-6: Padding interno do card diminuído de p-8 para p-6.
                shadow-md: Sombra levemente menor.
                hover:scale-105: Adicionado um pequeno efeito de escala no hover para interatividade. */}
            <FaMapMarkerAlt className="w-10 h-10 text-green-600 mb-3" />
            {/* w-10 h-10: Tamanho dos ícones levemente diminuído.
                mb-3: Margem inferior dos ícones diminuída. */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">Localização</h3>
            {/* text-xl: Tamanho do título levemente diminuído.
                mb-2: Margem inferior do título diminuída. */}
            <p className="text-base text-gray-700">Av. Marechal Floriano, 56 - Centro</p>
            <p className="text-base text-gray-700">RJ - Brasil</p>
          </div>

          {/* Cartão de Telefone */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center transform  transition-transform duration-300">
            <FaPhone className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
            
            <p className="text-base text-gray-700">
              <a href="tel:+552139503535" className="hover:text-green-600 transition-colors duration-200">
                (21) 3950-3535
              </a>
            </p>
          </div>

          {/* Cartão de E-mail */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center transform  transition-transform duration-300">
            <FaEnvelope className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
            <p className="text-base text-gray-700">
              <a href="mailto:admin@quant-tecnologia.com.br" className=" transition-colors duration-200">
                admin@quant-tecnologia.com.br
              </a>
            </p>
          </div>

        </div>

        {/* Espaço para um futuro formulário ou mapa */}
        {/* Mantive o espaçamento original do mt-20 para este bloco, mas você pode ajustá-lo também */}
        {/*
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Envie-nos uma Mensagem</h3>
          {/* Adicione seu formulário de contato aqui }
        </div>
        */}
      </div>
    </section>
  );
}
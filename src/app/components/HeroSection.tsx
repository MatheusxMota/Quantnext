import { FaWhatsapp, FaEnvelope} from 'react-icons/fa'; 

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen bg-quant-dark overflow-hidden font-poppins">
            {/* Imagem de Fundo com Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/hero-background.webp" // Caminho para sua imagem
                    alt="Background de equipamento elétrico"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            </div>

            {/* Conteúdo do Hero */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-quant-text-primary text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        <span className="text-quant-blue">Quant Tecnologia:</span> Inovação e Soluções Completas.
                    </h1>
                    <h2 className="text-quant-text-primary text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
                        <p className="text-quant-text-primary text-lg sm:text-xl leading-relaxed max-w-2xl mb-6">
                            Somos especialistas em obras elétricas, civis e hidráulicas, além de instalação de estruturas de gás.
                        </p>
                        <p className="text-quant-text-primary text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
                            Oferecemos monitoramento por telemetria e transformamos ideias em realidade utilizando tecnologia de ponta.
                        </p>

                    </h2>




                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a
                            href="#contato"
                            className="w-full sm:w-auto px-4 py-3 md:px-8 md:py-3 bg-quant-green text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 text-base md:text-lg flex items-center justify-center gap-2"
                        >
                            <FaWhatsapp className="text-xl" />
                            Entre em contato
                        </a>

                        <a
                            href="#saiba-mais"
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

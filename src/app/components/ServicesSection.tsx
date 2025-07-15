import { FiZap, FiSun, FiDroplet, FiWind, FiHome, FiSettings, FiShield, FiCloudLightning, FiShoppingCart } from 'react-icons/fi';


export default function ServicesSection() {
    const services = [
        { icon: <FiZap className="text-white text-xl text-center" />, title: "Reforma e Aumento de Carga (LIGHT/ENEL)" },
        { icon: <FiSun className="text-white text-xl" />, title: "Instalação de Energia e Aquecimento Solar" },
        { icon: <FiDroplet className="text-white text-xl" />, title: "Instalação Hidráulica e Sanitária" },
        { icon: <FiWind className="text-white text-xl" />, title: "Instalação e Manutenção de Ar-condicionado" },
        { icon: <FiHome className="text-white text-xl" />, title: "Contrato de Manutenção Predial" },
        { icon: <FiSettings className="text-white text-xl" />, title: "Instalação e Manutenção Elétrica" },
        { icon: <FiShield className="text-white text-xl" />, title: "Atendimento e Proteção Eletro-eletrônica" },
        { icon: <FiCloudLightning className="text-white text-xl text-center" />, title: "Instalação e Manutenção de Para-Raios" },
        { icon: <FiShoppingCart className="text-white text-xl text-center" />, title: "Venda de Produtos Elétricos, Eletrônicos e de Refrigeração" }
    ];

    return (
        <section id ='serviços' className="py-16 px-4 bg-white ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-quant-green mb-4">Nossos Serviços</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Oferecemos soluções completas e inovadoras para garantir o sucesso do seu projeto, com expertise e tecnologia de ponta. Transformando suas ideias em realidade.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                         <div key={index} className="bg-gray-200 rounded-xl p-6 shadow-lg shadow-gray-800/20 transition-all duration-300">
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-green-500 to-green-700 p-3 rounded-full mr-4 flex-shrink-0">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>



                
            </div>
        </section>
    );
}
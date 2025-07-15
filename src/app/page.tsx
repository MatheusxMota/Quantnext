// app/page.tsx
import AplicativoSection from './components/AplicativoSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';
import ContactSection from './components/ContatoSection';

export default function HomePage() {
  return (
    <>


      <main>
        <Header />
        <HeroSection />
        <ServicesSection />
        <AplicativoSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
        
      </main>
    </>
  );
}
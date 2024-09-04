import { MobileMenu, Nav } from './components';
import AnimatedBackground from './components/AnimatedBackground';
import { Contacts, Footer, Hero, OurServices, WhyChoose } from './sections';
import { useMobileMenu } from './store';

const App = () => {
  const active = useMobileMenu((state) => state.active);

  return (
    <main className="font-montserrat bg-main-bg text-text relative z-10">
      <Nav />
      <section id="#">
        <AnimatedBackground />
        <Hero />
      </section>
      <section id="our-services" className="section">
        <OurServices />
      </section>
      <section id="why-choose" className="section bg-gradient-to-r from-[#aed8bd] to-[#f3fff3]">
        <WhyChoose />
      </section>
      <section id="contacts" className="section">
        <Contacts />
      </section>
      <section>
        <Footer />
      </section>
      {active && <MobileMenu />}
    </main>
  );
};

export default App;

import { Nav } from './components';
import { Contacts, Footer, Hero, OurServices, WhyChoose } from './sections';

const App = () => (
  <main className="font-montserrat bg-main-bg text-text">
    <Nav absolute={true} />
    <section id="#">
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
  </main>
);

export default App;

//GjwqBQ8klo5ousWTUdoDyZwlaG5IKdhhcHZtOILahVxkjDwuqNxhqNRd4d8U
//https://api.sportmonks.com/football/v3

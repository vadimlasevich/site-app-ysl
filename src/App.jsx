import { Nav } from './components';
import { About, Contacts, FAQ, Footer, Hero, OurServices, WhyChoose } from './sections';

const App = () => (
  <main className="font-montserrat">
    <Nav absolute={true} />
    <section id="#">
      <Hero />
    </section>
    <section id="our-services" className="section">
      <OurServices />
    </section>
    {/* <section className="section">
      <About />
    </section> */}
    <section id="why-choose" className="section bg-gradient-to-r from-[#d2ffe0] to-[#c5ffb8]">
      <WhyChoose />
    </section>
    {/* <section>
      <FAQ />
    </section> */}
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

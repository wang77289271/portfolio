import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Timeline from '../components/Timeline/Timeline'

const Home = () => {
  return (
    <main>
      <Nav />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <Timeline />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  )
}

export default Home

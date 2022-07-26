import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import GraphicDesign from '../components/MyWork/GraphicDesign/GraphicDesign'
import MyWork from '../components/MyWork/MyWork'
import Nav from '../components/Nav/Nav'
import Timeline from '../components/Timeline/Timeline'
import './Home.css'

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
      <section id="work">
        <MyWork />
        <div id="work_gd">
          <GraphicDesign />
        </div>
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

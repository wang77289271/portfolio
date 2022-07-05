import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Timeline from '../components/Timeline/Timeline'

const Home = () => {
  return (
    <main>
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <Timeline />
      </section>
      <Nav />
    </main>
  )
}

export default Home

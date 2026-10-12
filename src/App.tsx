import './App.css'
import Achievements from './components/Achievements'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Interests from './components/Interests'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className={"container"}>
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <Interests/>
      </main>
      <Footer />
    </div>
  )
}

export default App
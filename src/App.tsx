import './App.css'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { LineHorizontal } from './components/Line/LineHorizontal'
import { Project } from './sections/Project/Project'
import { DataContextProvider } from './contexts/DataContext'
import { Experience } from './sections/Experience/Experience'
import { Contact } from './sections/Contact/Contact'
import { Footer } from './sections/Footer/Footer'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <DataContextProvider>
      <Header />
      <LineHorizontal />
      <main>
        <Hero />
        <LineHorizontal />
        <AboutMe />
        <LineHorizontal />
        <Project />
        <LineHorizontal />
        <Experience />
        <LineHorizontal />
        <Contact />
        {/*
        */}
      </main>
      <LineHorizontal />
      <Footer />
      <ScrollToTop />
    </DataContextProvider>
  )
}

export default App


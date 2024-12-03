import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/composants/NavBar'
import Header from './assets/composants/Header'
import Advantages from './assets/composants/Advantages'
import Collections from './assets/composants/Collections'
import Soldes from './assets/composants/Soldes'
import DernieresTendances from './assets/composants/Tendances'
import FooterNewsletter from './assets/composants/FooterNewsletter'



// Pages
const Home = () => (
  <>
    <Header />
    <Advantages />
    <Collections />
    <Soldes />
    <DernieresTendances />
    <FooterNewsletter />
    {/* <div>Contenu de la page d'accueil</div> */}
  </>
)
const Tous = () => <div>Tous les produits</div>
const Hommes = () => <div>Collection Hommes</div>
const Femmes = () => <div>Collection Femmes</div>
const Enfants = () => <div>Collection Enfants</div>
const Vente = () => <div>Vente</div>
const Chariot = () => <div>Panier</div>

function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tous" element={<Tous />} />
        <Route path="/hommes" element={<Hommes />} />
        <Route path="/femmes" element={<Femmes />} />
        <Route path="/enfants" element={<Enfants />} />
        <Route path="/vente" element={<Vente />} />
        <Route path="/chariot" element={<Chariot />} />
      </Routes>
    </div>
  )
}

export default App
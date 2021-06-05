import React from 'react'
import Fond from "../../images/equipe.jpg"



const Landing = () => {
  return (
    <div className="card">
      <img src={Fond} alt="" className="card__image" />
      <div className="card__overlay" >
        <div>
        <h1 className="titre">BIENVENU SUR NOTRE SITE</h1>
        <h3 className="titre">Nous Sommes Situe au Quartier Plateau </h3>
        <p className="p1">Nous Ouvert 24h/24 et toutes la semaines</p>
        </div>
      </div>
    </div>
  )
}

export default Landing


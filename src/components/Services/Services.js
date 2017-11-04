import React from 'react'

const Services = () => (
  <section id="services">
      <div class="centering">
        <h1>Ce que je fais</h1>
        <div class="allServices">
          <div class="service">
            <span>Illustration</span>
            <p>J'ai à coeur de partager ma passion pour l'illustration. C'est pourquoi je réalise mes visuels avec détails et précision.</p>
          </div>
          <div class="service">
            <span>Infographie</span>
            <p>Réalisation de visuels à destination du print comme du web, j'aime à mettre en forme les informations et vos idées.</p>
          </div>
          <div class="service">
            <span>Vidéo</span>
            <p>Je réalise vos supports de présentation animés pour mettre en valeur vos idées, aller à l'essentiel pour soutenir votre discours.</p>
          </div>
        </div>
      </div>
    </section>
);

Services.propTypes = {}

Services.defaultProps = {}

export default Services

// External
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div id="accueil">
      <Link to="/tennis" id="tennis" className="tuile">
        <div className="tuile-bg"></div>
        <div className="tuile-overlay"></div>
        <h2>Tennis</h2>
      </Link>

      <section id="wallet" className="tuile">
        <div className="tuile-bg"></div>
        <div className="tuile-overlay">
          <span className="coming-soon">Coming soon</span>
        </div>
        <h2>Portefeuille</h2>
      </section>

      <section id="travel" className="tuile">
        <div className="tuile-bg"></div>
        <div className="tuile-overlay">
          <span className="coming-soon">Coming soon</span>
        </div>
        <h2>Voyage</h2>
      </section>
    </div>
  );
}

export default HomePage;
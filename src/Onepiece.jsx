

//const Onepiece = () => {}
import { useState } from 'react';

function Onepiece(props) {
const [flipped, setFlipped] = useState(false);
  
// support clavier : Enter ou Space pour flip
  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFlipped((s) => !s);
    }
  }
 
 
 return (
  <div
      className={`onepiece-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped((s) => !s)}
      onKeyDown={handleKeyDown}
      tabIndex={0} /* focusable for keyboard */
      role="button"
      aria-pressed={flipped}
    >
      <div className="card-inner">
        {/* front */}
        <div className="card-front">
          <img className="onepiece-image" src={props.image} alt={`${props.name} portrait`} />
          <h3>DEAD OR ALIVE</h3>
          <h2 className="name">{props.name}</h2>
          <h3 className="role">{props.role}</h3>
          <div className="bounty-badge">
            <span className="bounty-amount">{props.bounty}</span>
          </div>
          <p className="description">{props.description}</p>
        </div>

        {/* back */}
        <div className="card-back">
          <h3>Informations supplémentaires</h3>
          <p><strong>Devil Fruit:</strong> {props.devilFruit || 'Aucune'}</p>
          <p><strong>Weapon:</strong> {props.weapon || 'Aucune'}</p>
          <p><strong>Affiliation:</strong> {props.affiliation || 'Straw Hat Pirates'}</p>
          <p style={{ marginTop: 12, fontStyle: 'italic' }}>Cliquez ou appuyez sur Entrée pour revenir</p>
        </div>
      </div>
    </div>

     );    

}
export default Onepiece;
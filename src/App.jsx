import Header  from './Header.jsx';
import Footer from './Footer.jsx';
import Onepiece from './Onepiece.jsx';


import luffyImage from './assets/Luffy.jpg';
import zoroImage from './assets/zoro.jpg';
import namiImage from './assets/nami.jpg';
import sanjiImage from './assets/sanji.jpg';
import chopperImage from './assets/chopper.jpg';
import robinImage from './assets/robin.jpg';
import ussopImage from './assets/ussop.jpg';
import frankyImage from './assets/franky.jpg';
import brookImage from './assets/broke.jpg';
import jinbeImage from './assets/jinbe.jpg';

import strawhat from './assets/strawhat.jpg';

function App() {
  
  return (
    <div>
      <Header image={strawhat} />
     

<div className='onepiece'>

<Onepiece 
  name="Monkey D. Luffy" 
  role="Captain" 
  bounty="3,000,000,000 ฿" 
  description="The main protagonist of One Piece and captain of the Straw Hat Pirates." 
  image={luffyImage} 
  devilFruit="Gum-Gum Fruit"
  weapon="Aucune"
/>

<Onepiece 
  name="Roronoa Zoro" 
  role="Swordsman" 
  bounty="1,111,000,000 ฿" 
  description="The swordsman of the Straw Hat Pirates and master of the three-sword style." 
  image={zoroImage}
  devilFruit="Aucune"
  weapon="Katanas" 
/>

<Onepiece 
  name="Nami" 
  role="Navigator" 
  bounty="366,000,000 ฿" 
  description="The navigator of the Straw Hat Pirates with exceptional map-making and weather skills." 
  image={namiImage} 
  devilFruit="Aucune"
  weapon="Climat-Tact"
/>

<Onepiece 
  name="Usopp" 
  role="Sniper" 
  bounty="500,000,000 ฿" 
  description="The sniper of the Straw Hat Pirates, known for his sharpshooting skills and creativity in battle." 
  image={ussopImage} 
  devilFruit="Aucune"
  weapon="Slingshot / Kabuto"
/>

<Onepiece 
  name="Vinsmoke Sanji" 
  role="Cook" 
  bounty="1,032,000,000 ฿" 
  description="The cook of the crew, known for his powerful kicks and chivalry towards women." 
  image={sanjiImage} 
  devilFruit="Aucune"
  weapon="Jambes (kicks)"
/>

<Onepiece 
  name="Tony Tony Chopper" 
  role="Doctor" 
  bounty="1,000 ฿" 
  description="The crew’s reindeer doctor who ate the Human-Human Fruit." 
  image={chopperImage} 
  devilFruit="Human-Human Fruit"
  weapon="Aucune"
/>

<Onepiece 
  name="Nico Robin" 
  role="Archaeologist" 
  bounty="930,000,000 ฿" 
  description="The archaeologist who can read Poneglyphs and uncover the world’s true history." 
  image={robinImage} 
  devilFruit="Hana-Hana no Mi"
   weapon="Aucune"
/>

<Onepiece 
  name="Franky" 
  role="Shipwright" 
  bounty="394,000,000 ฿" 
  description="The cyborg shipwright who built the Thousand Sunny." 
  image={frankyImage}
  devilFruit="Aucune"
  weapon="Armes cyborg" 
/>

<Onepiece 
  name="Brook" 
  role="Musician" 
  bounty="383,000,000 ฿" 
  description="The musician of the crew, a living skeleton who came back to life thanks to the Revive-Revive Fruit." 
  image={brookImage} 
  devilFruit="Yomi Yomi no Mi"
  weapon="Épée"
/>

<Onepiece 
  name="Jinbe" 
  role="Helmsman" 
  bounty="1,100,000,000 ฿" 
  description="The helmsman and former Warlord of the Sea who joined the Straw Hats after the Whole Cake Island arc." 
  image={jinbeImage}
  devilFruit="Aucune"
  weapon="Karate des Hommes-Poissons" 
/>

      </div>

      <Footer />
    </div>
    
  );
}

export default App;

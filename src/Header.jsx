
function Header(props) {
 return (

     <header className="header">
         <h1> <img  id="strawhatimg" src={props.image} alt="straw hat" />Straw Hat Crew</h1>
      <nav>
        <a href="#crew">Crew</a>
        <a href="#bounties">Bounties</a>
        <a href="#adventures">Adventures</a>
       </nav>
   </header>
  );

}

export default Header;


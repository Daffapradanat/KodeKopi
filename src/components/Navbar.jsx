import { Link } from 'react-router-dom';
import '../assets/components.css';

function Navbar() {
  return (
    <header className="header" id="header">
      <div className="container">
        <img src="/image/KodeKopiBG.jpg" alt="KodeKopi Logo" className="logo" />
        <nav>
          <ul className="nav-menu" id="navMenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">About</a></li>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> */}
            <li><a href="#pricing">Product</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-toggle" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
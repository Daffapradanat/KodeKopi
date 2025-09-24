function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/image/KodeKopi.png" alt="KodeKopi Logo" className="footer-logo" />
          <p>KodeKopi is your best companion when battling bugs and deadlines.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">smartphone</span>
            </a>
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">About</a></li>
            <li><a href="#pricing">Product</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><span className="material-symbols-outlined">mail</span> support@kodekopi.id</p>
          <p><span className="material-symbols-outlined">smartphone</span> @kodekopi</p>
          <p><span className="material-symbols-outlined">location_on</span> Surabaya, Indonesia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 KodeKopi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

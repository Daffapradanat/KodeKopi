function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="news-container">
        <div className="newsletter-content">
          <h2>Dapatkan Tips Coding & Promo Eksklusif</h2>
          <p>Berlangganan newsletter kami dan dapatkan diskon 20% untuk pembelian pertama!</p>
          <form className="newsletter-form" id="newsletterForm">
            <input type="email" placeholder="Masukkan email kamu" className="newsletter-input" required />
            <button type="submit" className="newsletter-btn">Daftar Sekarang</button>
          </form>
          <div className="newsletter-benefits">
            <div className="benefit-item">📧 Tips coding mingguan</div>
            <div className="benefit-item">🎯 Promo eksklusif</div>
            <div className="benefit-item">☕ Resep kopi rahasia</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

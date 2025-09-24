function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2>Pilih Paket KodeKopi</h2>
          <p>Sesuaikan dengan kebutuhan coding kamu</p>
        </div>
        <div className="pricing-grid">
          {/* Starter */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price">Rp 50K<span>/bulan</span></div>
            </div>
            <div className="pricing-features">
              <div className="feature-item">✓ 10 Sachet KodeKopi</div>
              <div className="feature-item">✓ Gratis Ongkir Jakarta</div>
              <div className="feature-item">✓ Panduan Brewing</div>
            </div>
            <button className="pricing-btn">Pilih Paket</button>
          </div>

          {/* Pro Developer */}
          <div className="pricing-card featured">
            <div className="popular-badge">Paling Populer</div>
            <div className="pricing-header">
              <h3>Pro Developer</h3>
              <div className="price">Rp 120K<span>/bulan</span></div>
            </div>
            <div className="pricing-features">
              <div className="feature-item">✓ 25 Sachet KodeKopi</div>
              <div className="feature-item">✓ Gratis Ongkir Seluruh Indonesia</div>
              <div className="feature-item">✓ Tumbler Eksklusif</div>
              <div className="feature-item">✓ Akses Premium Tips</div>
            </div>
            <button className="pricing-btn">Pilih Paket</button>
          </div>

          {/* Team */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Team</h3>
              <div className="price">Rp 400K<span>/bulan</span></div>
            </div>
            <div className="pricing-features">
              <div className="feature-item">✓ 100 Sachet KodeKopi</div>
              <div className="feature-item">✓ Gratis Ongkir + Asuransi</div>
              <div className="feature-item">✓ 5 Tumbler Tim</div>
              <div className="feature-item">✓ Konsultasi Nutrisi</div>
            </div>
            <button className="pricing-btn">Pilih Paket</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Kenapa Pilih KodeKopi?</h2>
          <p>Dirancang khusus untuk developer modern</p>
        </div>
        <div className="features-grid">
          <div className="feature enhanced-card">
            <div className="feature-icon">🧠</div>
            <img src="/image/feature/feature4.jpg" alt="" />
            <h3>Tanpa Gelisah</h3>
            <p>KodeKopi diracik tanpa efek samping seperti kopi biasa.</p>
          </div>
          <div className="feature enhanced-card">
            <div className="feature-icon">⚡</div>
            <img src="/image/feature/feature1.jpg" alt="" />
            <h3>Fokus Panjang</h3>
            <p>Membantu kamu coding nonstop hingga 36 jam penuh energi.</p>
          </div>
          <div className="feature enhanced-card">
            <div className="feature-icon">🌟</div>
            <img src="/image/feature/feature2.jpg" alt="" />
            <h3>Aroma Premium</h3>
            <p>Campuran robusta & arabika pilihan dengan cita rasa istimewa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

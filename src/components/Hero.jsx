function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">KodeKopi</h1>
        <p className="hero-subtitle">Kopi terbaik untuk para developer yang ingin fokus dan produktif.</p>
        <div className="cta-group">
          <a href="#pricing" className="cta">Coba Sekarang</a>
          <a href="#features" className="btn-secondary">Pelajari Lebih Lanjut</a>
        </div>
      </div>
      <div className="hero-animation">
        <div className="floating-coffee">☕</div>
        <div className="code-snippet">
          <div className="code-line">console.log('Hello KodeKopi!');</div>
          <div className="code-line">const energy = new KodeKopi();</div>
          <div className="code-line">energy.drink();</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
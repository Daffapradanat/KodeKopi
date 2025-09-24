function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number" data-target="10000">0</div>
            <div className="stat-label">Developer Bahagia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="500000">0</div>
            <div className="stat-label">Bug Diperbaiki</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="36">0</div>
            <div className="stat-label">Jam Fokus Max</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="99">0</div>
            <div className="stat-label">% Kepuasan</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;

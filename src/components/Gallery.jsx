function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <h2>Galeri KodeKopi</h2>
        <div className="gallery-grid">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
          <img
            key={num}
            src={`/image/gallery/gallery${num}.jpg`}
            alt={`Gallery ${num}`}
            className="gallery-item"
          />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

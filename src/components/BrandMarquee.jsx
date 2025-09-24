function BrandMarquee() {
  return (
    <div className="brand-marquee-modern">
      <div className="loop-slider">
        {[1, 2, 3, 4, 5, 6].map((num, i) => (
          <img key={i} src={`/image/brand/${num}.jpg`} alt={`brand${num}`} />
        ))}
        {[1, 2, 3, 4, 5, 6].map((num, i) => (
          <img key={i + 6} src={`/image/brand/${num}.jpg`} alt={`brand${num}`} />
        ))}
        {[1, 2, 3, 4, 5, 6].map((num, i) => (
          <img key={i + 12} src={`/image/brand/${num}.jpg`} alt={`brand${num}`} />
        ))}
      </div>
    </div>
  );
}

export default BrandMarquee;
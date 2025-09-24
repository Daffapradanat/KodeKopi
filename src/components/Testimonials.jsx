import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "KodeKopi bikin gue nge-push bug jam 3 pagi kayak minum air putih.",
    author: "Rina, Frontend Developer",
  },
  {
    text: "Minum ini sebelum ngerjain deadline, hasilnya? Ngoding kayak kesurupan.",
    author: "Agus, Mobile Developer",
  },
  {
    text: "Beneran, ini kopi bukan sembarang kopi. Ini temennya debugger.",
    author: "Dewi, QA Engineer",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { text, author } = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <h2>Kata Mereka</h2>
      <div id="testimonial-box">
        <p>"{text}"</p>
        <span>- {author}</span>
      </div>
    </section>
  );
}

export default Testimonials;

function FAQ() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Semua yang perlu kamu tahu tentang KodeKopi</p>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <span>Apa perbedaan KodeKopi dengan kopi biasa?</span>
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-answer">
              <p>KodeKopi diformulasikan khusus untuk developer dengan tambahan nootropik alami yang membantu fokus dan konsentrasi tanpa efek samping jittery atau crash.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>Berapa lama efek KodeKopi bertahan?</span>
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-answer">
              <p>Efek energi dan fokus dari KodeKopi dapat bertahan hingga 6-8 jam, lebih lama dibanding kopi biasa yang hanya 2-3 jam.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>Apakah aman dikonsumsi setiap hari?</span>
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-answer">
              <p>Ya, KodeKopi aman dikonsumsi setiap hari. Namun kami merekomendasikan maksimal 2-3 sachet per hari untuk hasil optimal.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>Bagaimana cara menyeduh KodeKopi?</span>
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-answer">
              <p>Sangat mudah! Tuang 1 sachet KodeKopi ke dalam 150ml air panas (80-90°C), aduk rata, dan siap dinikmati. Panduan lengkap tersedia di kemasan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

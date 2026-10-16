export default function CTA() {
  return (
    <section id="contact" className="cta">

      <div className="cta-content">

        <span className="eyebrow">
          HAVE A PROJECT?
        </span>

        <h2>
          Ready to grow your
          <br />

          <span>
            digital presence?
          </span>
        </h2>

        <p>
          Let's create something meaningful that
          helps your business stand out, connect
          with customers and grow.
        </p>

        <div className="cta-buttons">

          <a href="mailto:hello@example.com" className="primary-button">
            Let's work together
          </a>

          <a href="#work" className="text-button">
            See my work →
          </a>

        </div>

      </div>

      <div className="relative overflow-hidden  person-wrapper">
      <img
        src="/zubair.png"
        alt="Portrait"
    className="w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
      />

      {/* White bottom fade */}
      {/* <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent" /> */}
    </div>

      {/* <div className="person-wrapper">

        <img
          src="/zubair.png"
          alt="Digital marketing expert"
          className="person"
        />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      </div> */}

    </section>
  );
}

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

      <div className="person-wrapper">

        <img
          src="/images/person.png"
          alt="Digital marketing expert"
          className="person"
        />

      </div>

    </section>
  );
}

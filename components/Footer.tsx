export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            M
          </div>

          <p>
            Digital marketing expert
            <br />
            helping businesses grow online.
          </p>
        </div>

        <div className="footer-column">

          <span>Explore</span>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column">

          <span>Social</span>

          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>

        </div>

        <div className="footer-column">

          <span>Contact</span>

          <a href="mailto:hello@example.com">
            hello@example.com
          </a>

          <a href="tel:+923001234567">
            +92 300 1234567
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Your Name. All rights reserved.
        </span>

        <span>
          Digital Marketing
        </span>

      </div>

    </footer>
  );
}

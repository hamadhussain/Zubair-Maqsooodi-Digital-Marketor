import Link from "next/link";
import { services, siteInfo } from "../utils/data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">HH</div>

          <p>
            I design and build the digital presence of ambitious businesses,
            all under one standard.
          </p>
        </div>

        <div className="footer-column">
          <span>Explore</span>

          <Link href="/">Home</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#services">Services</Link>
          <Link href={siteInfo.contactPath}>Contact</Link>
        </div>

        <div className="footer-column">
          <span>Services</span>

          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              {service.title}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <span>Get in touch</span>

          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>

          <a href={`mailto:${siteInfo.email}`}>
            {siteInfo.email}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </span>

        <span>
          Working with businesses across Pakistan, UAE, UK, USA and Canada
        </span>
      </div>
    </footer>
  );
}



// export default function Footer() {
//   return (
//     <footer className="footer">

//       <div className="footer-top">

//         <div className="footer-brand">
//           <div className="footer-logo">
//             M
//           </div>

//           <p>
//             Digital marketing expert
//             <br />
//             helping businesses grow online.
//           </p>
//         </div>

//         <div className="footer-column">

//           <span>Explore</span>

//           <a href="#home">Home</a>
//           <a href="#services">Services</a>
//           <a href="#work">Work</a>
//           <a href="#contact">Contact</a>

//         </div>

//         <div className="footer-column">

//           <span>Social</span>

//           <a href="#">Instagram</a>
//           <a href="#">LinkedIn</a>
//           <a href="#">Facebook</a>

//         </div>

//         <div className="footer-column">

//           <span>Contact</span>

//           <a href="mailto:hello@example.com">
//             hello@example.com
//           </a>

//           <a href="tel:+923001234567">
//             +92 300 1234567
//           </a>

//         </div>

//       </div>

//       <div className="footer-bottom">

//         <span>
//           © 2026 Your Name. All rights reserved.
//         </span>

//         <span>
//           Digital Marketing
//         </span>

//       </div>

//     </footer>
//   );
// }

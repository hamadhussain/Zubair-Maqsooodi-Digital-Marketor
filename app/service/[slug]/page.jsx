import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  services,
  siteInfo,
  industries,
  getRegions,
  getFaqs,
  getServiceBySlug,
} from "../../../utils/data/services";

const wrap = "mx-auto w-[min(1200px,calc(100%-40px))]";

function Eyebrow({ children }) {
  return (
    <span className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#777]">
      <span className="h-px w-8 bg-[#008c6a]" />
      {children}
    </span>
  );
}

function Heading({ children, className = "" }) {
  return (
    <h2
      className={`text-[clamp(32px,4vw,52px)] font-medium leading-[1.02] tracking-[-0.04em] text-[#111] ${className}`}
    >
      {children}
    </h2>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Services | ${siteInfo.name}`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const index = services.findIndex((item) => item.slug === slug);
  const others = [1, 2, 3].map(
    (step) => services[(index + step) % services.length]
  );
  const regions = getRegions(service.title);
  const faqs = getFaqs(service);

  return (
    <main className="bg-[#f5f5f1] text-[#111]">

      <section className="border-b border-[#e3e3dd] bg-gradient-to-b from-white to-[#f5f5f1]">
        <div className={`${wrap} pb-16 pt-10 md:pb-24`}>
          <nav className="mb-8 flex items-center gap-2 text-[11px] text-[#777]">
            <Link href="/" className="hover:text-[#111]">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-[#111]">Services</Link>
            <span>/</span>
            <span className="text-[#111]">{service.title}</span>
          </nav>

          <Eyebrow>{service.label}</Eyebrow>

          <h1 className="max-w-[760px] text-[clamp(38px,5.5vw,68px)] font-medium leading-[1.02] tracking-[-0.045em]">
            {service.heroTitle}
          </h1>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-[#666]">
            {service.heroText}
          </p>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div
          className={`${wrap} grid items-start gap-10 py-20 md:grid-cols-[minmax(0,330px)_1fr] md:gap-16 md:py-28`}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#111]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 330px"
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-[640px]">
            <p className="text-[14px] leading-[1.75] text-[#444]">
              {service.introLead}
            </p>

            <h2 className="mb-6 mt-8 text-[clamp(26px,3vw,36px)] font-medium leading-[1.1] tracking-[-0.035em]">
              {service.introHeading}
            </h2>

            <div className="space-y-5 text-[13.5px] leading-[1.8] text-[#666]">
              {service.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div className={`${wrap} py-20 md:py-28`}>
          <Eyebrow>What I offer</Eyebrow>
          <Heading className="mb-12 max-w-[560px]">{service.includedHeading}</Heading>

          <div className="grid gap-px border border-[#dcdcd5] bg-[#dcdcd5] sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <div key={item.title} className="bg-[#f5f5f1] p-6 md:p-7">
                <h3 className="text-[13px] font-medium text-[#111]">{item.title}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-[#777]">{item.text}</p>
              </div>
            ))}
            <div className="hidden bg-[#e8e9e2] sm:block" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div className={`${wrap} py-20 md:py-28`}>
          <Eyebrow>My process</Eyebrow>
          <Heading className="mb-12 max-w-[560px]">{service.processHeading}</Heading>

          <div className="grid gap-px border border-[#dcdcd5] bg-[#dcdcd5] sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="bg-[#f5f5f1] p-6 md:p-7">
                <span className="text-[10px] text-[#008c6a]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[13px] font-medium text-[#111]">{step.title}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-[#777]">{step.text}</p>
              </div>
            ))}
            <div className="hidden bg-[#e8e9e2] sm:block lg:col-span-3" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div className={`${wrap} grid gap-14 py-20 md:grid-cols-2 md:py-28`}>
          <div>
            <Eyebrow>Why it works</Eyebrow>
            <h2 className="mb-8 max-w-[440px] text-[clamp(26px,3vw,34px)] font-medium leading-[1.1] tracking-[-0.035em]">
              {service.benefitsHeading}
            </h2>

            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 text-[13px] leading-[1.6] text-[#555]"
                >
                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#008c6a]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-8 mt-0 text-[clamp(22px,2.4vw,28px)] font-medium tracking-[-0.03em] md:mt-[34px]">
              Industries I Work With
            </h2>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="border border-[#dcdcd5] bg-white/50 px-4 py-2.5 text-[11px] text-[#555]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div className={`${wrap} py-20 md:py-28`}>
          <Eyebrow>Where I work</Eyebrow>
          <Heading className="mb-14 max-w-[520px]">
            {service.title} Services Across Multiple Regions
          </Heading>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div key={region.name}>
                <h3 className="mb-3 text-[13px] font-medium text-[#008c6a]">
                  {region.name}
                </h3>
                <p className="text-[12px] leading-[1.75] text-[#666]">{region.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div className={`${wrap} py-20 md:py-28`}>
          <Eyebrow>Common questions</Eyebrow>
          <Heading className="mb-12 max-w-[560px]">
            Frequently asked questions about {service.title}
          </Heading>

          <div className="max-w-[820px] divide-y divide-[#dcdcd5] border-y border-[#dcdcd5]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[13px] font-medium text-[#111]">
                  {faq.question}
                  <span className="text-[18px] text-[#008c6a] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[700px] text-[12.5px] leading-[1.75] text-[#666]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3e3dd]">
        <div className={`${wrap} py-20 md:py-28`}>
          <Eyebrow>Get started</Eyebrow>
          <h2 className="max-w-[640px] text-[clamp(36px,5vw,62px)] font-medium leading-[1] tracking-[-0.045em]">
            Ready For {service.title} That Actually Works For You?
          </h2>

          <p className="mt-6 max-w-[460px] text-[14px] leading-[1.7] text-[#666]">
            Book a meeting and I will walk you through exactly what a working{" "}
            {service.title.toLowerCase()} plan would look like for your business, with no
            pressure and no generic pitch.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={siteInfo.contactPath}
              className="bg-[#008c6a] rounded-lg px-6 py-3.5 text-[11px] text-white transition hover:bg-[#00a77e]"
            >
              Create a meeting →
            </Link>
            <a
              href={siteInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg border-[#dcdcd5] bg-white/60 px-6 py-3.5 text-[11px] text-[#333] transition hover:bg-white"
            >
              Message on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className={`${wrap} py-20 md:py-28`}>
          <Heading className="mb-12 max-w-[420px]">
            Other ways I can help your business grow
          </Heading>

          <div className="grid gap-px border border-[#dcdcd5] bg-[#dcdcd5] md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-[#f5f5f1] p-7 transition hover:bg-white"
              >
                <h3 className="flex items-center justify-between text-[14px] font-medium text-[#111]">
                  {item.title}
                  <span className="text-[#008c6a] transition group-hover:translate-x-1">
                    →
                  </span>
                </h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-[#777]">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { services, serviceList } from "../../../utils/data/services";

// export function generateStaticParams() {
//   return serviceList.map((service) => ({
//     slug: service.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const service = services[slug];

//   if (!service) {
//     return {
//       title: "Service Not Found",
//     };
//   }

//   return {
//     title: service.name,
//     description: service.heroDescription,
//   };
// }

// export default async function ServicePage({ params }) {
//   const { slug } = await params;

//   const service = services[slug];

//   if (!service) {
//     notFound();
//   }

//   const otherServices = serviceList
//     .filter((item) => item.slug !== service.slug)
//     .slice(0, 4);

//   return (
//     <main className="service-page">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section className="service-hero">
//         <div className="service-container service-hero-inner">

//           <div className="service-eyebrow">
//             {service.category}
//           </div>

//           <h1>
//             {service.heroTitle}
//           </h1>

//           <p>
//             {service.heroDescription}
//           </p>

//           <div className="hero-line">
//             <span />
//             <span>Our {service.shortName} service</span>
//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           APPROACH
//       ================================================== */}

//       <section className="approach-section">
//         <div className="service-container approach-grid">

//           {/* ACTUAL IMAGE */}
//           <div className="approach-image">

//             <Image
//               src={service.image}
//               alt={service.name}
//               fill
//               priority
//               sizes="(max-width: 768px) 100vw, 45vw"
//             />

//           </div>


//           {/* TEXT */}
//           <div className="approach-content">

//             <div className="service-eyebrow">
//               Our approach
//             </div>

//             <h2>
//               {service.approachTitle}
//             </h2>

//             <p>
//               {service.approachDescription}
//             </p>

//             <div className="approach-stats">

//               {service.stats.map((stat) => (
//                 <div key={stat.number || stat.value}>
//                   <strong>{stat.value}</strong>
//                   <span>{stat.label}</span>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           INCLUDED
//       ================================================== */}

//       <section className="included-section">
//         <div className="service-container included-grid">

//           <div className="included-heading">

//             <div className="service-eyebrow">
//               What we provide
//             </div>

//             <h2>
//               {service.includedTitle}
//             </h2>

//           </div>


//           <div className="included-list">

//             {service.included.map((item) => (
//               <div
//                 className="included-item"
//                 key={item.number}
//               >

//                 <span className="item-number">
//                   {item.number}
//                 </span>

//                 <h3>
//                   {item.title}
//                 </h3>

//                 <p>
//                   {item.description}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           PROCESS
//       ================================================== */}

//       <section className="process-section">
//         <div className="service-container">

//           <div className="process-heading">

//             <div className="service-eyebrow">
//               Our process
//             </div>

//             <h2>
//               {service.processTitle}
//             </h2>

//           </div>


//           <div className="process-grid">

//             {service.process.map((step) => (
//               <div
//                 className="process-item"
//                 key={step.number}
//               >

//                 <span className="process-number">
//                   {step.number}
//                 </span>

//                 <h3>
//                   {step.title}
//                 </h3>

//                 <p>
//                   {step.description}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           BENEFITS
//       ================================================== */}

//       <section className="benefits-section">
//         <div className="service-container benefits-grid">

//           <div>
//             <div className="service-eyebrow">
//               Why it matters
//             </div>

//             <h2>
//               {service.benefitsTitle}
//             </h2>
//           </div>


//           <div className="benefits-list">

//             {service.benefits.map((benefit, index) => (
//               <div
//                 className="benefit-item"
//                 key={benefit}
//               >

//                 <span>
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <p>
//                   {benefit}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           DARK STATEMENT
//       ================================================== */}

//       <section className="statement-section">
//         <div className="service-container">

//           <div className="statement-inner">

//             <div className="service-eyebrow">
//               Our philosophy
//             </div>

//             <h2>
//               {service.statementTitle}
//             </h2>

//             <p>
//               {service.statementDescription}
//             </p>

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           FAQ
//       ================================================== */}

//       <section className="faq-section">
//         <div className="faq-container">

//           <div className="faq-heading">

//             <div className="service-eyebrow">
//               Frequently asked questions
//             </div>

//             <h2>
//               Questions about our{" "}
//               {service.shortName.toLowerCase()} service
//             </h2>

//           </div>


//           <div className="faq-list">

//             {service.faqs.map((faq, index) => (
//               <details
//                 key={faq.question}
//                 className="faq-item"
//               >

//                 <summary>

//                   <span className="faq-number">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="faq-question">
//                     {faq.question}
//                   </span>

//                   <span className="faq-plus">
//                     +
//                   </span>

//                 </summary>

//                 <div className="faq-answer">
//                   {faq.answer}
//                 </div>

//               </details>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           CTA
//       ================================================== */}

//       <section className="cta-section">
//         <div className="service-container cta-grid">

//           <div>

//             <div className="service-eyebrow">
//               Let&apos;s work together
//             </div>

//             <h2>
//               Ready to make your{" "}
//               {service.shortName.toLowerCase()} better?
//             </h2>

//           </div>


//           <div className="cta-content">

//             <p>
//               Tell us about your project, your goals, and what
//               you need. We&apos;ll help turn your idea into a
//               polished creative solution.
//             </p>

//             <Link href="/contact">
//               Start a Project
//               <span>↗</span>
//             </Link>

//           </div>

//         </div>
//       </section>


//       {/* ==================================================
//           OTHER SERVICES
//       ================================================== */}

//       <section className="other-services-section">
//         <div className="service-container">

//           <div className="other-services-heading">

//             <div>
//               <div className="service-eyebrow">
//                 Explore more
//               </div>

//               <h2>
//                 Other Services
//               </h2>
//             </div>

//             <Link href="/services">
//               View all services →
//             </Link>

//           </div>


//           <div className="other-services-grid">

//             {otherServices.map((item) => (
//               <Link
//                 key={item.slug}
//                 href={`/service/${item.slug}`}
//                 className="other-service"
//               >

//                 <span>
//                   {item.category}
//                 </span>

//                 <h3>
//                   {item.shortName}
//                 </h3>

//                 <b>
//                   Explore →
//                 </b>

//               </Link>
//             ))}

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }
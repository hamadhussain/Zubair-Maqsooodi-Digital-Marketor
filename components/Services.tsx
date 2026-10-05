const services = [
  {
    title: "Social Media",
    image: "/services/social-media-marketing.webp",
    number: "01",
    description:
      "I create and manage social media campaigns that drive engagement, increase brand awareness, and generate leads for your business.",
  },
  {
    title: "Meta Ads",
    image: "/services/meta-ads.webp",
    number: "02",
    description:
      "I design and optimize Meta Ads campaigns that reach your target audience, increase conversions, and maximize ROI for your business.",
  },
  {
    title: "Graphic Design",
    image: "/services/graphic-design.webp",
    number: "03",
    description:
      "I create visually stunning graphics that communicate your brand message, enhance your marketing materials, and captivate your audience.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f5f5f1] px-5 py-24 md:px-10 md:py-32"
    >
      {/* =========================
          SECTION HEADING
      ========================== */}
      <div className=" mb-12 align-center text-center  md:mb-16">
        <div>
          <span
            className="
              mb-4
              block
              font-mono
              text-[0.65rem]
              uppercase
              tracking-[0.3em]
              text-neutral-500
              md:text-xs
            "
          >
            My Services
          </span>

          <h2
            className="
              text-[clamp(2.5rem,5vw,4.5rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.04em]
              text-neutral-900
            "
          >
            Six ways I grow your business.
          </h2>
        </div>
      </div>

      {/* =========================
          SERVICES GRID
      ========================== */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-4
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {services.map((service) => (
          <article
            key={service.title}
            className="
              group
              relative
              aspect-[1/1.15]
              cursor-pointer
              overflow-hidden
              rounded-xl
              bg-black
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            {/* =========================
                BACKGROUND IMAGE
            ========================== */}
            <img
              src={service.image}
              alt={service.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
            />

            {/* =========================
                OVERLAY
            ========================== */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/30
                to-black/5
                transition-all
                duration-500
                group-hover:via-black/50
              "
            />

            {/* =========================
                CARD NUMBER
            ========================== */}
            <span
              className="
                absolute
                right-5
                top-5
                z-10
                font-mono
                text-xs
                text-white/60
              "
            >
              {service.number}
            </span>

            {/* =========================
                CONTENT
            ========================== */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-10
                p-6
                md:p-7
              "
            >
              {/* Title */}
              <h3
                className="
                  text-2xl
                  font-medium
                  tracking-tight
                  text-white
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:-translate-y-2
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <div
                className="
                  max-h-0
                  translate-y-4
                  overflow-hidden
                  opacity-0
                  transition-all
                  duration-500
                  ease-out

                  group-hover:max-h-40
                  group-hover:translate-y-0
                  group-hover:opacity-100

                  md:max-w-md
                "
              >
                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-white/70
                  "
                >
                  {service.description}
                </p>

                {/* Read More */}
                <span
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-white
                  "
                >
                  Read More

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


// const services = [
//   {
//     title: "Social Media",
//     image: "/services/social-media-marketing.webp",
//     number: "01",
//     description: "I create and manage social media campaigns that drive engagement, increase brand awareness, and generate leads for your business."
//   },
//   {
//     title: "Meta Ads",
//     image: "/services/meta-ads.webp",
//     number: "02",
//     description: "I design and optimize Meta Ads campaigns that reach your target audience, increase conversions, and maximize ROI for your business."
//   },
//   {
//     title: "Graphic Design",
//     image: "/services/graphic-design.webp",
//     number: "03",
//     description: "I create visually stunning graphics that communicate your brand message, enhance your marketing materials, and captivate your audience."
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="services section">

//       <div className="section-heading ">

//         <div className="">
//           <span className="eyebrow">
//              My Services
//           </span>

//           <h2>
//             Six ways I grow
//             {/* <br /> */}
//             your business.
//           </h2>
//         </div>

//       </div>

// <div className="service-grid">

//   {services.map((service) => (
//     <div
//       key={service.title}
//       className="
//         group
//         relative
//         aspect-[1/1.15]
//         overflow-hidden
//         rounded-lg
//         bg-black
//         cursor-pointer
//         hover:shadow-2xl
//       "
//     >

//       {/* Background Image */}
//       <img
//         src={service.image}
//         alt={service.title}
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           object-cover
//           transition-transform
//           duration-700
//           ease-out
//           group-hover:scale-110
//         "
//       />

//       {/* Dark Overlay */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-t
//           from-black/90
//           via-black/30
//           to-black/10
//           transition-all
//           duration-500
//           group-hover:from-black/95
//           group-hover:via-black/50
//         "
//       />

//       {/* Content */}
//       <div
//         className="
//           absolute
//           inset-x-0
//           bottom-0
//           z-10
//           p-6
//           text-white
//         "
//       >

//         {/* Title */}
//         <h3
//           className="
//             text-xl
//             font-medium
//             transition-transform
//             duration-500
//             ease-out
//             group-hover:-translate-y-2
//           "
//         >
//           {service.title}
//         </h3>

//         <p
//   className="
//     invisible
//     max-w-sm
//     translate-y-4
//     text-sm
//     leading-relaxed
//     text-white/70
//     opacity-0

//     transition-all
//     duration-700
//     ease-out

//     group-hover:visible
//     group-hover:translate-y-0
//     group-hover:opacity-100
//   "
// >
//   {service.description}

//   <br />
//   <br />

//   <span>
//     Read More &rarr;
//   </span>
// </p>




//       </div>

//     </div>
//   ))}

// </div>


//       {/* <div className="service-grid">

//         {services.map((service) => (
//           <div className="service-card" key={service.title}>

//             <img
//               src={service.image}
//               alt={service.title}
//             />

//             <div className="card-overlay" />

            

//             <div className="service-title">
//               {service.title}
//             </div>


//             <div className="service-descripion opacity-0 hover:opacity-100 transition-opacity duration-300">
//               {service.description}
//             </div>

//           </div>
//         ))}

//       </div> */}

//     </section>
//   );
// }

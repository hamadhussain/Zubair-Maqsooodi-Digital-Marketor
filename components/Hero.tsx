
export default function Hero() {
  return (
    <section className="relative hero-section">
      {/* STICKY BACKGROUND */}
      <div className="sticky top-0 z-0 h-svh">
        {/* <div
          className="
            absolute inset-0
            bg-[url('/background.mp4')]
            bg-cover
            bg-center
          "
        /> */}
<div className="absolute inset-0 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/background1.mp4" type="video/mp4" />
  </video>
</div>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 -mt-[100svh]">
        {/* HOME */}
        <section
          id="home"
          className="
            flex h-svh
            items-center
            justify-center
            px-6
            text-center
            text-white
          "
        >
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/70">
              Muhammad Zubair Maqsoodi
            </p>

            <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              Digital Growth
              <br />
              <span className="text-emerald-400">
                & Creative Technology
              </span>
              <br />
              Specialist
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              Combining digital marketing, creative design, video
              production, and AI-powered solutions to help businesses
              build their presence and grow online.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:creativemuhammadzubair@gmail.com"
                className="
                  group inline-flex h-12
                  items-center gap-3
                  rounded-sm
                  bg-emerald-600
                  px-7
                  text-sm font-medium text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-700
                "
              >
                Let's Work Together
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="
                  inline-flex h-12
                  items-center justify-center
                  rounded-sm border border-white/30
                  px-7 text-sm font-medium text-white
                  transition-all duration-300
                  hover:border-emerald-400
                  hover:bg-white/10
                "
              >
                Explore My Expertise
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-xs">
              <span>Digital Strategy</span>
              <span className="text-emerald-400">•</span>
              <span>Creative Production</span>
              <span className="text-emerald-400">•</span>
              <span>AI Solutions</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="
            flex min-h-svh
            items-center
            justify-center
            px-6 py-20
            text-center
            text-white
          "
        >
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              What I Do
            </p>

            <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Digital Strategy Meets
              <br />
              Creative Innovation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              From building brand visibility and running performance
              campaigns to producing compelling visual content and
              developing AI-powered experiences, I help businesses
              turn ideas into meaningful digital growth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Social Media Marketing",
                "Meta Ads",
                "Graphic Design",
                "Video Editing",
                "AI-Powered Ads",
                "AI Development",
              ].map((service) => (
                <span
                  key={service}
                  className="
                    rounded-sm border border-white/15
                    bg-white/[0.04]
                    px-4 py-3
                    text-xs text-white/80
                    transition-all duration-300
                    hover:border-emerald-400/60
                    hover:bg-emerald-400/10
                    hover:text-white
                    md:text-sm
                  "
                >
                  {service}
                </span>
              ))}
            </div>

            <a
              href="mailto:creativemuhammadzubair@gmail.com"
              className="
                group mt-10 inline-flex h-12
                items-center gap-3
                rounded-sm bg-emerald-600
                px-7 text-sm font-medium text-white
                transition-all duration-300
                hover:-translate-y-1 hover:bg-emerald-700
              "
            >
              Discuss Your Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}




// export default function Hero() {
//   return (
//     <section className="relative hero-section">

//       {/* STICKY BACKGROUND */}
//       <div className="sticky top-0 z-0 h-svh">

//         <div
//           className="
//             absolute inset-0
//             bg-[url('/images/hero.jpg')]
//             bg-cover
//             bg-center
//           "
//         />

//         <div className="absolute inset-0 bg-black/50" />

//       </div>


//       {/* 200VH CONTENT */}
//       <div className="relative z-10 -mt-[100svh]">

//         {/* HERO */}
//         <section
//           id="home"
//           className="
//             flex h-svh
//             items-center
//             justify-center
//             px-6
//             text-center
//             text-white
//           "
//         >
//           <div>

//             <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/70">
//               Muhammad Zubair Maqsoodi
//             </p>

//             <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
//               Digital Marketing
//               <br />
//               Expert
//             </h1>

//             <p className="mt-7 text-sm text-white/70 md:text-base">
//               5+ Years of Experience in Digital Growth
//             </p>

//           </div>
//         </section>


//         {/* WHAT I DO */}
//         <section
//           className="
//             flex h-svh
//             items-center
//             justify-center
//             px-6
//             text-center
//             text-white
//           "
//         >
//           <div className="max-w-5xl">

//             <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
//               What I Do
//             </p>

//             <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.025em]">
//               Digital Marketing &amp; Creative Solutions
//               for Business Growth.
//             </h2>

//             <ul className="mt-8 flex flex-wrap justify-center gap-y-2 text-sm text-white/80">
//               <li>Social Media Marketing <span className="mx-3">•</span></li>
//               <li>Meta Ads <span className="mx-3">•</span></li>
//               <li>Graphic Design <span className="mx-3">•</span></li>
//               <li>Video Editing <span className="mx-3">•</span></li>
//               <li>AI Ads <span className="mx-3">•</span></li>
//               <li>AI Development</li>
//             </ul>

//             <button
//               className="
//                 mt-8 inline-flex h-12
//                 items-center gap-2
//                 rounded-sm
//                 bg-emerald-600
//                 px-6
//                 text-sm
//                 font-medium
//                 text-white
//                 transition
//                 hover:-translate-y-0.5
//                 hover:bg-emerald-700
//               "
//             >
//               Hire Me
//               <span className="transition-transform group-hover:translate-x-1">
//                 →
//               </span>
//             </button>

//           </div>
//         </section>

//       </div>

//     </section>
//   );
// }




// export default function Hero() {
//   return (
//  <div className="sticky top-0 z-10">
//    <section id="home" className="hero">

//       <div className="hero-overlay" />

//       <div className="hero-content">

//         <p className="hero-small">
//           Muhammad Zubair Maqsoodi
//         </p>

//         <h1>
//           Digital Marketing
//           <br />
//           Expert
//         </h1>

//         <p className="hero-description">
//           5+ Years of Experience in Digital Growth
//         </p>

//       </div>


//     </section>  
//    <div className="relative bg-red-400">
      

//       <div className="cinema-s2 flex h-svh flex-col items-center justify-center px-6 text-center">
//         <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/70 md:text-xs">
//           What I Do
//         </p>

//         <h2 className="mt-6 max-w-4xl font-display text-[clamp(1.9rem,4.6vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-white">
//           Digital Marketing &amp; Creative Solutions for Business Growth.
//         </h2>

//         <ul className="mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-y-1 text-sm text-white/80 md:text-[0.95rem]">
//           <li className="flex items-center">
//             Social Media Marketing
//             <span aria-hidden="true" className="mx-3 text-white/35 md:mx-4">
//               •
//             </span>
//           </li>
//           <li className="flex items-center">
//             Meta Ads
//             <span aria-hidden="true" className="mx-3 text-white/35 md:mx-4">
//               •
//             </span>
//           </li>
//           <li className="flex items-center">
//             Graphic Design
//             <span aria-hidden="true" className="mx-3 text-white/35 md:mx-4">
//               •
//             </span>
//           </li>
//           <li className="flex items-center">
//             Video Editing
//             <span aria-hidden="true" className="mx-3 text-white/35 md:mx-4">
//               •
//             </span>
//           </li>
//           <li className="flex items-center">
//             AI Ads
//             <span aria-hidden="true" className="mx-3 text-white/35 md:mx-4">
//               •
//             </span>
//           </li>
//           <li className="flex items-center">AI Development</li>
//         </ul>

//         <div className="hire-me-zone mt-6 px-4 py-5">
//           <button
//             type="button"
//             className="group/btn relative inline-flex items-center justify-center gap-2 font-medium rounded-sm overflow-hidden transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-out focus-visible:outline-none hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap bg-emerald text-white hover:bg-emerald-deep hover:shadow-[0_14px_34px_-12px_rgba(11,110,79,0.6)] h-12 px-6 text-[0.95rem]"
//           >
//             <span className="relative z-10">Hire Me</span>
//             <span
//               aria-hidden="true"
//               className="relative z-10 -mr-1 inline-block translate-x-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
//             >
//               →
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//  </div>
    
//   );
// }
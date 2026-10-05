export default function Hero() {
  return (
    <section className="relative hero-section">

      {/* STICKY BACKGROUND */}
      <div className="sticky top-0 z-0 h-svh">

        <div
          className="
            absolute inset-0
            bg-[url('/images/hero.jpg')]
            bg-cover
            bg-center
          "
        />

        <div className="absolute inset-0 bg-black/50" />

      </div>


      {/* 200VH CONTENT */}
      <div className="relative z-10 -mt-[100svh]">

        {/* HERO */}
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
          <div>

            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/70">
              Muhammad Zubair Maqsoodi
            </p>

            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              Digital Marketing
              <br />
              Expert
            </h1>

            <p className="mt-7 text-sm text-white/70 md:text-base">
              5+ Years of Experience in Digital Growth
            </p>

          </div>
        </section>


        {/* WHAT I DO */}
        <section
          className="
            flex h-svh
            items-center
            justify-center
            px-6
            text-center
            text-white
          "
        >
          <div className="max-w-5xl">

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
              What I Do
            </p>

            <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.025em]">
              Digital Marketing &amp; Creative Solutions
              for Business Growth.
            </h2>

            <ul className="mt-8 flex flex-wrap justify-center gap-y-2 text-sm text-white/80">
              <li>Social Media Marketing <span className="mx-3">•</span></li>
              <li>Meta Ads <span className="mx-3">•</span></li>
              <li>Graphic Design <span className="mx-3">•</span></li>
              <li>Video Editing <span className="mx-3">•</span></li>
              <li>AI Ads <span className="mx-3">•</span></li>
              <li>AI Development</li>
            </ul>

            <button
              className="
                mt-8 inline-flex h-12
                items-center gap-2
                rounded-sm
                bg-emerald-600
                px-6
                text-sm
                font-medium
                text-white
                transition
                hover:-translate-y-0.5
                hover:bg-emerald-700
              "
            >
              Hire Me
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>
        </section>

      </div>

    </section>
  );
}




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
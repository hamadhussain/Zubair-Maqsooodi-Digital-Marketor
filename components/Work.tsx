import Link from "next/link";
import { workPages } from "../utils/data/work";

function getCover(page: (typeof workPages)[number]) {
  const firstItem = page.sections[0].items[0];
  return "poster" in firstItem ? firstItem.poster : firstItem.src;
}

export default function Work() {
  return (
    <section id="work" className="work section">
      <div className="section-heading-work">
        <div>
          <span className="eyebrow">SELECTED WORK</span>

          <h2>
            A look at
            <br />
            the work.
          </h2>
        </div>
      </div>

      <div className="projects">
        {workPages.map((page, index) => (
          <Link
            key={page.slug}
            href={`/work/${page.slug}`}
            className="
              project
              bg-white
              group
              block
              cursor-pointer
              overflow-hidden
              rounded-2xl
              bg-white
              transition-shadow
              duration-500
              ease-out
              hover:shadow-2xl
            "
          >
            <div
              className="
                project-image
                overflow-hidden
                rounded-t-2xl
                bg-white
              "
            >
              <img
                src={'/portfolio-creative.webp'}
                alt={page.title}
                className="
                  block
                  h-full
                  w-full
                  scale-100
                  transform-gpu
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:-translate-y-[5px]
                  group-hover:translate-x-[5px]
                  group-hover:rotate-[-1deg]
                  group-hover:scale-105
                "
              />

            </div>

            <div
              className="
                projectinfo
                flex
                items-center
                justify-between
                p-4
                bg-white
              "
            >
              {/* <div> */}
                <h1 className=" font-bold">{page.label.toUpperCase()}</h1>

                {/* <h3>{page.title}</h3> */}
              {/* </div> */}

              <span
                className="
                  arrow
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


// "use client";

// import { useState } from "react";

// const projects = [
//   {
//     title: "Social Media Strategy",
//     category: "SOCIAL MEDIA",
//     image: "/portfolio-creative.webp",
//     number: "01",
//   },
//   {
//     title: "Website & Creative",
//     category: "WEB DESIGN",
//     image: "/portfolio-video.webp",
//     number: "02",
//   },
// ];

// export default function Work() {
//     const [hoveredProject, setHoveredProject] = useState<string | null>(null);

//   return (
//     <section id="work" className="work section">

//       <div className="section-heading-work">

//         <div>
//           <span className="eyebrow">
//             SELECTED WORK
//           </span>

//           <h2>
//             A look at
//             <br />
//             the work.
//           </h2>
//         </div>

//         <a href="#" className="view-all">
//           View all work →
//         </a>

//       </div>

//       <div className="projects  ">

//         {/* {projects.map((project) => (
//   <div
//     key={project.title}
//     className="
//       group
//       image-scale
//       overflow-hidden
//       cursor-pointer
//       rounded-2xl
//       bg-white
//       shadowinner
//       transition-shadow
//       duration-500
//       ease-in-out
//       hover:shadow-2xl
//     "
//   >
//     <div
//       className="
//         project-image
//         relative
//         overflow-hidden
//         rounded-t-2xl
//           transition-transform
//           duration-500
//           ease-out
//       "
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="
//           h-full
//           w-full
//           object-cover
//           transition-transform
//           duration-500
//           ease-out
//           group-hover:scale-105
//         "
//       />

//     </div>

//     <div
//       className="
//         projectinfo
//         flex
//         items-center
//         justify-between
//         p-4
//       "
//     >
//       <div>
//         <span>{project.category}</span>

//         <h3>{project.title}</h3>
//       </div>

//       <span
//         className="
//           arrow
//           transition-transform
//           duration-300
//           group-hover:translate-x-1
//           group-hover:-translate-y-1
//         "
//       >
//         ↗
//       </span>
//     </div>
//   </div>
// ))} */}



// {projects.map((project) => (
//   <div
//     key={project.title}
//     className="
//       group
//       image-scale
//       overflow-hidden
//       cursor-pointer
//       rounded-2xl
//       bg-white
//       shadowinner
//       transition-shadow
//       duration-500
//       ease-out
//       hover:shadow-2xl
//     "
//   >
//     {/* Project Image */}
//     <div
//       className="
//         project-image
        
//         overflow-hidden
//         rounded-t-2xl
//       "
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="
//           block
//           h-full
//           w-full
//           object-cover
//           scale-100
//           transform-gpu
//           transition-transform
//           duration-700
//           ease-out
//           group-hover:scale-105
//           group-hover:translate-y-[-5px]

//           group-hover:translate-x-[5px]
//           group-hover:rotate-[-1deg]
//           group-hover:shadow-lg
//           group-hover:shadow-black/20
//           group-hover:transition-transform
//           group-hover:scale-105
//         "
//       />

//       <div className="project-number">
//         {project.number}
//       </div>
//     </div>

//     {/* Project Info */}
//     <div
//       className="
//         projectinfo
//         flex
//         items-center
//         justify-between
//         p-4
//       "
//     >
//       <div>
//         <span>{project.category}</span>

//         <h3>{project.title}</h3>
//       </div>

//       <span
//         className="
//           arrow
//           transition-transform
//           duration-500
//           ease-out
//           group-hover:translate-x-1
//           group-hover:-translate-y-1
//         "
//       >
//         ↗
//       </span>
//     </div>
//   </div>
// ))}





//       </div>

//     </section>
//   );
// }

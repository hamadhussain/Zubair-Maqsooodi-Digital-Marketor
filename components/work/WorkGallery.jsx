"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const columnsMap = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

const aspectMap = {
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "2/3": "aspect-[2/3]",
  "9/16": "aspect-[9/16]",
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
};

function PlayIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-white/35">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function WorkGallery({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!selected) {
      return undefined;
    }

    const onKey = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  const scrollToSection = (id) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 pb-10 pt-4">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={`rounded-full border px-5 py-2.5 text-[14.5px] transition ${
              activeId === section.id
                ? "border-[#008c6a] bg-[#008c6a] text-white"
                : "border-[#dcdcd5] bg-white text-[#333] hover:bg-[#f5f5f1]"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {sections.map((section) => {
          const single = section.items.length === 1;
          const aspect = single ? "aspect-[16/10]" : aspectMap[section.aspect];
          const columns = single ? "grid-cols-1" : columnsMap[section.columns];

          return (
            <section
              key={section.id}
              id={section.id}
              className="grid scroll-mt-24 gap-8 py-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14"
            >
              <div className="self-start lg:sticky lg:top-28">
                <span className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#777]">
                  <span className="h-px w-10 bg-[#008c6a]" />
                  {section.label}
                </span>

                <h2 className="text-[clamp(30px,3.2vw,42px)] font-medium leading-[1.05] tracking-[-0.035em] text-[#111]">
                  {section.title}
                </h2>

                <p className="mt-5 max-w-[340px] text-[16px] leading-[1.75] text-[#666]">
                  {section.description}
                </p>
              </div>

              <div className={`grid gap-4 ${columns}`}>
                {section.items.map((item) =>
                  item.type === "video" ? (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`group relative block w-full overflow-hidden rounded-xl bg-[#222] text-left ${aspect}`}
                    >
                      <Image
                        src={item.poster}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <PlayIcon />
                      </span>
                      <span className="absolute bottom-3 left-4 right-4 text-[13.5px] font-medium text-white">
                        {item.title}
                      </span>
                    </button>
                  ) : (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`group relative block w-full overflow-hidden rounded-xl border border-[#dcdcd5] bg-white ${aspect}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </button>
                  )
                )}
              </div>
            </section>
          );
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-5"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-[22px] text-white transition hover:bg-white/30"
          >
            ×
          </button>

          <div onClick={(event) => event.stopPropagation()}>
            {selected.type === "video" ? (
              <video
                src={selected.src}
                poster={selected.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[92vw] rounded-lg bg-black"
              />
            ) : (
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
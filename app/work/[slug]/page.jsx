import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workPages, workCta, getWorkBySlug } from "../../../utils/data/work";
import { siteInfo } from "../../../utils/data/services";
import WorkGallery from "../../../components/work/WorkGallery";

const wrap = "mx-auto w-[min(1200px,calc(100%-40px))]";

export function generateStaticParams() {
  return workPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getWorkBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} Work | ${siteInfo.name}`,
    description: page.heroText,
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const page = getWorkBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-[#fafafa] text-[#111]">
      <section>
        <div className={`${wrap} pb-10 pt-10 md:pb-14`}>
          <nav className="mb-8 flex items-center gap-2 text-[14px] text-[#777]">
            <Link href="/" className="hover:text-[#111]">Home</Link>
            <span>/</span>
            <Link href="/#work" className="hover:text-[#111]">Work</Link>
            <span>/</span>
            <span className="text-[#111]">{page.title}</span>
          </nav>

          <span className="mb-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#777]">
            <span className="h-px w-10 bg-[#008c6a]" />
            {page.label}
          </span>

          <h1 className="max-w-[760px] text-[clamp(44px,6.2vw,80px)] font-medium leading-[1.02] tracking-[-0.045em]">
            {page.heroTitle}
          </h1>

          <p className="mt-7 max-w-[560px] text-[18px] leading-[1.7] text-[#666]">
            {page.heroText}
          </p>

          <Link
            href={`/services/${page.slug}`}
            className="mt-6 inline-block text-[15px] text-[#008c6a] transition hover:text-[#00a77e]"
          >
            View {page.title} service details →
          </Link>
        </div>
      </section>

      <section>
        <div className={`${wrap} pb-16`}>
          <WorkGallery sections={page.sections} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className={`${wrap} relative flex min-h-[560px] items-center py-20`}>
          <div className="relative z-10 max-w-[600px]">
            <span className="mb-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#777]">
              <span className="h-px w-10 bg-[#008c6a]" />
              {workCta.eyebrow}
            </span>

            <h2 className="text-[clamp(44px,6vw,76px)] font-medium leading-[1] tracking-[-0.045em]">
              {workCta.title}{" "}
              <span className="text-[#008c6a]">{workCta.highlight}</span>
            </h2>

            <p className="mt-6 max-w-[460px] text-[17px] leading-[1.7] text-[#666]">
              {workCta.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={siteInfo.contactPath}
                className="rounded-lg bg-[#008c6a] px-7 py-4 text-[14.5px] text-white transition hover:bg-[#00a77e]"
              >
                Create a meeting →
              </Link>
              <a
                href={siteInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#dcdcd5] bg-white/60 px-7 py-4 text-[14.5px] text-[#333] transition hover:bg-white"
              >
                Message on WhatsApp →
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[380px] md:block lg:right-[4%]">
            <Image
              src={workCta.image}
              alt={siteInfo.name}
              width={400}
              height={560}
              className="h-auto w-full object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
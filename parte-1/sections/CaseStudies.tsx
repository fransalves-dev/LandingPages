import SectionHeader from "@/components/Section-header";
import { Fragment } from "react";

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

function LearnMoreLink() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-[10px] text-[20px] leading-[28px] font-normal text-green transition-opacity duration-300 hover:opacity-75"
    >
      <span>Learn more</span>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6.5 14.5L14.5 6.5M14.5 6.5H7.5M14.5 6.5V13.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function CaseStudies() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[80px] bg-white py-[40px] px-[100px]">
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        titleBg="green"
      />

      <div className="w-full">
        <div className="grid w-full grid-cols-[1fr_auto_1fr_auto_1fr] gap-x-[64px] rounded-[45px] bg-dif-black px-[60px] pt-[70px] pb-[93px]">
          {caseStudies.map((item, index) => (
            <Fragment key={item.description}>
              <article className="flex flex-col justify-between gap-[20px]">
                <p className="text-[18px] leading-[1.2] font-normal text-white">
                  {item.description}
                </p>

                <LearnMoreLink />
              </article>

              {index !== caseStudies.length - 1 ? (
                <div className="h-full w-px bg-white/30" aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { CompanyData, TimelineItem, CultureValue } from "../types/about";

export const useAboutData = () => {
  const companyInfo: CompanyData = {
    established: "ESTABLISHED 2004",
    heroTitle: "Defining the Future of Corporate Excellence.",
    heroDescription:
      "GifarCorp is more than an industry leader; we are a collective of visionaries dedicated to building resilient infrastructure for a digital-first global economy.",
    mission:
      "To empower global enterprises through precision-engineered digital solutions and strategic consulting that ensures sustainable growth.",
    vision:
      "To be the definitive global anchor for digital transformation, setting the benchmark for corporate integrity and technological foresight.",
    ceoQuote:
      "GifarCorp isn't just about business; it's about the legacy we leave for the generations that follow.",
    ceoName: "Adrian Vance, CEO",
  };

  const timelineItems: TimelineItem[] = [
    {
      year: "2004",
      title: "Foundation",
      description:
        "GifarCorp established in a small Silicon Valley studio with a team of four developers and a bold vision for cloud connectivity.",
    },
    {
      year: "2008",
      title: "Global Expansion",
      description:
        "Opening our EMEA headquarters in London and reaching our first milestone of 500+ enterprise clients worldwide.",
    },
    {
      year: "2014",
      title: "The Pivot",
      description:
        "Restructuring our core service offerings to prioritize AI-driven analytics and cybersecurity at scale.",
    },
    {
      year: "2020",
      title: "Gifar One Launch",
      description:
        "Unveiling our flagship unified platform for enterprises, setting a new industry standard.",
    },
  ];

  const cultureValues: CultureValue[] = [
    {
      title: "Uncompromising Quality",
      description:
        "In every line of code and every strategic consultation, we aim for the highest possible standard. We believe 'good enough' is the enemy of excellence.",
      variant: "light",
    },
    {
      title: "Radical Transparency",
      description:
        "Honesty is our default. We share information openly to empower every team member to make informed decisions.",
      variant: "dark",
    },
    {
      title: "Intellectual Rigor",
      description:
        "We challenge assumptions and rely on data-driven logic to solve complex problems for our clients.",
      variant: "default",
    },
    {
      title: "Collective Intelligence",
      description:
        "We believe that the best solutions come from diverse perspectives working in absolute harmony.",
      variant: "accent",
    },
  ];

  return { companyInfo, timelineItems, cultureValues };
};

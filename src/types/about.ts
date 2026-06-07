export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CultureValue {
  title: string;
  description: string;
  variant: "default" | "dark" | "accent" | "light";
  icon?: string;
}

export interface CompanyData {
  established: string;
  heroTitle: string;
  heroDescription: string;
  mission: string;
  vision: string;
  ceoQuote: string;
  ceoName: string;
}

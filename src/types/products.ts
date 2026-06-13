export type Variant = {
  name: string;
  description: string;
  features: string[];
};

export type SubCategory = {
  name: string;
  icon?: string;
  description: string;
  features: string[];
  concept: string;
  structure?: string[];
  technicalHighlights?: string[];
  classification?: string[];
  variants?: Variant[];
  applications: string[];
};

export type Category = {
  id: string;
  nameEn: string;
  nameVn: string;
  image: string;
  icon: string;
  accent: string;
  shortDescription: string;
  description: string;
  catalogue: string;
  subcategories: SubCategory[];
  applications: string[];
};
import type { Category, SubCategory } from "@/types/products";
import productsData from "@/data/products.json";

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractEnglishName(name: string): string | null {
  const match = name.match(/\(([^)]+)\)/);
  return match ? match[1] : null;
}

/** Get the best slug for a subcategory: use English name from parentheses if available, otherwise slugify the full name */
export function getSubcategorySlug(subcategory: { name: string }): string {
  const englishName = extractEnglishName(subcategory.name);
  if (englishName) {
    return slugify(englishName);
  }
  return slugify(subcategory.name);
}

export function findProduct(categoryId: string, subcategorySlug: string) {
  const categories = (productsData.categories as unknown as Category[]) || [];
  const category = categories.find((c) => c.id === categoryId);
  if (!category) {
    console.log(`[findProduct] category "${categoryId}" not found`);
    return null;
  }

  console.log(`[findProduct] searching "${categoryId}/${subcategorySlug}"`);
  category.subcategories.forEach((s) => {
    const slug = getSubcategorySlug(s);
    console.log(`  - "${s.name}" → "${slug}" ${slug === subcategorySlug ? '✓ MATCH' : ''}`);
  });

  const subcategory = category.subcategories.find(
    (s) => getSubcategorySlug(s) === subcategorySlug
  );

  if (!subcategory) {
    console.log(`[findProduct] subcategory not found for slug "${subcategorySlug}"`);
    return null;
  }

  return { category, subcategory };
}

export function getSubcategoryLink(categoryId: string, subcategory: { name: string }): string {
  return `/products/${categoryId}/${getSubcategorySlug(subcategory)}`;
}
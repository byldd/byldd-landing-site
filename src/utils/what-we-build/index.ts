/**
 * /what-we-build content: category hubs, product pages, the module library,
 * the index page and Why Byldd. Lookups and module resolution live here so the
 * page components stay presentational.
 */

import { categories } from "./categories";
import { foundationModuleIds, moduleGroups, modules } from "./modules";
import type { Category, Module, ProductPage } from "./types";

export { categories, foundationModuleIds, moduleGroups, modules };
export { indexPage } from "./index-page";
export { whyByldd } from "./why-byldd";
export type * from "./types";

export const BASE_PATH = "/what-we-build";

const moduleOrder = new Map(modules.map((m, i) => [m.id, i]));
const moduleById = new Map(modules.map((m) => [m.id, m]));

function sortIds(ids: Iterable<string>): string[] {
  return [...new Set(ids)].sort((a, b) => (moduleOrder.get(a) ?? 0) - (moduleOrder.get(b) ?? 0));
}

export function getModules(ids: string[]): Module[] {
  return ids.map((id) => {
    const m = moduleById.get(id);
    if (!m) throw new Error(`Unknown module id: ${id}`);
    return m;
  });
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(
  categorySlug: string,
  productSlug: string,
): { category: Category; product: ProductPage } | undefined {
  const category = getCategory(categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  return category && product ? { category, product } : undefined;
}

/** Every module relevant to a category: its own extras plus every product's modules. */
export function categoryModuleIds(category: Category): string[] {
  return sortIds([...category.extraModuleIds, ...category.products.flatMap((p) => p.moduleIds)]);
}

/**
 * A product's own modules (in the order the product lists them, most important
 * first), then the rest of its category's modules.
 */
export function productModuleIds(category: Category, product: ProductPage) {
  const own = [...new Set(product.moduleIds)];
  const rest = categoryModuleIds(category).filter((id) => !own.includes(id));
  return { own, rest };
}

export function categoryPath(category: Pick<Category, "slug">) {
  return `${BASE_PATH}/${category.slug}`;
}

export function productPath(category: Pick<Category, "slug">, product: Pick<ProductPage, "slug">) {
  return `${BASE_PATH}/${category.slug}/${product.slug}`;
}

/** Every route in the section, for the sitemap. */
export function allWhatWeBuildPaths(): string[] {
  return [
    BASE_PATH,
    `${BASE_PATH}/why-byldd`,
    ...categories.flatMap((c) => [categoryPath(c), ...c.products.map((p) => productPath(c, p))]),
  ];
}

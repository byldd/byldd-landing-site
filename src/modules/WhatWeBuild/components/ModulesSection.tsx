import { Container, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { Sparkle } from "@/components/brand/marks";
import { foundationModuleIds, getModules, moduleGroups, type Module } from "@/utils/what-we-build";

function ModuleCard({ module }: { module: Module }) {
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-card border border-brand-ink/[0.07] bg-white p-5">
      <span className="flex items-center gap-2 font-semibold text-brand-ink">
        <Sparkle solid className="h-3 w-3 shrink-0 text-brand-purple" />
        {module.name}
      </span>
      <span className="text-sm leading-relaxed text-brand-ink/60">{module.description}</span>
    </div>
  );
}

function ModuleGrid({ ids }: { ids: string[] }) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
      {getModules(ids).map((m) => (
        <StaggerItem key={m.id}>
          <ModuleCard module={m} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Modules grouped under their module-group headings. */
function GroupedModules({ ids }: { ids: string[] }) {
  const mods = getModules(ids);
  return (
    <div className="flex flex-col gap-12">
      {moduleGroups.map((g) => {
        const inGroup = mods.filter((m) => m.group === g.id).map((m) => m.id);
        if (inGroup.length === 0) return null;
        return (
          <div key={g.id}>
            <Reveal className="mb-5">
              <h3 className="text-xl font-semibold text-brand-ink">{g.name}</h3>
              <p className="mt-1 text-sm text-brand-ink/55">{g.description}</p>
            </Reveal>
            <ModuleGrid ids={inGroup} />
          </div>
        );
      })}
    </div>
  );
}

function ChipList({ ids }: { ids: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {getModules(ids).map((m) => (
        <li
          key={m.id}
          className="rounded-full border border-brand-ink/10 bg-white px-3.5 py-1.5 text-sm text-brand-ink/75"
          title={m.description}
        >
          {m.name}
        </li>
      ))}
    </ul>
  );
}

function FoundationStrip() {
  return (
    <div className="rounded-card border border-brand-purple/15 bg-brand-lavender/40 p-6">
      <p className="font-semibold text-brand-ink">Included in every product we build</p>
      <div className="mt-4">
        <ChipList ids={foundationModuleIds} />
      </div>
    </div>
  );
}

/**
 * The pre-built modules section.
 * - index: the whole library, grouped (foundation included in the groups)
 * - category: every module relevant to the category, grouped, plus the foundation strip
 * - product: the product's own modules, the rest of its category's modules, plus the foundation strip
 */
export function ModulesSection(
  props:
    | { variant: "index"; ids: string[] }
    | { variant: "category"; ids: string[] }
    | { variant: "product"; own: string[]; rest: string[]; categoryShortName: string },
) {
  return (
    <section className="bg-brand-mist py-16 md:py-24">
      <Container className="flex flex-col gap-12">
        {props.variant === "product" ? (
          <>
            <div>
              <Reveal className="mb-6">
                <Eyebrow>Pre-built modules in this product</Eyebrow>
              </Reveal>
              <ModuleGrid ids={props.own} />
            </div>
            {props.rest.length > 0 && (
              <Reveal>
                <p className="mb-4 font-semibold text-brand-ink">Other {props.categoryShortName} modules</p>
                <ChipList ids={props.rest} />
              </Reveal>
            )}
            <Reveal>
              <FoundationStrip />
            </Reveal>
          </>
        ) : (
          <>
            <GroupedModules ids={props.ids} />
            {props.variant === "category" && (
              <Reveal>
                <FoundationStrip />
              </Reveal>
            )}
          </>
        )}
      </Container>
    </section>
  );
}

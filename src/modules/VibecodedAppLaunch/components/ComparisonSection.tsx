import { Container } from "@/components/ui";
import { comparisonContent as content } from "@/modules/VibecodedAppLaunch/content";

export function ComparisonSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <h2 className="display text-4xl text-brand-ink md:text-6xl">{content.heading}</h2>
        <p className="mt-5 text-lg text-brand-ink/60">{content.description}</p>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-brand-ink/10">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead className="bg-brand-mist text-xs uppercase tracking-wider text-brand-ink/55">
              <tr>{content.columns.map((heading, index) => <th key={heading || "blank"} className={`p-5 ${index === 4 ? "bg-brand-purple/10 text-brand-violet" : ""}`}>{heading}</th>)}</tr>
            </thead>
            <tbody>{content.rows.map((row) => <tr key={row[0]} className="border-t border-brand-ink/10">{row.map((cell, index) => <td key={`${row[0]}-${index}`} className={`p-5 ${index === 0 ? "font-semibold text-brand-ink" : index === 4 ? "bg-brand-purple/10 font-semibold text-brand-ink" : "text-brand-ink/60"}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

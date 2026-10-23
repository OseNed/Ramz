import type { ComponentType } from "react";
import {
  Bot,
  Cpu,
  Workflow,
  FileText,
  TriangleAlert,
  ShieldCheck,
  ClipboardCheck,
  FileSearch,
  BadgeCheck,
  Compass,
  Link2,
} from "lucide-react";
import { LogoMark } from "./logo";

type Item = { label: string; icon: ComponentType<{ className?: string; strokeWidth?: number }> };

const assetItems: Item[] = [
  { label: "AI Systems", icon: Cpu },
  { label: "Models", icon: Workflow },
  { label: "Agents", icon: Bot },
];

const engineItems: Item[] = [
  { label: "Discover", icon: Compass },
  { label: "Govern", icon: Link2 },
  { label: "Assess", icon: ClipboardCheck },
];

const governanceItems: Item[] = [
  { label: "Requirements", icon: FileText },
  { label: "Risks", icon: TriangleAlert },
  { label: "Controls", icon: ShieldCheck },
];

const outputItems: Item[] = [
  { label: "Assessments", icon: ClipboardCheck },
  { label: "Evidence", icon: FileSearch },
  { label: "Findings", icon: BadgeCheck },
];

/** The Ramz hero visual: a simple, static left-to-right flow — AI Assets
 * feed the Ramz engine (Discover, Govern, Assess), which connects to
 * Governance Context and, in turn, Actionable Outputs. Straight connectors,
 * no motion, no invented metrics — a structured diagram, not a flashy one. */
export function GovernanceGraph() {
  return (
    <div className="mx-auto hidden max-w-5xl rounded-3xl border border-hero-border bg-white/70 p-10 sm:block sm:p-12">
      <div className="grid grid-cols-[1fr_auto_1fr_1fr] items-stretch gap-x-6">
        <Column heading="AI assets" items={assetItems} align="right" lineClassName="bg-hairline" />

        <EngineCard />

        <Column
          heading="Governance context"
          items={governanceItems}
          align="left"
          lineClassName="bg-accent/30"
          connectorSide="left"
        />
        <Column
          heading="Actionable outputs"
          items={outputItems}
          align="left"
          lineClassName="bg-hairline"
          connectorSide="left"
        />
      </div>
    </div>
  );
}

function Column({
  heading,
  items,
  align,
  lineClassName,
  connectorSide = "right",
}: {
  heading: string;
  items: Item[];
  align: "left" | "right";
  lineClassName: string;
  connectorSide?: "left" | "right";
}) {
  return (
    <div className="flex flex-col">
      <div
        className={`mb-6 text-label font-medium tracking-[0.08em] text-muted uppercase ${align === "right" ? "text-right" : "text-left"}`}
      >
        {heading}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8">
        {items.map((item) => (
          <Row key={item.label} item={item} connectorSide={connectorSide} lineClassName={lineClassName} />
        ))}
      </div>
    </div>
  );
}

function Row({
  item,
  connectorSide,
  lineClassName,
}: {
  item: Item;
  connectorSide: "left" | "right";
  lineClassName: string;
}) {
  const Icon = item.icon;
  const pill = (
    <div className="flex h-11 w-[9.5rem] shrink-0 items-center gap-2 rounded-lg border border-hairline bg-white px-3 text-sm whitespace-nowrap text-ink shadow-[0_1px_2px_rgb(23_25_35/0.05)]">
      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
      {item.label}
    </div>
  );
  const line = <div className={`h-px flex-1 ${lineClassName}`} aria-hidden="true" />;

  return (
    <div className="flex items-center gap-0">
      {connectorSide === "left" ? (
        <>
          {line}
          <div className="w-3" />
          {pill}
        </>
      ) : (
        <>
          {pill}
          <div className="w-3" />
          {line}
        </>
      )}
    </div>
  );
}

function EngineCard() {
  return (
    <div className="flex w-44 flex-col rounded-2xl border border-accent/25 bg-accent/5 px-4 pb-6">
      {/* Same block height as the plain-text Column headings (text-label
          line + mb-6), so the three rows below align with the AI Assets /
          Governance Context / Actionable Outputs rows on either side. */}
      <div className="mb-6 flex items-center justify-center gap-1.5 text-label font-medium tracking-[0.08em] text-accent-deep uppercase">
        <LogoMark className="h-3 w-3" />
        Ramz engine
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8">
        {engineItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex h-11 items-center gap-2 rounded-lg border border-accent/20 bg-white px-3 text-sm text-ink shadow-[0_1px_2px_rgb(23_25_35/0.05)]"
            >
              <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mobileGroups: Array<{ heading: string; items: Item[] }> = [
  { heading: "AI assets", items: assetItems },
  { heading: "Governance context", items: governanceItems },
  { heading: "Actionable outputs", items: outputItems },
];

/** Mobile hero visual: a dedicated vertical composition — the Ramz engine
 * at top, a single trunk line branching into three labeled groups below —
 * not a shrunk version of the desktop flow. */
export function GovernanceGraphMobile() {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center rounded-3xl border border-hero-border bg-white/70 px-5 py-10 sm:hidden">
      <div className="flex w-full flex-col items-center rounded-2xl border border-accent/25 bg-accent/5 px-4 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-white">
          <LogoMark className="h-5 w-5 text-ink" />
        </div>
        <span className="mt-2 text-xs font-medium tracking-[0.01em] text-muted">Ramz engine</span>
        <div className="mt-4 flex w-full flex-wrap justify-center gap-2">
          {engineItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-1.5 rounded-lg border border-accent/20 bg-white px-2.5 py-1.5 text-xs text-ink"
              >
                <Icon className="h-3 w-3 text-accent" strokeWidth={1.75} />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {mobileGroups.map((group) => (
        <div key={group.heading} className="flex w-full flex-col items-center">
          <div className="h-6 w-px bg-gradient-to-b from-hero-border to-hairline" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.01em] text-muted">{group.heading}</span>
          <div className="mt-3 flex w-full flex-wrap justify-center gap-2">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 rounded-lg border border-hairline bg-white px-2.5 py-1.5 text-xs text-ink shadow-[0_1px_2px_rgb(23_25_35/0.05)]"
                >
                  <Icon className="h-3 w-3 text-accent" strokeWidth={1.75} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

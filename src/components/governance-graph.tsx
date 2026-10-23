import { Bot, Cpu, Workflow, FileText, TriangleAlert, ShieldCheck, ClipboardCheck, FileSearch, BadgeCheck } from "lucide-react";
import { LogoMark } from "./logo";

type Node = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  x: number;
  y: number;
  align: "left" | "right";
};

const VIEW_W = 960;
const VIEW_H = 600;
const HUB = { x: 480, y: 300 };

const assetNodes: Node[] = [
  { id: "systems", label: "AI Systems", icon: Cpu, x: 140, y: 150, align: "left" },
  { id: "models", label: "Models", icon: Workflow, x: 90, y: 300, align: "left" },
  { id: "agents", label: "Agents", icon: Bot, x: 140, y: 450, align: "left" },
];

const governanceNodes: Node[] = [
  { id: "requirements", label: "Requirements", icon: FileText, x: 820, y: 110, align: "right" },
  { id: "risks", label: "Risks", icon: TriangleAlert, x: 870, y: 260, align: "right" },
  { id: "controls", label: "Controls", icon: ShieldCheck, x: 820, y: 410, align: "right" },
];

const outputNodes: Node[] = [
  { id: "assessments", label: "Assessments", icon: ClipboardCheck, x: 660, y: 520, align: "right" },
  { id: "evidence", label: "Evidence", icon: FileSearch, x: 480, y: 555, align: "right" },
  { id: "findings", label: "Findings", icon: BadgeCheck, x: 300, y: 520, align: "left" },
];

const allNodes = [...assetNodes, ...governanceNodes, ...outputNodes];

// Primary edges: every node to the hub. Cross-links: a few direct
// relationships that cut across clusters, so the diagram reads as a graph
// rather than three spokes into a center.
const hubEdges = allNodes.map((n) => [HUB, { x: n.x, y: n.y }] as const);
const crossEdges: Array<readonly [{ x: number; y: number }, { x: number; y: number }]> = [
  [{ x: 140, y: 450 }, { x: 820, y: 410 }], // Agents → Controls
  [{ x: 870, y: 260 }, { x: 300, y: 520 }], // Risks → Findings
  [{ x: 90, y: 300 }, { x: 660, y: 520 }], // Models → Assessments
];

function curve(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  // Bow the curve slightly toward the hub side for a woven, non-linear feel.
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const bow = Math.max(-40, Math.min(40, (dx + dy) * 0.06));
  return `M ${from.x} ${from.y} Q ${mx + bow} ${my - bow} ${to.x} ${to.y}`;
}

function pct(v: number, total: number) {
  return `${(v / total) * 100}%`;
}

/** The signature Ramz hero visual: a radial governance graph connecting AI
 * assets, governance context, and actionable outputs around a central hub —
 * deliberately not a linear pipeline. Edges are SVG; node pills are HTML for
 * crisp text and icons, positioned with the same coordinate system as
 * percentages so the whole thing scales fluidly. Designed for the cool-grey
 * hero: white node surfaces with refined borders, blue-grey connectors,
 * indigo reserved for the hub and the cross-cluster relationships. */
export function GovernanceGraph() {
  return (
    <div className="mx-auto hidden max-w-5xl rounded-3xl border border-hero-border bg-white/70 p-10 sm:block sm:p-14">
      <div className="relative mx-auto aspect-[960/600] w-full max-w-4xl">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <g stroke="var(--ramz-graph-line)" strokeWidth="1.25" fill="none">
            {hubEdges.map(([from, to], i) => (
              <path key={`hub-${i}`} d={curve(from, to)} />
            ))}
          </g>
          <g stroke="rgb(79 70 229 / 0.45)" strokeWidth="1.5" fill="none" strokeDasharray="3 5">
            {crossEdges.map(([from, to], i) => (
              <path key={`cross-${i}`} d={curve(from, to)} />
            ))}
          </g>
          {/* Pulses travel along two hub edges to suggest live, continuous
              governance. SMIL animations aren't covered by the CSS
              prefers-reduced-motion rule in globals.css, so this group is
              hidden directly under that preference. */}
          <g fill="var(--ramz-accent)" className="motion-reduce:hidden">
            <circle r="3.5">
              <animateMotion
                dur="4.5s"
                repeatCount="indefinite"
                path={curve(HUB, { x: assetNodes[2].x, y: assetNodes[2].y })}
              />
            </circle>
            <circle r="3.5">
              <animateMotion
                dur="5.5s"
                repeatCount="indefinite"
                path={curve(HUB, { x: governanceNodes[1].x, y: governanceNodes[1].y })}
              />
            </circle>
          </g>
        </svg>

        {/* Hub */}
        <div
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5"
          style={{ left: pct(HUB.x, VIEW_W), top: pct(HUB.y, VIEW_H) }}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/25 bg-white shadow-[0_1px_2px_rgb(23_25_35/0.06),0_16px_32px_-18px_rgb(79_70_229/0.35)]">
            <LogoMark className="h-9 w-9 text-ink" />
          </div>
          <span className="text-label font-medium tracking-[0.08em] text-ink uppercase">
            Governance graph
          </span>
        </div>

        {allNodes.map((node) => (
          <NodePill key={node.id} node={node} />
        ))}

        <ClusterLabel x={140} y={60} text="AI assets" />
        <ClusterLabel x={820} y={50} text="Governance context" />
        <ClusterLabel x={480} y={597} text="Actionable outputs" anchor="middle" />
      </div>
    </div>
  );
}

function NodePill({ node }: { node: Node }) {
  const Icon = node.icon;
  return (
    <div
      className="absolute z-10 flex -translate-y-1/2 items-center gap-2 rounded-lg border border-hairline bg-white px-3 py-2 text-sm whitespace-nowrap text-ink shadow-[0_1px_2px_rgb(23_25_35/0.05)]"
      style={{
        left: pct(node.x, VIEW_W),
        top: pct(node.y, VIEW_H),
        transform: `translate(${node.align === "left" ? "-100%" : "0%"}, -50%)`,
      }}
    >
      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
      {node.label}
    </div>
  );
}

const mobileClusters: Array<{ label: string; nodes: Node[] }> = [
  { label: "AI assets", nodes: assetNodes },
  { label: "Governance context", nodes: governanceNodes },
  { label: "Actionable outputs", nodes: outputNodes },
];

/** Mobile hero visual: a dedicated vertical composition — hub at top, a
 * single trunk line branching into three labeled clusters below — rather
 * than a shrunk version of the desktop radial graph. */
export function GovernanceGraphMobile() {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center rounded-3xl border border-hero-border bg-white/70 px-5 py-10 sm:hidden">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-white shadow-[0_1px_2px_rgb(23_25_35/0.06),0_12px_24px_-14px_rgb(79_70_229/0.35)]">
        <LogoMark className="h-6 w-6 text-ink" />
      </div>
      <span className="mt-2.5 text-label font-medium tracking-[0.08em] text-ink uppercase">
        Governance graph
      </span>

      {mobileClusters.map((cluster, i) => (
        <div key={cluster.label} className="flex w-full flex-col items-center">
          <div className="h-6 w-px bg-gradient-to-b from-hero-border to-hairline" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.01em] text-muted">{cluster.label}</span>
          <div className="mt-3 flex w-full flex-wrap justify-center gap-2">
            {cluster.nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="flex items-center gap-1.5 rounded-lg border border-hairline bg-white px-2.5 py-1.5 text-xs text-ink shadow-[0_1px_2px_rgb(23_25_35/0.05)]"
                >
                  <Icon className="h-3 w-3 text-accent" strokeWidth={1.75} />
                  {node.label}
                </div>
              );
            })}
          </div>
          {i < mobileClusters.length - 1 && (
            <div className="mt-5 h-px w-10 bg-hairline" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

function ClusterLabel({
  x,
  y,
  text,
  anchor = "start",
}: {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "middle";
}) {
  return (
    <span
      className="absolute text-label font-medium tracking-[0.08em] text-muted uppercase"
      style={{
        left: pct(x, VIEW_W),
        top: pct(y, VIEW_H),
        transform: anchor === "middle" ? "translate(-50%, -50%)" : "translate(-100%, -50%)",
      }}
    >
      {text}
    </span>
  );
}

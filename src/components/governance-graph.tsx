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
  { id: "evidence", label: "Evidence", icon: FileSearch, x: 480, y: 560, align: "right" },
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
 * percentages so the whole thing scales fluidly. */
export function GovernanceGraph() {
  return (
    <div className="relative mx-auto hidden aspect-[960/600] w-full max-w-4xl sm:block">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="rgb(255 255 255 / 0.14)" strokeWidth="1.5" fill="none">
          {hubEdges.map(([from, to], i) => (
            <path key={`hub-${i}`} d={curve(from, to)} />
          ))}
        </g>
        <g stroke="rgb(73 79 223 / 0.55)" strokeWidth="1.5" fill="none" strokeDasharray="3 5">
          {crossEdges.map(([from, to], i) => (
            <path key={`cross-${i}`} d={curve(from, to)} />
          ))}
        </g>
        {/* Pulses travel along two hub edges to suggest live, continuous governance. */}
        {/* SMIL animations aren't covered by the CSS prefers-reduced-motion
            rule in globals.css, so this group is hidden directly. */}
        <g fill="#8E93F2" className="motion-reduce:hidden">
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
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
        style={{ left: pct(HUB.x, VIEW_W), top: pct(HUB.y, VIEW_H) }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_0_1px_rgb(73_79_223/0.25),0_30px_60px_-20px_rgb(73_79_223/0.45)]">
          <LogoMark className="h-9 w-9 text-white" />
        </div>
        <span className="text-label uppercase tracking-[0.08em] text-on-dark-muted">
          Governance graph
        </span>
      </div>

      {[...assetNodes, ...governanceNodes, ...outputNodes].map((node) => (
        <NodePill key={node.id} node={node} />
      ))}

      <ClusterLabel x={140} y={60} text="AI assets" />
      <ClusterLabel x={820} y={50} text="Governance context" />
      <ClusterLabel x={480} y={596} text="Actionable outputs" anchor="middle" />
    </div>
  );
}

function NodePill({ node }: { node: Node }) {
  const Icon = node.icon;
  return (
    <div
      className="absolute flex -translate-y-1/2 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm whitespace-nowrap text-white/90 backdrop-blur-sm"
      style={{
        left: pct(node.x, VIEW_W),
        top: pct(node.y, VIEW_H),
        transform: `translate(${node.align === "left" ? "-100%" : "0%"}, -50%)`,
      }}
    >
      <Icon className="h-3.5 w-3.5 text-[#9499F5]" strokeWidth={1.75} />
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
    <div className="mx-auto flex max-w-xs flex-col items-center sm:hidden">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_0_1px_rgb(73_79_223/0.25),0_20px_40px_-15px_rgb(73_79_223/0.45)]">
        <LogoMark className="h-6 w-6 text-white" />
      </div>
      <span className="mt-2 text-label uppercase tracking-[0.08em] text-on-dark-muted">
        Governance graph
      </span>

      {mobileClusters.map((cluster, i) => (
        <div key={cluster.label} className="flex w-full flex-col items-center">
          <div
            className="h-6 w-px bg-gradient-to-b from-white/25 to-white/10"
            aria-hidden="true"
          />
          <span className="text-xs font-medium tracking-[0.01em] text-white/80">
            {cluster.label}
          </span>
          <div className="mt-3 flex w-full flex-wrap justify-center gap-2">
            {cluster.nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1.5 text-xs text-white/90"
                >
                  <Icon className="h-3 w-3 text-[#9499F5]" strokeWidth={1.75} />
                  {node.label}
                </div>
              );
            })}
          </div>
          {i < mobileClusters.length - 1 && (
            <div className="mt-5 h-px w-10 bg-white/10" aria-hidden="true" />
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
      className="absolute text-label uppercase tracking-[0.08em] text-on-dark-muted"
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

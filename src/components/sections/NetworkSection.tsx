"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { useTheme } from "../ThemeContext";

const VIEW_W = 611.86;
const VIEW_H = 695.7;

/* -------------------- NODES -------------------- */
const nodes = [
  { id: "delhi", name: "Delhi", state: "NCR", cx: 188, cy: 212, online: 2842, trust: 99.2, latency: 12 },
  { id: "kolkata", name: "Kolkata", state: "WB", cx: 410, cy: 340, online: 892, trust: 94.5, latency: 22, dimmed: true },
  { id: "mumbai", name: "Mumbai", state: "MH", cx: 100, cy: 433, online: 1240, trust: 98.0, latency: 18 },
  { id: "hyderabad", name: "Hyderabad", state: "TS", cx: 219, cy: 465, online: 1560, trust: 98.5, latency: 15, dimmed: true },
  { id: "bangalore", name: "Bangalore", state: "KA", cx: 200, cy: 562, online: 3105, trust: 99.8, latency: 8 },
];

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return `M ${x1} ${y1} Q ${mx} ${my - 60} ${x2} ${y2}`;
}

export default function NetworkSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const { isMuted } = useTheme(); // muted = light mode

  const [rotation, setRotation] = useState({ x: 45, z: -15 });
  const [hovered, setHovered] = useState<string | null>(null);

  /* -------------------- PARALLAX -------------------- */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setRotation({
        x: 45 + (e.clientY / window.innerHeight - 0.5) * 5,
        z: -15 + (e.clientX / window.innerWidth - 0.5) * 5,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* -------------------- STATS -------------------- */
  const stats = useMemo(() => {
    const totalOnline = nodes.reduce((a, b) => a + b.online, 0);
    const avgLatency = nodes.reduce((a, b) => a + b.latency, 0) / nodes.length;
    const avgTrust = nodes.reduce((a, b) => a + b.trust, 0) / nodes.length;
    const connections = (nodes.length * (nodes.length - 1)) / 2;

    return {
      totalOnline,
      avgLatency: avgLatency.toFixed(1),
      avgTrust: avgTrust.toFixed(2),
      connections,
    };
  }, []);

  const hoveredNode = nodes.find((n) => n.id === hovered);

  return (
    <section
      id="network"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex py-10"
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${
          isMuted
            ? "bg-[radial-gradient(circle_at_center,rgba(255,78,78,0.06)_0%,transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(255,78,78,0.10)_0%,transparent_70%)]"
        }`}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        className="absolute top-6 left-6 z-30"
      >
        <h2 className={`font-display text-2xl tracking-widest uppercase ${isMuted ? "text-charcoal" : "text-white"}`}>
          Network<span className="text-[#FF4E4E]">Map</span>
        </h2>
        <div className="text-xs tracking-widest font-mono text-gray-500 mt-1">
          LIVE FEED // DECENTRALIZED
        </div>
      </motion.header>

      {/* ================= MAP ================= */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-[900px] aspect-[611.86/695.7]"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg)`,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
        >
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="flowGrad">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#ff4e4e" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              {/* Glow filter for dark mode */}
              <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#ff4e4e" floodOpacity="0.4" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <image 
              href="/india.svg" 
              width={VIEW_W} 
              height={VIEW_H} 
              opacity={isMuted ? 0.28 : 0.5} 
              filter={isMuted ? "none" : "url(#mapGlow)"}
            />

            {/* Connections */}
            {nodes.map((a, i) =>
              nodes.slice(i + 1).map((b, j) => (
                <g key={`${a.id}-${b.id}`}>
                  <path
                    d={curvePath(a.cx, a.cy, b.cx, b.cy)}
                    stroke={isMuted ? "rgba(255,78,78,0.20)" : "rgba(255,78,78,0.15)"}
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d={curvePath(a.cx, a.cy, b.cx, b.cy)}
                    stroke="url(#flowGrad)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="6 14"
                    className="network-flow"
                    style={{ animationDelay: `${(i + j) * 0.35}s` }}
                  />
                </g>
              ))
            )}

            {/* Nodes */}
            {nodes.map((n) => (
              <g key={n.id}>
                <circle cx={n.cx} cy={n.cy} r={14} fill="rgba(255,78,78,0.2)" />
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r={4}
                  fill="#ff4e4e"
                  style={{ filter: "drop-shadow(0 0 8px #ff4e4e)", cursor: "pointer" }}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                />
              </g>
            ))}
          </svg>

          {/* ================= TOOLTIP ================= */}
          {hoveredNode && (
            <div
              className={`absolute z-40 w-48 p-3 rounded pointer-events-none ${
                isMuted ? "bg-white border border-gray-200 text-charcoal shadow-lg" : "glass-panel text-white"
              }`}
              style={{
                left: `${(hoveredNode.cx / VIEW_W) * 100}%`,
                top: `${(hoveredNode.cy / VIEW_H) * 100}%`,
                transform: "translate(-50%, -150%)",
              }}
            >
              <h3 className="font-display uppercase tracking-wider mb-1">
                {hoveredNode.name}
                <span className="text-xs text-[#FF4E4E] ml-1">{hoveredNode.state}</span>
              </h3>
              <div className={`h-px my-2 ${isMuted ? "bg-gray-200" : "bg-white/20"}`} />
              <div className="text-xs space-y-1">
                <div className="flex justify-between"><span>Nodes</span><span className="font-mono">{hoveredNode.online.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Trust</span><span className="text-green-600 font-mono">{hoveredNode.trust}%</span></div>
                <div className="flex justify-between"><span>Latency</span><span className="text-[#FF4E4E] font-mono">{hoveredNode.latency} ms</span></div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* ================= STATS PANEL ================= */}
      <motion.aside
        initial={{ x: 80, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        className={`hidden lg:flex w-[320px] flex-col justify-between px-6 py-12 border-l ${
          isMuted ? "border-gray-200 bg-white/40" : "border-white/10"
        }`}
      >
        <div className="space-y-6">
          <h3 className={`text-xs uppercase tracking-widest ${isMuted ? "text-gray-600" : "text-gray-400"}`}>
            Network Status
          </h3>

          <Stat label="Total Online Nodes" value={stats.totalOnline.toLocaleString()} muted={isMuted} />
          <Stat label="Average Latency" value={`${stats.avgLatency} ms`} muted={isMuted} />
          <Stat label="Average Trust" value={`${stats.avgTrust} %`} muted={isMuted} />
          <Stat label="Active Connections" value={stats.connections} muted={isMuted} />
        </div>

        <div className={`p-4 rounded-lg border ${
          isMuted
            ? "bg-green-50 border-green-200"
            : "bg-green-500/10 border-green-500/20"
        }`}>
          <div className={`text-sm font-mono ${isMuted ? "text-green-700" : "text-green-400"}`}>
            ● NETWORK STABLE
          </div>
          <div className={`text-xs mt-1 ${isMuted ? "text-green-600" : "text-gray-400"}`}>
            No anomalies detected
          </div>
        </div>
      </motion.aside>

      {/* ================= DISCLAIMER ================= */}
      <div className={`absolute bottom-4 right-6 text-[10px] italic ${isMuted ? "text-gray-400" : "text-gray-500"}`}>
        *Data shown represents projected network growth
      </div>

      {/* ================= FLOW ================= */}
      <style jsx global>{`
        .network-flow {
          animation: flow 3s linear infinite;
          opacity: 0.6;
        }
        @keyframes flow {
          to {
            stroke-dashoffset: -120;
          }
        }
      `}</style>
    </section>
  );
}

/* -------------------- STAT ROW -------------------- */
function Stat({
  label,
  value,
  muted,
}: {
  label: string;
  value: string | number;
  muted: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-xs ${muted ? "text-gray-600" : "text-gray-400"}`}>
        {label}
      </span>
      <span className={`text-lg font-mono ${muted ? "text-charcoal" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

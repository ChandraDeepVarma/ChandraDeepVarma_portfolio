export const THEMES = [
  // --- DARK THEMES ---
  {
    id: "midnight-violet",
    name: "Midnight Violet",
    description: "Deep space aesthetic with glowing violet and electric cyan accents.",
    colors: {
      bg: "#07070f",
      bg2: "#0d0d1a",
      surface: "#111127",
      surface2: "#16162e",
      primary: "#7c3aed",
      primaryLight: "#a78bfa",
      secondary: "#06b6d4",
      tertiary: "#3b82f6",
      glow1: "rgba(124, 58, 237, 0.3)",
      glow2: "rgba(6, 182, 212, 0.2)",
      primaryRgb: "124, 58, 237",
      secondaryRgb: "6, 182, 212",
      text: "#f1f5f9",
      muted: "#64748b",
      muted2: "#94a3b8",
      border: "rgba(255, 255, 255, 0.07)"
    }
  },
  {
    id: "emerald-aurora",
    name: "Emerald Aurora",
    description: "Matrix-inspired terminal style with bright mint and neon cyan accents.",
    colors: {
      bg: "#040807",
      bg2: "#091210",
      surface: "#0f1f1b",
      surface2: "#142924",
      primary: "#10b981",
      primaryLight: "#34d399",
      secondary: "#00f5ff",
      tertiary: "#0ea5e9",
      glow1: "rgba(16, 185, 129, 0.3)",
      glow2: "rgba(0, 245, 255, 0.2)",
      primaryRgb: "16, 185, 129",
      secondaryRgb: "0, 245, 255",
      text: "#f1f5f9",
      muted: "#64748b",
      muted2: "#94a3b8",
      border: "rgba(255, 255, 255, 0.07)"
    }
  },
  {
    id: "oceanic-breeze",
    name: "Oceanic Breeze",
    description: "Clean marine theme with deep sky blues, teals, and soft indigo glows.",
    colors: {
      bg: "#050b14",
      bg2: "#0a1526",
      surface: "#0e2038",
      surface2: "#132a4a",
      primary: "#0284c7",
      primaryLight: "#38bdf8",
      secondary: "#0d9488",
      tertiary: "#4f46e5",
      glow1: "rgba(2, 132, 199, 0.3)",
      glow2: "rgba(13, 148, 136, 0.2)",
      primaryRgb: "2, 132, 199",
      secondaryRgb: "13, 148, 136",
      text: "#f1f5f9",
      muted: "#64748b",
      muted2: "#94a3b8",
      border: "rgba(255, 255, 255, 0.07)"
    }
  },
  {
    id: "sunset-amber",
    name: "Sunset Amber",
    description: "Warm crimson and bright gold aesthetics reflecting an evening sky.",
    colors: {
      bg: "#0d0705",
      bg2: "#1a0f0a",
      surface: "#24160f",
      surface2: "#2e1c14",
      primary: "#ea580c",
      primaryLight: "#f97316",
      secondary: "#eab308",
      tertiary: "#ef4444",
      glow1: "rgba(234, 88, 12, 0.3)",
      glow2: "rgba(234, 179, 8, 0.2)",
      primaryRgb: "234, 88, 12",
      secondaryRgb: "234, 179, 8",
      text: "#f1f5f9",
      muted: "#64748b",
      muted2: "#94a3b8",
      border: "rgba(255, 255, 255, 0.07)"
    }
  },
  {
    id: "rose-obsidian",
    name: "Rose Obsidian",
    description: "Sophisticated deep pinks, violet accents, and rich metallic backdrops.",
    colors: {
      bg: "#090507",
      bg2: "#140a10",
      surface: "#1f0f18",
      surface2: "#291420",
      primary: "#db2777",
      primaryLight: "#f472b6",
      secondary: "#8b5cf6",
      tertiary: "#f43f5e",
      glow1: "rgba(219, 39, 119, 0.3)",
      glow2: "rgba(139, 92, 246, 0.2)",
      primaryRgb: "219, 39, 119",
      secondaryRgb: "139, 92, 246",
      text: "#f1f5f9",
      muted: "#64748b",
      muted2: "#94a3b8",
      border: "rgba(255, 255, 255, 0.07)"
    }
  },
  {
    id: "neon-cyberpunk",
    name: "Neon Cyberpunk",
    description: "Vaporwave theme with high contrast hot pinks, cyan, and deep purple.",
    colors: {
      bg: "#0a050f",
      bg2: "#150b21",
      surface: "#201033",
      surface2: "#2a1545",
      primary: "#ff007f",
      primaryLight: "#ff66b2",
      secondary: "#00ffff",
      tertiary: "#7000ff",
      glow1: "rgba(255, 0, 127, 0.3)",
      glow2: "rgba(0, 255, 255, 0.2)",
      primaryRgb: "255, 0, 127",
      secondaryRgb: "0, 255, 255",
      text: "#f1f5f9",
      muted: "#64748b",
      muted2: "#94a3b8",
      border: "rgba(255, 255, 255, 0.07)"
    }
  },

  // --- LIGHT THEMES ---
  {
    id: "light-quartz",
    name: "Light Quartz",
    description: "Sleek slate-gray background with vibrant violet and soft teal glows.",
    colors: {
      bg: "#f8fafc",
      bg2: "#f1f5f9",
      surface: "#ffffff",
      surface2: "#e2e8f0",
      primary: "#7c3aed",
      primaryLight: "#9061f9",
      secondary: "#06b6d4",
      tertiary: "#2563eb",
      glow1: "rgba(124, 58, 237, 0.08)",
      glow2: "rgba(6, 182, 212, 0.05)",
      primaryRgb: "124, 58, 237",
      secondaryRgb: "6, 182, 212",
      text: "#0f172a",
      muted: "#475569",
      muted2: "#64748b",
      border: "rgba(15, 23, 42, 0.08)"
    }
  },
  {
    id: "light-oceanic",
    name: "Oceanic Breeze (Light)",
    description: "Serene sky blue background with deep teal and professional blue accents.",
    colors: {
      bg: "#f0f9ff",
      bg2: "#e0f2fe",
      surface: "#ffffff",
      surface2: "#bae6fd",
      primary: "#0284c7",
      primaryLight: "#0ea5e9",
      secondary: "#0d9488",
      tertiary: "#4f46e5",
      glow1: "rgba(2, 132, 199, 0.08)",
      glow2: "rgba(13, 148, 136, 0.05)",
      primaryRgb: "2, 132, 199",
      secondaryRgb: "13, 148, 136",
      text: "#032d60",
      muted: "#334155",
      muted2: "#475569",
      border: "rgba(3, 45, 96, 0.08)"
    }
  },
  {
    id: "light-sakura",
    name: "Sakura Blossom (Light)",
    description: "Elegant pastel rose background with deep crimson and rich violet highlights.",
    colors: {
      bg: "#fff5f7",
      bg2: "#ffe4e6",
      surface: "#ffffff",
      surface2: "#fecdd3",
      primary: "#db2777",
      primaryLight: "#ec4899",
      secondary: "#7c3aed",
      tertiary: "#e11d48",
      glow1: "rgba(219, 39, 119, 0.08)",
      glow2: "rgba(124, 58, 237, 0.05)",
      primaryRgb: "219, 39, 119",
      secondaryRgb: "124, 58, 237",
      text: "#4c0519",
      muted: "#4d4d4d",
      muted2: "#5e5e5e",
      border: "rgba(76, 5, 25, 0.08)"
    }
  }
];

export function getTheme(themeId) {
  return THEMES.find((t) => t.id === themeId) || THEMES[0];
}

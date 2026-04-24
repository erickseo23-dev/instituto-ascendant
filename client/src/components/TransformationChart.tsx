import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

const spheres = [
  { sphere: "Autoconfianza", antes: 38, despues: 89 },
  { sphere: "Relaciones", antes: 42, despues: 87 },
  { sphere: "Abundancia", antes: 35, despues: 84 },
  { sphere: "Salud & Energía", antes: 40, despues: 88 },
  { sphere: "Propósito", antes: 33, despues: 91 },
  { sphere: "Intuición", antes: 45, despues: 93 },
  { sphere: "Límites Sanos", antes: 30, despues: 86 },
  { sphere: "Belleza Integral", antes: 44, despues: 90 },
];

const radarData = spheres.map((s) => ({
  subject: s.sphere,
  "Antes del Curso": s.antes,
  "Después del Curso": s.despues,
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-2xl p-4 shadow-lg text-sm"
        style={{ backgroundColor: "#fffaf5", border: "1px solid #f0e8f5" }}
      >
        <p className="font-serif font-semibold mb-2" style={{ color: "#5a4a6a" }}>
          {label}
        </p>
        {payload.map((entry: any, i: number) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}: <strong>{entry.value}%</strong>
          </p>
        ))}
        {payload.length === 2 && (
          <p className="mt-2 text-xs font-medium" style={{ color: "#5db88a" }}>
            ↑ +{payload[1].value - payload[0].value}% de mejora
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function TransformationChart() {
  const [activeChart, setActiveChart] = useState<"radar" | "barras">("radar");

  return (
    <section className="py-20" style={{ backgroundColor: "#f9f5ff" }}>
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full"
            style={{ backgroundColor: "#f0e8ff", color: "#a87fd4" }}
          >
            Resultados Medibles
          </span>
          <h2 className="text-4xl font-serif mt-4 mb-4" style={{ color: "#5a4a6a" }}>
            La Transformación en Todas las Esferas
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#7a6a8a" }}>
            Basado en la autoevaluación de <strong>500+ alumnas</strong> antes y después de completar el curso.
            Los cambios son profundos, sostenidos y medibles en todas las áreas de la vida.
          </p>

          {/* Chart Toggle */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveChart("radar")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeChart === "radar" ? "#a87fd4" : "#f0e8ff",
                color: activeChart === "radar" ? "white" : "#7a6a8a",
              }}
            >
              Vista Radial
            </button>
            <button
              onClick={() => setActiveChart("barras")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeChart === "barras" ? "#a87fd4" : "#f0e8ff",
                color: activeChart === "barras" ? "white" : "#7a6a8a",
              }}
            >
              Vista por Esfera
            </button>
          </div>
        </div>

        {/* Radar Chart */}
        {activeChart === "radar" && (
          <div className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: "#fffaf5", border: "1px solid #f0e8f5" }}>
            <ResponsiveContainer width="100%" height={420}>
              <RadarChart data={radarData} margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
                <PolarGrid stroke="#e8d8f0" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#7a6a8a", fontSize: 12, fontFamily: "serif" }}
                />
                <Radar
                  name="Antes del Curso"
                  dataKey="Antes del Curso"
                  stroke="#d4b8c8"
                  fill="#d4b8c8"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Después del Curso"
                  dataKey="Después del Curso"
                  stroke="#a87fd4"
                  fill="#c4a0d4"
                  fillOpacity={0.5}
                  strokeWidth={2.5}
                />
                <Legend
                  wrapperStyle={{ fontFamily: "serif", color: "#5a4a6a", paddingTop: "16px" }}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Bar Chart */}
        {activeChart === "barras" && (
          <div className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: "#fffaf5", border: "1px solid #f0e8f5" }}>
            <ResponsiveContainer width="100%" height={420}>
              <BarChart
                data={spheres.map((s) => ({
                  name: s.sphere,
                  "Antes": s.antes,
                  "Después": s.despues,
                }))}
                margin={{ top: 10, right: 20, left: 0, bottom: 60 }}
                barGap={4}
                barCategoryGap="25%"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0e8f5" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#7a6a8a", fontSize: 11, fontFamily: "serif" }}
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "#9a8aaa", fontSize: 11 }}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontFamily: "serif", color: "#5a4a6a", paddingTop: "16px" }}
                />
                <Bar dataKey="Antes" fill="#d4b8c8" radius={[6, 6, 0, 0]} name="Antes del Curso" />
                <Bar dataKey="Después" fill="#a87fd4" radius={[6, 6, 0, 0]} name="Después del Curso" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Improvement Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { sphere: "Propósito", mejora: "+58%", color: "#d4749f", bg: "#fff0f5" },
            { sphere: "Intuición", mejora: "+48%", color: "#a87fd4", bg: "#f5f0ff" },
            { sphere: "Límites Sanos", mejora: "+56%", color: "#5db88a", bg: "#f0fff5" },
            { sphere: "Autoconfianza", mejora: "+51%", color: "#d4a84b", bg: "#fffbf0" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center"
              style={{ backgroundColor: item.bg, border: `1px solid ${item.color}30` }}
            >
              <p className="text-3xl font-serif font-bold" style={{ color: item.color }}>
                {item.mejora}
              </p>
              <p className="text-sm mt-1" style={{ color: "#7a6a8a" }}>
                {item.sphere}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs mt-8" style={{ color: "#b0a0c0" }}>
          * Datos basados en autoevaluación de alumnas al inicio y al finalizar el programa. Los resultados individuales pueden variar.
        </p>
      </div>
    </section>
  );
}

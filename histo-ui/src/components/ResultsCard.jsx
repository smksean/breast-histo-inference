import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { BreastCancerHeart, AnimatedBreastCancerRibbon } from "./AnimatedIcons";

export default function ResultsCard({ result }) {
  if (!result) return null;

  const probs = result.probabilities ?? [];
  const data = [
    { name: "Benign", value: Math.round((probs[0] ?? 0) * 100), color: "#10b981" },
    { name: "Malignant", value: Math.round((probs[1] ?? 0) * 100), color: "#ef4444" },
  ];
  const pieData = [
    { name: "Benign", value: Math.round((probs[0] ?? 0) * 100), color: "#10b981" },
    { name: "Malignant", value: Math.round((probs[1] ?? 0) * 100), color: "#ef4444" },
  ];
  const label = result.predicted_label ?? (result.predicted_index === 1 ? "malignant" : "benign");

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm relative card-hover animate-fade-in-up">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <AnimatedBreastCancerRibbon className="mr-2 w-6 h-6" />
          <h3 className="text-xl font-semibold text-slate-800">Prediction Result</h3>
        </div>
        <div className="flex items-center">
          <p className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${label === "malignant" ? "bg-red-50 text-red-700 border border-red-200 animate-pulse-glow" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
            {label === "malignant" && <BreastCancerHeart className="inline w-4 h-4 mr-1 animate-heartbeat" />}
            {label?.charAt(0).toUpperCase() + label?.slice(1)}
          </p>
          {result.aggregate && (
            <span className="ml-2 text-sm text-slate-500">Aggregate: {result.aggregate} • Patches: {result.num_patches}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-56">
        {/* Bar Chart */}
        <div className="h-full">
          <h4 className="text-sm font-medium text-slate-600 mb-2">Confidence Distribution</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12 }} />
              <YAxis unit="%" tick={{ fill: '#475569', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f8fafc', 
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="value" fill={(entry) => entry.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Pie Chart */}
        <div className="h-full">
          <h4 className="text-sm font-medium text-slate-600 mb-2">Probability Split</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f8fafc', 
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "./lib/api";
import UploadPanel from "./components/UploadPanel";
import ResultsCard from "./components/ResultsCard";
import { 
  AnimatedBreastCancerRibbon, 
  AnimatedStethoscope,
  FloatingBreastCancerRibbon, 
  FloatingStethoscope,
  DNAHelix, 
  BreastCancerHeart, 
  LabFlask, 
  FloatingParticles 
} from "./components/AnimatedIcons";
import "./index.css";

export default function App() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [aggregate, setAggregate] = useState("mean");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // create & cleanup previews
  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  const handleChoose = (chosen) => {
    const imgs = chosen.filter((f) => f.type.startsWith("image/"));
    setFiles(imgs);
    setResult(null);
  };

  const handleDrop = (dropped) => {
    handleChoose(dropped);
  };

  const handleClear = () => {
    setFiles([]);
    setResult(null);
  };

  const handlePredict = async () => {
    setLoading(true);
    setResult(null);
    try {
      const form = new FormData();
      if (files.length === 1) {
        form.append("file", files[0]);
        const { data } = await axios.post(`${API_BASE}/predict`, form);
        setResult(data);
      } else {
        files.forEach((f) => form.append("files", f));
        const { data } = await axios.post(`${API_BASE}/predict-batch?aggregate=${aggregate}`, form);
        setResult(data);
      }
    } catch (e) {
      console.error(e);
      alert("Prediction failed. Check the API is running and CORS is allowed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingParticles />
      <FloatingBreastCancerRibbon className="top-20 left-10 animate-float" />
      <FloatingStethoscope className="top-40 right-20 animate-float" style={{ animationDelay: "1s" }} />
      <FloatingBreastCancerRibbon className="bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }} />
      <FloatingStethoscope className="bottom-20 right-10 animate-float" style={{ animationDelay: "0.5s" }} />
      
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-10 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <AnimatedBreastCancerRibbon className="mr-4" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            AI-Powered Breast Histopathology Triage
          </h1>
          <AnimatedStethoscope className="ml-4" />
        </div>
        <p className="mt-2 text-slate-600 text-center">
          Reducing diagnostic backlog for pathologists with AI inference.
        </p>
        <div className="mt-3 rounded-lg bg-blue-100 px-3 py-2 text-sm text-blue-800 flex items-center justify-center">
          <BreastCancerHeart className="mr-2" />
          For research & educational purposes only. Not for clinical diagnosis.
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto grid max-w-6xl gap-6 px-6 pb-12 md:grid-cols-2 relative z-10">
        <div className="relative">
          <LabFlask className="absolute -top-4 -right-4 z-0" />
          <UploadPanel
            files={files}
            previews={previews}
            onChoose={handleChoose}
            onDropFiles={handleDrop}
            onClear={handleClear}
            loading={loading}
            onPredict={handlePredict}
            aggregate={aggregate}
            setAggregate={setAggregate}
          />
        </div>
        <div className="space-y-6">
          <ResultsCard result={result} />

          {/* Info boxes */}
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm relative card-hover animate-fade-in-up">
            <div className="flex items-center mb-2">
              <AnimatedBreastCancerRibbon className="mr-2 w-6 h-6" />
              <h3 className="text-xl font-semibold text-slate-800">Why This Matters</h3>
            </div>
            <ul className="list-disc pl-5 text-slate-600">
              <li>Pathologist bottlenecks and rising screening volumes create backlogs.</li>
              <li>AI triage helps prioritize malignant cases for faster review.</li>
              <li>Supports compliance with turnaround-time targets.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm relative card-hover animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-2">
              <AnimatedStethoscope className="mr-2 w-6 h-6" />
              <h3 className="text-xl font-semibold text-slate-800">How This Works</h3>
            </div>
            <p className="text-slate-600">
              A ResNet50 model trained on the BreakHis dataset classifies histopathology patches as benign or malignant.
              Batch mode aggregates predictions by mean/median/vote to summarize slide-level confidence.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          Histocare Diagnostics Ltd. — AI-powered pathology support. Research use only.
        </div>
      </footer>
    </div>
  );
}

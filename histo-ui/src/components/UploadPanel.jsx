import React, { useRef } from "react";
import { LoadingDots, AnimatedBreastCancerRibbon } from "./AnimatedIcons";

export default function UploadPanel({ files, previews, onChoose, onDropFiles, onClear, loading, onPredict, aggregate, setAggregate }) {
  const inputRef = useRef(null);

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm card-hover animate-slide-in">
      <h3 className="mb-3 text-xl font-semibold text-slate-800">Upload Images</h3>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const dropped = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"));
          onDropFiles(dropped);
        }}
        className="flex items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-8 text-blue-600"
      >
        <div className="text-center">
          <div className="mb-2">Drag & drop or click to upload</div>
          <div className="text-xs">.jpg .jpeg .png</div>
          <button
            type="button"
            className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
            onClick={() => inputRef.current?.click()}
          >
            Choose files
          </button>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => onChoose(Array.from(e.target.files))}
          />
        </div>
      </div>

      {previews.length > 0 && (
        <>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {previews.map((src, i) => (
              <div key={i} className="relative">
                <img src={src} alt={`preview-${i}`} className="h-28 w-full rounded-lg object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-600">Aggregate:</label>
              <select
                className="rounded-lg border border-blue-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                value={aggregate}
                onChange={(e) => setAggregate(e.target.value)}
              >
                <option value="mean">Mean</option>
                <option value="median">Median</option>
                <option value="vote">Vote</option>
              </select>
            </div>

            <button
              disabled={loading || files.length === 0}
              onClick={onPredict}
              className="rounded-xl bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60 hover:bg-blue-700 transition-colors flex items-center"
            >
              {loading ? (
                <>
                  <AnimatedBreastCancerRibbon className="mr-2 w-4 h-4" />
                  <LoadingDots />
                </>
              ) : (
                "Predict"
              )}
            </button>

            <button
              type="button"
              onClick={onClear}
              className="rounded-xl border border-blue-300 px-4 py-2 text-slate-700 hover:bg-blue-50 transition-colors"
            >
              Clear
            </button>
          </div>
        </>
      )}
    </div>
  );
}

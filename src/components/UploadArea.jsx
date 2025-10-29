import React, { useRef, useState } from 'react';
import { Upload, Pencil, Image as ImageIcon, Trash2 } from 'lucide-react';

export default function UploadArea() {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const clearPreview = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="upload" className="relative w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Handwriting Input</h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">
            Upload a scanned page or use the canvas to draw with a stylus. We’ll analyze spacing, alignment, letter formation, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Card */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ImageIcon className="text-cyan-300" size={20} />
                <h3 className="font-medium">Upload Sample</h3>
              </div>
              {preview && (
                <button onClick={clearPreview} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs hover:bg-white/10">
                  <Trash2 size={14} /> Clear
                </button>
              )}
            </div>

            <div className="mt-4">
              <input ref={fileInputRef} type="file" accept="image/*,application/pdf" onChange={onFileChange} className="hidden" />
              {!preview ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-white/20 p-8 text-center">
                  <Upload size={24} className="text-white/70" />
                  <p className="text-sm text-white/70">Drag & drop or select a handwriting image</p>
                  <button onClick={() => fileInputRef.current?.click()} className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400">
                    Choose File
                  </button>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-lg border border-white/10">
                  <img src={preview} alt="preview" className="w-full max-h-[360px] object-contain bg-black" />
                </div>
              )}
            </div>
          </div>

          {/* Canvas Card */}
          <CanvasDraw />
        </div>
      </div>
    </section>
  );
}

function CanvasDraw() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  const startDraw = (e) => {
    setDrawing(true);
    draw(e);
  };
  const endDraw = () => setDrawing(false);

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#ffffff';

    if (!ctx.isDrawing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.isDrawing = true;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const resetPath = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.isDrawing = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Pencil className="text-cyan-300" size={20} />
          <h3 className="font-medium">Draw Digitally</h3>
        </div>
        <button onClick={clearCanvas} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs hover:bg-white/10">
          <Trash2 size={14} /> Clear
        </button>
      </div>

      <div className="mt-4">
        <div className="rounded-lg border border-white/10 bg-black">
          <canvas
            ref={canvasRef}
            width={800}
            height={360}
            className="w-full h-[360px] touch-none"
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={() => { endDraw(); resetPath(); }}
            onMouseLeave={() => { endDraw(); resetPath(); }}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={() => { endDraw(); resetPath(); }}
          />
        </div>
        <p className="mt-2 text-xs text-white/60">Use a stylus or mouse to write letters, words, or sentences for analysis.</p>
      </div>
    </div>
  );
}

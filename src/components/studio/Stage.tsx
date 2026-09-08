import { useEffect, useRef, useState } from "react";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { useStudio } from "@/lib/studio-store";

const PAGE_W = 816;
const PAGE_H = 1056;

export function Stage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(0.86);
  const [narrow, setNarrow] = useState(false);
  const zoom = useStudio((s) => s.zoom);
  const flow = useStudio((s) => s.flow);
  const template = useStudio((s) => s.template);
  const paper = useStudio((s) => s.paper);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const measure = () => {
      const pad = 48;
      const w = Math.max(el.clientWidth - pad, 240);
      const h = Math.max(el.clientHeight - pad, 320);
      const next = Math.min(w / PAGE_W, h / PAGE_H);
      setFit(Math.max(0.28, Math.min(next, 1.2)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scale = fit * zoom;
  const useFlow = flow || narrow;

  if (useFlow) {
    return (
      <div ref={frameRef} className="stage stage-flow">
        <ResumeDocument mode="flow" />
      </div>
    );
  }

  return (
    <div ref={frameRef} className="stage">
      <div
        className="page-slot"
        style={{
          width: PAGE_W * scale,
          height: PAGE_H * scale,
        }}
        data-template={template}
        data-paper={paper}
      >
        <div
          className="page-scale"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <ResumeDocument mode="page" />
        </div>
      </div>
    </div>
  );
}

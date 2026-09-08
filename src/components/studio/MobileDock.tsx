import { Copy, Printer, SwatchBook } from "lucide-react";
import { papers, templates } from "@/lib/resume-data";
import { useStudio } from "@/lib/studio-store";
import { copyAts, printResume } from "./export";

export function MobileDock() {
  const template = useStudio((s) => s.template);
  const setTemplate = useStudio((s) => s.setTemplate);
  const paper = useStudio((s) => s.paper);
  const setPaper = useStudio((s) => s.setPaper);

  return (
    <div className="dock no-print">
      <div className="dock-row" role="tablist" aria-label="Layouts">
        {templates.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === template}
            className={item.id === template ? "is-active" : undefined}
            onClick={() => setTemplate(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="dock-tools">
        <div className="dock-papers">
          <SwatchBook className="size-3.5" />
          {papers.map((item) => (
            <button
              key={item.id}
              type="button"
              className="dock-swatch"
              data-paper={item.id}
              aria-label={item.name}
              aria-pressed={item.id === paper}
              onClick={() => setPaper(item.id)}
            />
          ))}
        </div>
        <button type="button" onClick={copyAts}>
          <Copy className="size-3.5" />
          ATS
        </button>
        <button type="button" className="dock-print" onClick={printResume}>
          <Printer className="size-3.5" />
          Print
        </button>
      </div>
    </div>
  );
}

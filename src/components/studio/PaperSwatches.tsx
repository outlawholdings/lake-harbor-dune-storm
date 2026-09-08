import { papers } from "@/lib/resume-data";
import { useStudio } from "@/lib/studio-store";
import { cn } from "@/lib/utils";

export function PaperSwatches() {
  const paper = useStudio((s) => s.paper);
  const setPaper = useStudio((s) => s.setPaper);

  return (
    <div className="paper-row">
      {papers.map((item) => {
        const active = item.id === paper;
        return (
          <button
            key={item.id}
            type="button"
            className={cn("paper-chip", active && "is-active")}
            onClick={() => setPaper(item.id)}
            aria-pressed={active}
          >
            <span className="paper-swatch" data-paper={item.id} />
            <span>
              <span className="paper-name">{item.name}</span>
              <span className="paper-blurb">{item.blurb}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

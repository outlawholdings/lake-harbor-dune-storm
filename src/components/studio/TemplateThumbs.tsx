import { templates, type TemplateId } from "@/lib/resume-data";
import { useStudio } from "@/lib/studio-store";
import { cn } from "@/lib/utils";

function ThumbArt({ id }: { id: TemplateId }) {
  if (id === "lumen") {
    return (
      <span className="thumb-art thumb-lumen" aria-hidden="true">
        <span className="thumb-side" />
        <span className="thumb-lines">
          <span />
          <span />
          <span />
          <span />
        </span>
      </span>
    );
  }
  if (id === "ledger") {
    return (
      <span className="thumb-art thumb-ledger" aria-hidden="true">
        <span className="thumb-center" />
        <span />
        <span />
        <span />
        <span />
      </span>
    );
  }
  return (
    <span className="thumb-art thumb-atelier" aria-hidden="true">
      <span className="thumb-name" />
      <span />
      <span className="thumb-split">
        <span />
        <span />
      </span>
      <span />
      <span />
    </span>
  );
}

export function TemplateThumbs() {
  const template = useStudio((s) => s.template);
  const setTemplate = useStudio((s) => s.setTemplate);

  return (
    <div className="tool-grid">
      {templates.map((item) => {
        const active = item.id === template;
        return (
          <button
            key={item.id}
            type="button"
            className={cn("thumb-card", active && "is-active")}
            onClick={() => setTemplate(item.id)}
            aria-pressed={active}
          >
            <ThumbArt id={item.id} />
            <span className="thumb-copy">
              <span className="thumb-name-label">{item.name}</span>
              <span className="thumb-blurb">{item.blurb}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

import { Columns2, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/resume-data";
import { useStudio } from "@/lib/studio-store";
import { printResume } from "./export";

export function TopBar() {
  const flow = useStudio((s) => s.flow);
  const toggleFlow = useStudio((s) => s.toggleFlow);
  const template = useStudio((s) => s.template);

  return (
    <header className="topbar no-print">
      <div className="topbar-id">
        <span className="topbar-mark" aria-hidden="true">
          AO
        </span>
        <div>
          <p className="topbar-name">{profile.name}</p>
          <p className="topbar-meta">
            {profile.credential} · {profile.city}
          </p>
        </div>
      </div>
      <div className="topbar-actions">
        <span className="topbar-chip">{template}</span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="flow-toggle"
          onClick={toggleFlow}
          aria-pressed={flow}
        >
          {flow ? (
            <FileText className="size-3.5" />
          ) : (
            <Columns2 className="size-3.5" />
          )}
          {flow ? "Page" : "Flow"}
        </Button>
        <Button type="button" size="sm" onClick={printResume}>
          <Printer className="size-3.5" />
          Print
        </Button>
      </div>
    </header>
  );
}

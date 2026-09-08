import {
  Copy,
  Download,
  Mail,
  Minus,
  Phone,
  Plus,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStudio } from "@/lib/studio-store";
import {
  copyAts,
  copyContact,
  copyEmail,
  copyPhone,
  downloadAts,
  printResume,
} from "./export";
import { PaperSwatches } from "./PaperSwatches";
import { TemplateThumbs } from "./TemplateThumbs";

export function ToolRail() {
  const zoom = useStudio((s) => s.zoom);
  const nudgeZoom = useStudio((s) => s.nudgeZoom);
  const setZoom = useStudio((s) => s.setZoom);

  return (
    <aside className="rail no-print" aria-label="Resume tools">
      <div className="rail-brand">
        <p className="rail-kicker">Studio</p>
        <p className="rail-title">Atelier</p>
        <p className="rail-sub">
          Letter · one page · print-true
        </p>
      </div>

      <section className="rail-section">
        <h2>Layout</h2>
        <TemplateThumbs />
      </section>

      <section className="rail-section">
        <h2>Paper</h2>
        <PaperSwatches />
      </section>

      <section className="rail-section">
        <h2>Scale</h2>
        <div className="zoom-row">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={() => nudgeZoom(-0.08)}
            aria-label="Zoom out"
          >
            <Minus className="size-3.5" />
          </Button>
          <button
            type="button"
            className="zoom-value"
            onClick={() => setZoom(1)}
            title="Reset scale"
          >
            {Math.round(zoom * 100)}%
          </button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={() => nudgeZoom(0.08)}
            aria-label="Zoom in"
          >
            <Plus className="size-3.5" />
          </Button>
        </div>
      </section>

      <section className="rail-section rail-export">
        <h2>Export</h2>
        <Button type="button" className="w-full" onClick={printResume}>
          <Printer className="size-4" />
          Print / Save PDF
        </Button>
        <div className="export-grid">
          <Button type="button" variant="outline" onClick={copyAts}>
            <Copy className="size-4" />
            Copy ATS
          </Button>
          <Button type="button" variant="outline" onClick={downloadAts}>
            <Download className="size-4" />
            .txt
          </Button>
          <Button type="button" variant="ghost" onClick={copyEmail}>
            <Mail className="size-4" />
            Email
          </Button>
          <Button type="button" variant="ghost" onClick={copyPhone}>
            <Phone className="size-4" />
            Phone
          </Button>
        </div>
        <button type="button" className="contact-copy" onClick={copyContact}>
          Copy full contact block
        </button>
      </section>
    </aside>
  );
}

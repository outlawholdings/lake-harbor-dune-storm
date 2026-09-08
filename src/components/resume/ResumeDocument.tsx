import { useStudio } from "@/lib/studio-store";
import { Atelier } from "./Atelier";
import { Ledger } from "./Ledger";
import { Lumen } from "./Lumen";

const TEMPLATES = {
  atelier: Atelier,
  lumen: Lumen,
  ledger: Ledger,
} as const;

type ResumeDocumentProps = {
  mode?: "page" | "flow";
};

export function ResumeDocument({ mode = "page" }: ResumeDocumentProps) {
  const template = useStudio((s) => s.template);
  const paper = useStudio((s) => s.paper);
  const Template = TEMPLATES[template];

  return (
    <article
      className="page"
      data-template={template}
      data-paper={paper}
      data-mode={mode}
      aria-label={`${template} resume on ${paper} paper`}
    >
      <Template />
    </article>
  );
}

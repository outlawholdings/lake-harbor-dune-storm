import { useEffect } from "react";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { copyAts, printResume } from "./export";
import { MobileDock } from "./MobileDock";
import { Stage } from "./Stage";
import { ToolRail } from "./ToolRail";
import { TopBar } from "./TopBar";

export function Studio() {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "p") {
        event.preventDefault();
        printResume();
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "c" && event.shiftKey) {
        event.preventDefault();
        copyAts();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="studio">
        <div className="studio-grain" aria-hidden="true" />
        <TopBar />
        <div className="studio-body">
          <ToolRail />
          <Stage />
        </div>
        <MobileDock />
      </div>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          className: "atelier-toast",
        }}
      />
    </TooltipProvider>
  );
}

import { toast } from "sonner";
import { buildAtsText } from "@/lib/ats-text";
import { profile } from "@/lib/resume-data";

async function copy(text: string, ok: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(ok);
  } catch {
    toast.error("Clipboard is blocked in this browser.");
  }
}

export function printResume() {
  window.print();
}

export function copyAts() {
  return copy(buildAtsText(), "ATS text copied");
}

export function copyEmail() {
  return copy(profile.email, "Email copied");
}

export function copyPhone() {
  return copy(profile.phone, "Phone copied");
}

export function copyContact() {
  return copy(
    `${profile.name}\n${profile.location}\n${profile.phone}\n${profile.email}`,
    "Contact block copied",
  );
}

export function downloadAts() {
  const blob = new Blob([buildAtsText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "April_Outlaw_ATS.txt";
  a.click();
  URL.revokeObjectURL(url);
  toast.success("ATS file downloaded");
}

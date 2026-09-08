import { create } from "zustand";
import type { PaperId, TemplateId } from "./resume-data";

type StudioState = {
  template: TemplateId;
  paper: PaperId;
  zoom: number;
  flow: boolean;
  setTemplate: (template: TemplateId) => void;
  setPaper: (paper: PaperId) => void;
  setZoom: (zoom: number) => void;
  nudgeZoom: (delta: number) => void;
  setFlow: (flow: boolean) => void;
  toggleFlow: () => void;
};

export const useStudio = create<StudioState>((set, get) => ({
  template: "atelier",
  paper: "ivory",
  zoom: 1,
  flow: false,
  setTemplate: (template) => set({ template }),
  setPaper: (paper) => set({ paper }),
  setZoom: (zoom) => set({ zoom: Math.min(1.35, Math.max(0.7, zoom)) }),
  nudgeZoom: (delta) => get().setZoom(get().zoom + delta),
  setFlow: (flow) => set({ flow }),
  toggleFlow: () => set({ flow: !get().flow }),
}));

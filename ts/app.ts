import { SafeMode } from "$state/Desktop/ts/store";
import { ArcOSVersion } from "$ts/env";
import { DonutIcon } from "$ts/images/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

// Application Metadata
export const DonutApp: App = {
  metadata: {
    name: "Donut",
    description: "A spinning ASCII donut",
    version: ArcOSVersion,
    author: "Andy Sloane (ArcOS port by IzK)",
    icon: DonutIcon,
    appGroup: "entertainment",
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "DonutApp",
  size: { w: 640, h: NaN },
  pos: { x: 30, y: 40 },
  minSize: { w: 640, h: 460 },
  maxSize: { w: 640, h: NaN },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  glass: true,
  loadCondition: () => !SafeMode.get(),
};

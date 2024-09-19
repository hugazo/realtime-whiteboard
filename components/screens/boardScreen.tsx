import dynamic from "next/dynamic";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  { ssr: false },
);

export default function BoardScreen() {
  // Objective: Convert this as a dynamic board screen
  
  // TODO: Debounce this function
  const handleExcalidrawChange = (elements: readonly ExcalidrawElement[], state: unknown) => {
    console.log("Elements:", elements, "State:", state);
  }

  return <Excalidraw
    theme="dark"
    onChange={handleExcalidrawChange}
  />;
};

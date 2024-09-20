"use client";
import { Excalidraw } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <>
      <Excalidraw
        onPointerUp={() => console.log("onPointerUp")}
        onPointerDown={() => console.log("onPointerDown")}
      />
    </>
  );
};

export default ExcalidrawWrapper;

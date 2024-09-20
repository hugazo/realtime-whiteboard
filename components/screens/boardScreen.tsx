import dynamic from "next/dynamic";
import Script from "next/script";

const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("./excalidrawWrapper")).default,
  { ssr: false },
);

export default function BoardScreen() {
  return <>
    <Script id="load-env-variables" strategy="beforeInteractive">
      {`window["EXCALIDRAW_ASSET_PATH"] = window.origin;`}
    </Script>
    <ExcalidrawWithClientOnly />
  </>;
};

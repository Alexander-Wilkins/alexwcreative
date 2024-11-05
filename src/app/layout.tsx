import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import BlueSkyBackground from "@/components/BlueSkyBackground";

import Navbar from "@/components/Navbar";
import Window from "@/components/Window";
import Canvas from "@/components/Canvas";
import Tools from "@/components/Tools";
import ColorPalette from "@/components/ColorPalette";

export const metadata: Metadata = {
  title: "Alex W. - Web Developer",
  description: "Open sky developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/alexwcreative/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/alexwcreative/favicon.svg"
        />
        <link rel="shortcut icon" href="/alexwcreative/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/alexwcreative/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="AlexWCreative" />
        <link rel="manifest" href="/alexwcreative/site.webmanifest" />
      </head>
      <body>
        <div
          id="page-container"
          className="relative min-h-[100vh] overflow-hidden"
        >
          <div id="content-wrap">
            <Window
              size="w-[23rem] sm:w-[67rem]"
              defaultPos="ml-8 sm:ml-[23.125rem] sm:mt-10"
              title="alexwcreative.com"
            >
              <Navbar />
              <main className="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-ms-bronze-bg-ui">
                <div
                  id="left-container"
                  className="w-[5.25rem] border-[1px] border-ms-bronze-bg-ui bg-ms-bronze-ui pl-[0.65rem] sm:w-[5.5rem]"
                >
                  <Tools />
                </div>
                <div
                  id="right-container"
                  className="h-full w-full overflow-hidden"
                >
                  <div className="max-h-[40.25rem] overflow-auto">
                    <Canvas>
                      {children}
                    </Canvas>
                  </div>
                </div>
                <div id="bottom-container" className="col-span-2">
                  <ColorPalette />
                </div>
              </main>
            </Window>
            <BlueSkyBackground />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

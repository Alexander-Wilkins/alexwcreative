import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

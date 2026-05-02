import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Bypass Toolkit — Bypass Government VPN Blocks",
  description: "Automatically rotate between VPN protocols and obfuscation methods when blocks are detected. Stay connected in restricted regions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6967c989-f340-4c40-af99-1a11d757df85"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

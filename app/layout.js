export const metadata = {
  title: "Narrative Capital",
  description:
    "Founder-focused micro VC backing crypto builders with capital and go-to-market clarity.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0A0A0B", color: "#FFFFFF" }}>
        {children}
      </body>
    </html>
  );
}

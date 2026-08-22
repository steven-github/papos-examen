import type { Metadata } from "next";
import { PronunciationController } from "@/components/PronunciationController";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ian Exam Prep",
  description:
    "App interactiva de repaso para los examenes de Science y Grammar de 3rd grade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PronunciationController />
        {children}
      </body>
    </html>
  );
}

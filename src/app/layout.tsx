import fonts from "@/fonts";
import "./globals.css";
import type { Metadata } from "next";
import AuthContext from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Chitsync",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts}`}>
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}

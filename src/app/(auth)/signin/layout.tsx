import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Chitsync | Sign In",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/");
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

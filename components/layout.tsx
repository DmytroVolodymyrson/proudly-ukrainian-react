import React from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <Header positionAbsolute={isHome} isWhite={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

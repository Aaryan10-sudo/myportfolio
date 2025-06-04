"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

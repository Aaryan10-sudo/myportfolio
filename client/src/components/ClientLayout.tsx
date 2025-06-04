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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

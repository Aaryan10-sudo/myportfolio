import HomePage from "@/components/Homepage";

export const metadata = {
  title: "Aaryan Sharma | FullStack Developer",
  description:
    "Portfolio of Aaryan Sharma - showcasing projects built with React, Node.js, and MongoDB.",
  keywords: [
    "MERN stack",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "Express.js",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Aaryan Sharma" }],
  openGraph: {
    title: "Aaryan Sharma | MERN Stack Developer",
    description:
      "Explore the modern projects and skills of a full-stack web developer.",
    url: "https://aryansharma.com.np",
    siteName: "Portfolio",
    images: [
      {
        url: "https://aryansharma.com.np/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaryan Sharma | MERN Stack Developer",
    description:
      "Explore the modern projects and skills of a full-stack web developer.",
    images: ["https://aryansharma.com.np/portfolio.jpg"],
  },
  alternates: {
    canonical: "https://aryansharma.com.np",
  },
};

export default function Page() {
  return <HomePage />;
}

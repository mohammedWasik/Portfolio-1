import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed Wasik | Software Engineer in Test",
  description: "Software Engineer in Test with experience in backend, API, web, and mobile automation. QA, test automation, and event-driven AWS architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

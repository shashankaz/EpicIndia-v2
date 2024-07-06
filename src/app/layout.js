import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const albert_sans = Albert_Sans({
  subsets: ["latin"],
});
export const metadata = {
  title: "Visit India | Seasonal Travel Guide",
  description:
    "Explore India's Rich Diversity Year-Round: Your Ultimate Seasonal Travel Guide for Unforgettable Adventures!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={albert_sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

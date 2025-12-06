import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "STI",
  description: "My Next.js Homepage",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

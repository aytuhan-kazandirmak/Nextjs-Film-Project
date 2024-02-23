import "./styles/reset.css";
import "./styles/global.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">{children}</body>
    </html>
  );
}

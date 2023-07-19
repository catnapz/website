import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer } from "../components/root";

const inter = Inter({ subsets: ["latin"] });

interface ILayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} bg-background dark:bg-background-dark flex min-h-full flex-col scroll-smooth hover:scroll-auto`}
      >
        <Header />
        <main className="mb-auto grow flex flex-col bg-surface dark:bg-surface-dark text-on-surface dark:text-on-surface-dark">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

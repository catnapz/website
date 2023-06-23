import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="grow flex flex-col justify-center bg-background dark:bg-background-dark">
        {children}
      </main>
      <Footer />
    </div>
  );
};

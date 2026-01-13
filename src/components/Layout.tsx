import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  headerVariant?: "default" | "transparent";
}

export const Layout = ({ children, headerVariant = "default" }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header variant={headerVariant} />
      <main className={`flex-1 ${headerVariant === "default" ? "pt-[120px] md:pt-[140px]" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

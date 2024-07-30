import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex ">
      <div className="flex-1">
        <Header />
        <SubHeader />
        <main className="p-4 bg-backgroundColor">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

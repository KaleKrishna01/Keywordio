import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="p-4 bg-[#fafafa]">{children}</main>
    </div>
  );
};

export default Layout;

/* eslint-disable @typescript-eslint/no-empty-object-type */
import Header from "@/components/layout/header";
import React from "react";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

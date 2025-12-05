import { Topbar } from "@/src/components/layout/Topbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Topbar />
      <div>{children}</div>
    </div>
  );
};

export default layout;

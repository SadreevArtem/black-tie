import { AppToast } from "@/components/AppToast";
import { useAgeCheckStore } from "@/store/is18";
import React from "react";


export const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main >{children}</main>
      <AppToast />
    </div>
  );
};

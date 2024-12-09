import React, { ReactNode } from "react";

type FooterRowProps = {
  children: ReactNode;
};

export const FooterRow = ({ children }: FooterRowProps) => {
  return (
    <div className="flex flex-col items-start gap-4 text-neutral-400 text-sm">
      {children}
    </div>
  );
};

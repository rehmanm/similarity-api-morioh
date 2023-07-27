import React from "react";

function layout({children}: {children: React.ReactNode}) {
  return <section className="pt-20">{children}</section>;
}

export default layout;

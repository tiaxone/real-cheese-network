import type { ReactNode } from "react";

export default function InfoBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="sidebar-box">
      <div className="sidebar-box-header">{title}</div>
      <div className="sidebar-box-body">{children}</div>
    </div>
  );
}

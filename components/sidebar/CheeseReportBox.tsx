import type { ReactNode } from "react";

export default function CheeseReportBox({
  rows,
  footer,
}: {
  rows: { region: string; forecast: string }[];
  footer?: ReactNode;
}) {
  return (
    <div className="sidebar-box">
      <div className="sidebar-box-header">Cheese Report</div>
      <div className="sidebar-box-body">
        {rows.map((row) => (
          <div className="cheese-report-row" key={row.region}>
            <span>{row.region}</span>
            <span>{row.forecast}</span>
          </div>
        ))}
        {footer && (
          <div className="cheese-report-row" style={{ border: "none", paddingTop: 10 }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

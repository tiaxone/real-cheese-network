export default function PollBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="sidebar-box poll-box">
      <div className="sidebar-box-header" style={{ textAlign: "left" }}>
        RCN Poll
      </div>
      <div className="sidebar-box-body">
        <div className="poll-number">{number}</div>
        <div className="poll-label">{label}</div>
      </div>
    </div>
  );
}

export default function CaucusBox({
  title = "The Cheese Caucus",
  items,
}: {
  title?: string;
  items: { name: string; note: string }[];
}) {
  return (
    <div className="sidebar-box">
      <div className="sidebar-box-header">{title}</div>
      <div className="sidebar-box-body">
        {items.map((item) => (
          <div className="caucus-item" key={item.name}>
            <b>{item.name}</b> — {item.note}
          </div>
        ))}
      </div>
    </div>
  );
}

type TickerItem = {
  label: string;
  text: string;
};

export default function Ticker({ items }: { items: TickerItem[] }) {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {items.map((item, i) => (
          <span key={i}>
            <b>{item.label}:</b> {item.text}
            {i < items.length - 1 && <>&nbsp;&nbsp;•&nbsp;&nbsp;</>}
          </span>
        ))}
      </div>
    </div>
  );
}

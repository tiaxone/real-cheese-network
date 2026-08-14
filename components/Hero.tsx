export default function Hero({
  tag,
  title,
  subtitle,
  byline,
}: {
  tag: string;
  title: string;
  subtitle: string;
  byline?: string;
}) {
  return (
    <div className="hero">
      <span className="section-tag">{tag}</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {byline && <div className="hero-byline">{byline}</div>}
    </div>
  );
}

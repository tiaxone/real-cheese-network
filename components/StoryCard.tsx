export default function StoryCard({
  kicker,
  title,
  description,
  tag,
}: {
  kicker?: string;
  title: string;
  description: string;
  tag?: { label: string; variant: "invest" | "exclusive" };
}) {
  return (
    <div className="story">
      <div className="story-thumb" />
      <div>
        {tag && (
          <span className={`tag-pill ${tag.variant === "exclusive" ? "tag-exclusive" : "tag-invest"}`}>
            {tag.label}
          </span>
        )}
        {kicker && <div className="kicker">{kicker}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

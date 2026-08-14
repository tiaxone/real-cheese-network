import storiesData from "@/data/cheese-stories.json";

export type Story = {
  id: string;
  kicker?: string;
  title: string;
  description: string;
  tag?: { label: string; variant: "invest" | "exclusive" };
  createdAt: string;
  source: "seed" | "generated";
  sourceLink?: string;
};

export function getStories(): Story[] {
  return [...(storiesData as Story[])].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getTopStories(count: number): Story[] {
  return getStories().slice(0, count);
}

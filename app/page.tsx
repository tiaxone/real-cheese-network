import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import CheeseReportBox from "@/components/sidebar/CheeseReportBox";
import CaucusBox from "@/components/sidebar/CaucusBox";
import PollBox from "@/components/sidebar/PollBox";
import { getTopStories } from "@/lib/stories";

export default function HomePage() {
  const stories = getTopStories(4);

  return (
    <>
      <Ticker
        items={[
          { label: "DEVELOPING", text: "Cheese Caucus splits along provolone lines ahead of recess vote" },
          { label: "MARKETS", text: "Gouda futures up 3% on rind transparency optimism" },
          { label: "SOURCES", text: "Big Processed Cheese declined to comment for the fourth straight week" },
          { label: "WEATHER", text: "Cold front of bad fondue moves through the Midwest" },
          { label: "JUST IN", text: "FDA hearing on definition of \"aged\" enters third hour" },
        ]}
      />

      <Hero
        tag="Breaking"
        title="Leaked Documents Show 'Cheese Product' Never Once Touched a Cow"
        subtitle='Internal memos obtained exclusively by Real Cheese Network raise new questions about what, exactly, Big Processed Cheese has been selling America for the last forty years. Regulators say they are "looking into it."'
        byline="Reporting by Chip Gouda · RCN Investigations Desk"
      />

      <div className="main">
        <div>
          <div className="section-label">Top Stories</div>
          <div className="story-list">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                kicker={story.kicker}
                title={story.title}
                description={story.description}
                tag={story.tag}
              />
            ))}
          </div>
        </div>

        <div>
          <CheeseReportBox
            rows={[
              { region: "Northeast", forecast: "Sharp, with a chance of cheddar" },
              { region: "Midwest", forecast: "Fondue front, low visibility" },
              { region: "South", forecast: "Pimento pressure building" },
              { region: "West Coast", forecast: "Artisanal, mild volatility" },
            ]}
            footer={
              <>
                <b>Meltdown Index: 6.2</b> — Elevated
              </>
            }
          />
          <CaucusBox
            items={[
              { name: "Rep. Colby Sharp (R)", note: "introduces bill mandating rind disclosure on all packaged cheese." },
              { name: "Sen. Camembert Vance (D)", note: 'calls processed cheese lobby "an affront to the aged tradition."' },
              { name: "Rep. Munster Reyes (I)", note: 'walks out of hearing after being served "cheese product" at lunch.' },
            ]}
          />
          <PollBox number="62%" label="of Americans can't tell the difference — should they?" />
        </div>
      </div>
    </>
  );
}

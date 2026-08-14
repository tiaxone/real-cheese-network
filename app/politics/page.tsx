import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import CaucusBox from "@/components/sidebar/CaucusBox";
import PollBox from "@/components/sidebar/PollBox";

export const metadata = { title: "Politics — Real Cheese Network" };

export default function PoliticsPage() {
  return (
    <>
      <Ticker
        items={[
          { label: "DEVELOPING", text: "Cheese Caucus splits along provolone lines ahead of recess vote" },
          { label: "SOURCES", text: "Big Processed Cheese declined to comment for the fourth straight week" },
          { label: "JUST IN", text: 'FDA hearing on definition of "aged" enters third hour' },
        ]}
      />

      <Hero
        tag="Politics"
        title="Cheese Caucus Splits Along Provolone Lines Ahead of Recess Vote"
        subtitle="Inside the growing rift between the Real Cheese bloc and processed-cheese sympathizers, as both sides dig in before the August recess."
      />

      <div className="main">
        <div>
          <div className="section-label">Top Political Stories</div>
          <div className="story-list">
            <StoryCard
              kicker="Lobbying"
              title="Big Processed Cheese Spends Record $40M Lobbying Against Rind Transparency Act"
              description="Critics call it the most aggressive dairy-adjacent lobbying push since the Great Fondue Scare."
            />
            <StoryCard
              kicker="Regulation"
              title='FDA Hearing Descends Into Chaos Over Definition of "Aged"'
              description="Committee members clashed for three hours without agreeing on a minimum affinage period."
            />
            <StoryCard
              kicker="International"
              title='EU Threatens Tariffs Over US "Cheese Product" Labeling Standards'
              description="Brussels calls American labeling law an insult to seven centuries of affinage tradition."
            />
            <StoryCard
              kicker="Campaign Trail"
              title="Gouda Shortage Becomes Surprise Flashpoint in Midterm Races"
              description="Three swing-district candidates have now run ads on rind transparency alone."
            />
          </div>
        </div>

        <div>
          <CaucusBox
            items={[
              { name: "Rep. Colby Sharp (R)", note: "introduces bill mandating rind disclosure on all packaged cheese." },
              { name: "Sen. Camembert Vance (D)", note: 'calls processed cheese lobby "an affront to the aged tradition."' },
              { name: "Rep. Munster Reyes (I)", note: 'walks out of hearing after being served "cheese product" at lunch.' },
              { name: "Sen. Brie Halloran (D)", note: "proposes a national Meltdown Index early-warning system." },
            ]}
          />
          <PollBox
            number="71%"
            label="of voters in swing districts say rind transparency will affect their vote"
          />
        </div>
      </div>
    </>
  );
}

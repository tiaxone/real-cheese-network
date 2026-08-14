import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import InfoBox from "@/components/sidebar/InfoBox";

export const metadata = { title: "Investigations — Real Cheese Network" };

export default function InvestigationsPage() {
  return (
    <>
      <Ticker
        items={[
          { label: "EXCLUSIVE", text: 'Leaked documents show "cheese product" never once touched a cow' },
          { label: "FOLLOW THE WHEY", text: "RCN traces shell companies to single processing plant" },
          { label: "FACT-CHECK", text: "Is that cheese... real? We investigate." },
        ]}
      />

      <Hero
        tag="Investigations"
        title='Follow the Whey: Inside the Shell Companies Behind "Cheese Food"'
        subtitle="An RCN investigation traces a tangled web of subsidiaries back to a single processing plant — and the memos that raise more questions than answers."
      />

      <div className="main">
        <div>
          <div className="section-label">Investigations</div>
          <div className="story-list">
            <StoryCard
              tag={{ label: "Exclusive", variant: "exclusive" }}
              title="Leaked Documents Show 'Cheese Product' Never Once Touched a Cow"
              description="Internal memos obtained exclusively by RCN raise new questions about what, exactly, Big Processed Cheese has been selling America for forty years."
            />
            <StoryCard
              tag={{ label: "Follow the Whey", variant: "invest" }}
              title='Inside the Shell Companies Behind "Cheese Food"'
              description="A six-month investigation traces a tangled web of subsidiaries back to a single processing plant in a state that does not appear on any map."
            />
            <StoryCard
              tag={{ label: "Fact-Check", variant: "invest" }}
              title="Is That Cheese Real? We Investigate."
              description="RCN's fact-check desk reached out to twelve manufacturers. Only one returned our calls."
            />
            <StoryCard
              tag={{ label: "Exclusive", variant: "exclusive" }}
              title='We Obtained the Memos: Inside the "Aged 0 Days" Controversy'
              description='A whistleblower says the label "aged to perfection" was applied same-day, twice, on camera.'
            />
          </div>
        </div>

        <div>
          <InfoBox title="Investigation Tracker">
            <div className="caucus-item">
              <b>Status: Ongoing</b> — Follow the Whey, Part III, expected next week.
            </div>
            <div className="caucus-item">
              <b>Documents obtained:</b> 214
            </div>
            <div className="caucus-item">
              <b>Requests for comment sent:</b> 38
            </div>
            <div className="caucus-item" style={{ borderBottom: "none" }}>
              <b>Requests for comment returned:</b> 1
            </div>
          </InfoBox>
          <InfoBox title="Tip Line">
            Have documents on processed cheese practices? RCN Investigations protects its
            sources the way a good cheddar protects its rind.
          </InfoBox>
        </div>
      </div>
    </>
  );
}

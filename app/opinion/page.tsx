import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import InfoBox from "@/components/sidebar/InfoBox";

export const metadata = { title: "Opinion — Real Cheese Network" };

function OpCard({
  name,
  role,
  title,
  children,
}: {
  name: string;
  role: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="op-card">
      <div className="op-byline">
        <div className="op-avatar" />
        <div>
          <div className="op-name">{name}</div>
          <div className="op-role">{role}</div>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function OpinionPage() {
  return (
    <>
      <Ticker
        items={[
          { label: "OPINION", text: "Why string cheese is a threat to the republic" },
          { label: "PANEL", text: "Our pundits weigh in on the melt-quality crisis" },
          { label: "LETTERS", text: "Readers sound off on rind transparency" },
        ]}
      />

      <Hero
        tag="Opinion"
        title="Why String Cheese Is a Threat to the Republic"
        subtitle="Our panel of pundits and guest columnists on the issues shaping the cheese conversation — strong takes, freely given."
      />

      <div className="main">
        <div>
          <div className="section-label">Opinion</div>

          <OpCard name="Chip Gouda" role="Anchor & Senior Editor" title="Why String Cheese Is a Threat to the Republic">
            Individually wrapped snacking was supposed to be a convenience. Instead, it has
            become a symbol of everything we have surrendered in the name of &quot;ease.&quot; A
            nation that cannot commit to slicing its own cheese is a nation that cannot commit
            to much of anything.
          </OpCard>

          <OpCard name="Camembert Reyes" role="Guest Columnist, Cheese Board Quarterly" title="The Case for a National Rind Registry">
            If we can register a car, we can register a rind. This isn&apos;t bureaucracy for
            its own sake — it&apos;s the last line of defense between the American consumer
            and a wheel of mystery.
          </OpCard>

          <OpCard name="Provolone Marsh" role="RCN Panelist" title="In Defense of the Cheese Plate Snob">
            You call it pretentious. I call it vigilance. Someone has to ask what&apos;s in the
            fondue, and it might as well be the person holding the little knife.
          </OpCard>
        </div>

        <div>
          <InfoBox title="The Panel">
            <div className="caucus-item">
              <b>Chip Gouda</b> — Anchor, institutionalist, deeply suspicious of shredded bags.
            </div>
            <div className="caucus-item">
              <b>Camembert Reyes</b> — Policy wonk, wants everything notarized.
            </div>
            <div className="caucus-item" style={{ borderBottom: "none" }}>
              <b>Provolone Marsh</b> — Cheese plate purist, will not apologize for it.
            </div>
          </InfoBox>
          <InfoBox title="Letters to the Editor">
            &quot;I have never once trusted a cheese that comes in a can.&quot; — reader, Ohio
          </InfoBox>
        </div>
      </div>
    </>
  );
}

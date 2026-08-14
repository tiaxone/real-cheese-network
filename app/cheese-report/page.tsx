import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";

export const metadata = { title: "Cheese Report — Real Cheese Network" };

const REGIONS = [
  { region: "Northeast", icon: "🧀", forecast: "Sharp, with a chance of cheddar", aged: "Aged 14mo" },
  { region: "Midwest", icon: "♨️", forecast: "Fondue front, low visibility", aged: "Aged 2mo" },
  { region: "South", icon: "🌟", forecast: "Pimento pressure building", aged: "Aged 1mo" },
  { region: "West Coast", icon: "🧈", forecast: "Artisanal, mild volatility", aged: "Aged 8mo" },
  { region: "Mountain", icon: "❄️", forecast: "Firm, cold-smoked conditions", aged: "Aged 6mo" },
  { region: "Gulf Coast", icon: "🌦️", forecast: "Humid, soft-ripening risk", aged: "Aged 3wk" },
];

export default function CheeseReportPage() {
  return (
    <>
      <Ticker
        items={[
          { label: "WEATHER", text: "Cold front of bad fondue moves through the Midwest" },
          { label: "MELTDOWN INDEX", text: "Holding at 6.2 — elevated" },
          { label: "OUTLOOK", text: "Sharp conditions expected to persist through the weekend" },
        ]}
      />

      <Hero
        tag="Cheese Report"
        title="A Cold Front of Bad Fondue Moves Through the Midwest"
        subtitle="Your national cheese forecast, region by region, with the RCN Meltdown Index and this week's outlook."
      />

      <div className="main single-col">
        <div>
          <div className="section-label">Regional Forecast</div>
          <div className="weather-grid">
            {REGIONS.map((r) => (
              <div className="weather-card" key={r.region}>
                <div className="region">{r.region}</div>
                <div className="forecast-icon">{r.icon}</div>
                <div className="forecast-text">{r.forecast}</div>
                <div className="temp">{r.aged}</div>
              </div>
            ))}
          </div>

          <div className="section-label">Meltdown Index</div>
          <div className="index-bar-wrap">
            <div className="index-bar-label">
              <span>National average</span>
              <span>
                <b>6.2</b> — Elevated
              </span>
            </div>
            <div className="index-bar-track">
              <div className="index-bar-fill" style={{ width: "62%" }} />
            </div>
          </div>

          <div className="section-label">Seasonal Outlook</div>
          <div className="story-list">
            <StoryCard
              kicker="Long Range"
              title="Analysts Warn of Gouda Shortage Heading Into Fall"
              description="Supply chain pressure could push wholesale prices up double digits by October."
            />
            <StoryCard
              kicker="Advisory"
              title="Fondue Front Expected to Linger Through the Weekend"
              description="Residents in low-lying charcuterie regions are advised to stock rind accordingly."
            />
          </div>
        </div>
      </div>
    </>
  );
}

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Earn, Connect, Explore"
        description="TumaVideo creates an environment for you to earn while you create the content you love. Discover new challenges and earn real cash for the first time in Zambia paid directly to your mobile money account."
        showBtn
        mockupImg={assets.hero}
        banner="banner"
      />
      <SectionWrapper
        title="Create a tribe of followers"
        description="Find friends, invite your contacts and follow accounts that speak your creative language. From DIY creatives to local masters in their fields sharing exciting, relative content waiting for you to discover!"
        mockupImg={assets.cards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Find the latest news from various sources"
        description="We believe knowledge is power, and we have partnered with some trusted news providers to keep you up to date. Easy to find, and enjoyable articles on the app with the added bounce of earning real money by keeping up with Zambian current affairs."
        mockupImg={assets.mockup2}
        reverse
      />
      <SectionWrapper
        title="Milestones"
        description="Play games that test your knowledge of Zambia and learn interesting facts you may not have known otherwise. Dabble in the addition of international sidelines and compete against friends, to top the leaderboard proving that you a TumaVideo master!"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
          <span className="bold">Crowdsource Creators Ltd</span>
        </p>
      </div>
    </>
  );
};

export default App;

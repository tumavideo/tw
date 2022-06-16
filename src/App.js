import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Earn, Connect, Explore"
        description="...by filling in your profile with verified details and your preferred terms. Make extra cash by winning challenges or creating exclusive content for your own custom audience."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Create a tribe of followers"
        description="Find friends, invite your contacts and follow accounts that speak your creative language. From DIY creatives, to local masters in their fields sharing exciting, relative content waiting for you to discover!"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Zale Challenges"
        description="Participate in exciting challenges designed to inspire creativity and build awareness around important topics that affect us as a youth! If there is a challenge you have in mind, we are always willing and excited to chat with you to see how we can help spread the message, while giving participants the opportunity to be rewarded for their creativity with cash prizes."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Find the latest news from various sources"
        description="We believe knowledge is power, and we have partnered with some trusted news providers to keep you up to date. Easy to find, and enjoyable articles on the app with the added bounce of earning real money by keeping up with Zambian current affairs."
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

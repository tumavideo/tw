import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Create content..."
        description="...with easy, vibrant and interactive tools that celebrate your diversity and take you to the future. Go from sign up to viral in a few clicks."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Follow accounts..."
        description="...that you love and build a tribe that builds you. From masterclasses to funny content, there's a TumaVideo for you."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Discover..."
        description="...new ways to create, earn and connect with an app made for you. TumaVideo is Truly Zambian built to show off your creativity."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Earn..."
        description="...by filling in your profile with verified details and your preferred terms. Make extra cash by winning challenges or creating exclusive content for your own custom audience."
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

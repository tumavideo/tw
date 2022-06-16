import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Zale Challenges
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            TumaVideo helps you earn while you create the content you love.
            Discover new challenges and earn real cash rewards paid directly to
            you.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="Company Logo 1" />
          <FeatureCard iconUrl={assets.javascript} iconText="Company Logo 2" />
        </div>
      </div>
    </div>
  );
};

export default Features;

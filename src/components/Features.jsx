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
            Zali Challenges
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Participate in exciting challenges designed to inspire creativity
            and build awareness around important topics that affect us as youth!
            If there is a challenge you have in mind, we are always willing and
            excited to chat with you to see how we can help spread the message,
            while giving participants the opportunity to be rewarded for their
            creativity with cash prizes.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard
            iconUrl={assets.csc}
            iconText="Crowdsource Creators Ltd"
          />
          <FeatureCard iconUrl={assets.tv} iconText="TumaVideo" />
        </div>
      </div>
    </div>
  );
};

export default Features;

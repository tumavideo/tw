import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the app
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            We created this app for you! Built by Zambians, for Zambians to
            express our culture our way. We hope you. enjoy it as much as we
            enjoyed creating it for you!
          </p>
        </div>
        <button className={styles.btnPrimary}>Download</button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;

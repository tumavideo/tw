import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img alt="app_icon" src={assetUrl} />
    </div>
  );
};

export default Button;

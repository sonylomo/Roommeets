import React from "react";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import styles from "./SwipeBtns.module.css";
import IconButton from "@material-ui/core/IconButton";

function SwipeBtns() {
  return (
    <div className={styles.swipeBtns}>
      <IconButton className={styles.swipeBtn_replay}>
        <Replay fontSize="large" />
      </IconButton>
      
      <IconButton className={styles.swipeBtn_close}>
        <Close fontSize="large" />
      </IconButton>

      <IconButton className={styles.swipeBtn_star}>
        <StarRate fontSize="large" />
      </IconButton>

      <IconButton className={styles.swipeBtn_favorite}>
        <Favorite fontSize="large" />
      </IconButton>

      <IconButton className={styles.swipeBtn_lightning}>
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeBtns;

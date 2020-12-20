import { IconButton } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import React from "react";
// import WhatshotIcon from '@material-ui/icons/Whatshot';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <IconButton>
        <PeopleIcon className={styles.icon} fontSize="large" />
      </IconButton>
      {/* <WhatshotIcon fontSize='large' /> */}
      <img
        className={styles.logo}
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
      />
      <IconButton>
        <QuestionAnswerIcon className={styles.icon} fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;

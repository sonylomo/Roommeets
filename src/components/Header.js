import { IconButton } from "@material-ui/core";
import { People, QuestionAnswer } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
// import WhatshotIcon from '@material-ui/icons/Whatshot';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <IconButton>
        <People className={styles.icon} fontSize="large" />
      </IconButton>
      {/* <WhatshotIcon fontSize='large' /> */}
      <Link to="/">
        <img
          className={styles.logo}
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <QuestionAnswer className={styles.icon} fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;

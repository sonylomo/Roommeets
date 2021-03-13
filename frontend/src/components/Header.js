import { IconButton } from "@material-ui/core";
import { ArrowBackIos, People, QuestionAnswer } from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
// import WhatshotIcon from '@material-ui/icons/Whatshot';
import styles from "./Header.module.css";

const Header = ({ backBtn }) => {
  const history = useHistory();
  return (
    <div className={styles.header}>
      {backBtn ? (
        <IconButton onClick={() => history.replace(backBtn)}>
          <ArrowBackIos fontSize="large" className={styles.backBtn} />
        </IconButton>
      ) : (
        <Link to="/chat">
          <IconButton>
            <People className={styles.icon} fontSize="large" />
          </IconButton>
        </Link>
      )}

      {/* <WhatshotIcon fontSize='large' /> */}
      <Link to="/">
        <img
          className={styles.logo}
          // src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          src='https://1000logos.net/wp-content/uploads/2019/05/Avengers-logo-500x281.png'
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

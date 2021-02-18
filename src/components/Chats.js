import React from "react";
import Chat from "./Chat"
import styles from './Chats.module.css'


function Chats() {
  return (
    <div className={styles.chats}>
      <Chat
        name="Sonia"
        message="Hello your Awesomeness"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Age of Ultron"
        message="Ssup"
        timestamp="10 seconds ago"
        profilePic="https://1000logos.net/wp-content/uploads/2019/05/Avengers-emblem-500x281.jpg"
      />
      <Chat
        name="Infinity War"
        message="Ola!"
        timestamp="40 minutes ago"
        profilePic="https://1000logos.net/wp-content/uploads/2019/05/Avengers-infinity-war-logo-500x281.jpg"
      />
      <Chat
        name="Endgame"
        message="Hey there"
        timestamp="1 hour ago"
        profilePic="https://1000logos.net/wp-content/uploads/2019/05/Avengers-Endgame-logo-500x281.jpg"
      />
    </div>
  );
}

export default Chats;

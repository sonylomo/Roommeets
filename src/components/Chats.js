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
        name="Sonia"
        message="Hello your Awesomeness"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Sonia"
        message="Hello your Awesomeness"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Sonia"
        message="Hello your Awesomeness"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;

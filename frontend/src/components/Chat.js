import React from 'react'
import styles from './Chat.module.css'
import Avatar from '@material-ui/core/Avatar'

function Chat({name, message, profilePic, timestamp}) {
    return (
        <div className={styles.chat}>
            <Avatar className={styles.chatImage} src={profilePic} alt={name} />
            <div className={styles.chatDetails}>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className={styles.chatTimestamp}>{timestamp}</p>
        </div>
    )
}

export default Chat

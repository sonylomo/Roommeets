import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import styles from './Cards.module.css';

const Cards = () => {
  const [People, setPeople] = useState([
    {
      name: "Ironman",
      url:
        "https://unsplash.com/photos/bCT0iuBdECs",
    },
    {
      name: "Spiderman",
      url:
        "https://unsplash.com/photos/mp295uolfDs",
    },
  ]);

  return (
    <div>
      <h1>Cards for tinder</h1>

      {People.map((person) => {
        <TinderCard className={styles.swipe} key={person.name}
        preventSwipe={['up', 'down']}>
          <div
            className={styles.card}
            Style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      })}
    </div>
  );
};

export default Cards;

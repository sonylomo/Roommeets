import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import styles from "./Cards.module.css";
import database from "./firebase";

const Cards = () => {
  const [People, setPeople] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
  //     setPeople(snapshot.docs.map((doc) => doc.data()));
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div>
      <div className={styles.cardContainer}>
        {People.map((person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;

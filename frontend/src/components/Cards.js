import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import styles from "./Cards.module.css";
import axios from "./axios";
// import database from "./firebase";

const Cards = () => {
  const [People, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("tindev/cards");
      setPeople(req.data);
    };

    fetchData();
  }, []);

  console.log(People);

  return (
    <div>
      <div className={styles.cardContainer}>
        {People.map((person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
            preventSwipe={["up", "down"]}
            // onSwipe={(dir) => swiped(dir, person.name)}
            // onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${person.imgUrl})` }}
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

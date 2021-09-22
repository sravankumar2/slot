import React, { useState, useRef } from "react";
import styles from "./Game.module.css";

function Game({ handleClose }) {
  const [fruit1, setFruit1] = useState("-");
  const [fruit2, setFruit2] = useState("-");
  const [fruit3, setFruit3] = useState("-");
  const [bal, setBal] = useState(localStorage.getItem("balance"));
  const [tableData, setNewTableData] = useState(
    localStorage.getItem("tableData") ? localStorage.getItem("tableData") : []
  );
  const [rolling, setRolling] = useState(false);

  let slotRef = [useRef(fruit1), useRef(fruit2), useRef(fruit3)];
  const fruits = ["🍒", "🍉", "🍊"];

  const roll = () => {
    setBal((prev) => prev - 2);

    if (fruit1 === fruit2 && fruit2 === fruit3) {
      console.log("you win 3");
      setBal((prev) => prev + 5);
      console.log({ fruit1, fruit2, fruit3 });
    } else if (fruit1 === fruit2) {
      console.log("you won 2");
      setBal((prev) => prev + 2);
      console.log(fruit1, fruit2);
    } else if (fruit2 === fruit3) {
      console.log("you won 2");
      setBal((prev) => prev + 2);
      console.log(fruit2, fruit3);
    }
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
      localStorage.setItem("balance", bal);
    }, 1000);

    slotRef.forEach((slot, i) => {
      const selected = triggerSlotRotation(slot.current);
      if (i + 1 == 1) setFruit1(selected);
      else if (i + 1 == 2) setFruit2(selected);
      else setFruit3(selected);
    });

    const newData = {
      slot1: fruit1,
      slot2: fruit2,
      slot3: fruit3,
      balance: bal,
      time: new Date().toLocaleTimeString(),
    };
    setNewTableData((tableData) => [...tableData, newData]);
    console.log({ data: tableData });
    localStorage.setItem("tableData", JSON.stringify(tableData));
  };

  const triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(Math.random() * fruits.length);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return fruits[randomOption];
  };

  return (
    <div className={styles.container1}>
      <div className={styles.slot_wrapper}>
        <div className={styles.slot}>
          <section>
            <div className={styles.container} ref={slotRef[0]}>
              {fruits.map((fruit, i) => (
                <div key={i}>
                  <span>{fruit}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className={styles.slot}>
          <section>
            <div className={styles.container} ref={slotRef[1]}>
              {fruits.map((fruit, i) => (
                <div key={i}>
                  <span>{fruit}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className={styles.slot}>
          <section>
            <div className={styles.container} ref={slotRef[2]}>
              {fruits.map((fruit, i) => (
                <div key={i}>
                  <span>{fruit}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <div
          className={!rolling ? styles.roll : styles.roll}
          onClick={roll}
          disabled={rolling}
        >
          {rolling ? "Rolling..." : "ROLL"}
        </div>
        <div className={styles.roll} onClick={handleClose} disabled={rolling}>
          Close
        </div>
      </div>
    </div>
  );
}
export default Game;

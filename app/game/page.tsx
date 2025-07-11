"use client";
import styles from "./page.module.css";
import FarmTile from "../components/FarmTile";

export default function Game() {
  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.title}>Farm Game</h1>
      
      
      <div className={styles.farmGrid}>
        <FarmTile id={0} />
        <FarmTile id={1} />
        <FarmTile id={2} />
        <FarmTile id={3} />
        <FarmTile id={4} />
        <FarmTile id={5} />
        <FarmTile id={6} />
        <FarmTile id={7} />
        <FarmTile id={8} />
        <FarmTile id={9} />
        <FarmTile id={10} />
        <FarmTile id={11} />
        <FarmTile id={12} />
        <FarmTile id={13} />
        <FarmTile id={14} />
        <FarmTile id={15} />
      </div>
    </div>
  );
}

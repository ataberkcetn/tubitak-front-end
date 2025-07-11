"use client";
import styles from "./page.module.css";
import { useBalance, GAME_PRICES } from "../contexts/BalanceContext";
import { useRouter } from "next/navigation";

export default function Store() {
  const { balance, seedStock, buySeed, sellSeed } = useBalance();
  const router = useRouter();

  const handleAddItem = () => {
    if (!buySeed()) {
      alert(
        "Yetersiz bakiye! Papatya tohumu için " +
          GAME_PRICES.SEED_COST +
          "$ gerekli."
      );
    }
  };

  const handleRemoveItem = () => {
    sellSeed();
  };

  const handleBackToGame = () => {
    router.push("/game");
  };

  return (
    <div className={styles.storeContainer}>
      <div className={styles.balanceDisplay}>
        <h2>Bakiye: {balance}$</h2>
      </div>

      <h1 className={styles.title}>Tohum Mağazası</h1>

      <div className={styles.storeGrid}>
        <div className={styles.storeItem}>
          <h3 className={styles.itemName}>Papatya Tohumu</h3>
          <p className={styles.itemPrice}>{GAME_PRICES.SEED_COST}$</p>

          <div className={styles.quantityControls}>
            <button
              className={styles.minusBtn}
              onClick={handleRemoveItem}
              disabled={seedStock === 0}
            >
              -
            </button>

            <span className={styles.quantity}>{seedStock}</span>

            <button className={styles.plusBtn} onClick={handleAddItem}>
              +
            </button>
          </div>
        </div>
      </div>

      <button className={styles.backBtn} onClick={handleBackToGame}>
        Tarlaya Dön
      </button>
    </div>
  );
}

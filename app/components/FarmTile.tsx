import styles from "./farmtile.module.css";
import { useState, useEffect } from "react";
import { useBalance, GAME_PRICES } from "../contexts/BalanceContext";

export default function FarmTile({ id }: { id: number }) {
  const [stage, setStage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { balance, seedStock, plantSeed, earnMoney } = useBalance();

  const stages = [
    { text: "", className: "" },
    { text: "T", className: "planted" },
    { text: "F", className: "sprout" },
    { text: "B", className: "plant" },
    { text: "Ç", className: "flower" },
    { text: "K", className: "dried" },
  ];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setStage((prevStage) => {
          const nextStage = (prevStage + 1) % stages.length;

          

          if (nextStage === 5) {
            setIsActive(false);
          }

          return nextStage;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  const handleClick = () => {
    if (stage === 5) {
      if (clickCount === 0) {
        setStage(0);
        setClickCount(1);
        setIsActive(false);
      } else {
        
        if (plantSeed()) {
          setStage(1);
          setIsActive(true);
          setClickCount(0);
        } else {
          alert("Tohum stoğunuz yok! Mağazadan tohum satın alın.");
        }
      }
    } else if (stage === 4) {
      
      earnMoney(GAME_PRICES.HARVEST_REWARD);
      setStage(0);
      setIsActive(false);
      setClickCount(0);
    } else if (stage === 0) {
      
      if (plantSeed()) {
        setStage(1);
        setIsActive(true);
        setClickCount(0);
      } else {
        alert("Tohum stoğunuz yok! Mağazadan tohum satın alın.");
      }
    }
  };

  const currentStage = stages[stage];

  return (
    <div
      className={`${styles.farmTile} ${
        currentStage.className ? styles[currentStage.className] : ""
      }`}
      onClick={handleClick}
    >
      {currentStage.text}
    </div>
  );
}

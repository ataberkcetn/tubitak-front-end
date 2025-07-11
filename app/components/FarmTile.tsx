import styles from "./farmtile.module.css";
import { useState, useEffect } from "react";

export default function FarmTile({ id }: { id: number }) {
  const [stage, setStage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);

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

          if (nextStage === 4) {
            setTimeout(() => {
              setStage(5);
            }, 4000);
          }

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
      } else {
        setStage(1);
        setIsActive(true);
        setClickCount(0);
      }
    } else if (stage === 0) {
      setStage(1);
      setIsActive(true);
      setClickCount(0);
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

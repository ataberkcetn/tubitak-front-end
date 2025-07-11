import styles from "./farmtile.module.css";
import { useState } from "react";

export default function FarmTile({id} : {id: number}) {
  const [stage, setStage] = useState(0);
  
  const stages = [
    { text: "", className: "" }, 
    { text: "T", className: "planted" }, 
    { text: "F", className: "sprout" }, 
    { text: "B", className: "plant" }, 
    { text: "Ç", className: "flower" }, 
    { text: "K", className: "dried" } 
  ];

  const handleClick = () => {
    setStage((prevStage) => (prevStage + 1) % stages.length);
  };

  const currentStage = stages[stage];

  return (
    <div 
      className={`${styles.farmTile} ${currentStage.className ? styles[currentStage.className] : ''}`}
      onClick={handleClick}
    >
      {currentStage.text}
    </div>
  );
}

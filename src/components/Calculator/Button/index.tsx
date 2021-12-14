import * as React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  name: string;
  handlerButtonCalculate?: () => void;
}

export function Button({ name, handlerButtonCalculate }: ButtonProps) {
  const typeButton: "button" | "reset" =
    name === "Calcular" ? "button" : "reset";

  return (
    <div className={styles.container}>
      <button
        type={typeButton}
        className={styles.button}
        onClick={handlerButtonCalculate}
      >
        {name}
      </button>
    </div>
  );
}

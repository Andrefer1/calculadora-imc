import * as React from "react";
import styles from "./formula.module.scss";

export function Formula() {
  return (
    <div className={styles.container}>
      <h3>Fórmula Matemática</h3>
      <div className={styles.content}>
        <div>IMC =</div>
        <div className={styles.data}>
          <div>peso (kg)</div>
          <hr />
          <div>
            altura (m)<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

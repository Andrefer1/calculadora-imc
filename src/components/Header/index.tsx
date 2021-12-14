import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.content}>
        <h1>Calculadora IMC</h1>
      </header>
    </div>
  );
}

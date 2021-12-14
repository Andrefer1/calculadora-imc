import * as React from "react";
import { useState } from "react";
import { Formula } from "./components/Formula";
import { Calculator } from "./components/Calculator";
import { Table } from "./components/Table";
import { References } from "./components/References";

import styles from "./home.module.scss";

export default function App() {
  const [resultICM, setResultICM] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          A classificação do índice de massa corporal (IMC), pode ajudar a
          identificar obesidade ou desnutrição em crianças, adolescentes,
          adultos e idosos.
        </p>
        <p>
          Além de saber qual é o seu IMC, essa calculadora também indica qual
          deve ser o seu peso ideal para alcançar a sua melhor forma, e assim
          melhorar sua qualidade de vida, garantindo o seu bem estar.
        </p>

        <Formula />

        <p>
          Coloque os seus dados na calculadora a seguir e saiba qual é o seu
          IMC:
        </p>

        <Calculator setResultICM={setResultICM} />

        <Table result={resultICM} />

        <References />
      </div>
    </div>
  );
}

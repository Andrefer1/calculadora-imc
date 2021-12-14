import * as React from "react";
import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

import styles from "./calculator.module.scss";

interface CalculatorProps {
  setResultICM: (result: {}) => void;
}

export function Calculator({ setResultICM }: CalculatorProps) {
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  function handlerButtonCalculate() {
    const imc = ((weight / (height * height)) * 10000).toFixed(2);

    setResultICM({
      imc: Number(imc),
      age
    });

    return setResult(Number(imc));
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form>
          <Input span="Idade (anos)" placeholder="Ex: 35" setAge={setAge} />
          <Input
            span="Altura (cm)"
            placeholder="Ex: 175"
            setHeight={setHeight}
          />
          <Input
            span="Peso (kg)"
            placeholder="Ex: 54,3"
            setWeight={setWeight}
          />

          <Button
            name="Calcular"
            handlerButtonCalculate={handlerButtonCalculate}
          />

          <Button name="Limpar" />
        </form>

        <div className={styles.result}>
          <p>Seu IMC é </p>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

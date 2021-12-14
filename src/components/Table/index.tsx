import * as React from "react";
import { useEffect } from "react";
import styles from "./table.module.scss";

interface TableProps {
  result: {
    imc: number;
    age: number;
  };
}

export function Table({ result }: TableProps) {
  useEffect(() => {
    for (let i = 1; i < 9; i++) {
      let getElementActive = document.getElementById(`${i}`);

      if (getElementActive?.hasAttribute("class")) {
        return getElementActive?.removeAttribute("class");
      }
    }

    for (let i = 1; i < 4; i++) {
      let getElementActive = document.getElementById(`${i}I`);

      if (getElementActive?.hasAttribute("class")) {
        return getElementActive?.removeAttribute("class");
      }
    }
  }, []);

  useEffect(() => {
    let element: HTMLElement | null = null;

    const imc = result.imc;
    const age = result.age;

    if (age < 60) {
      if (imc < 16) {
        element = document.getElementById("1");
      } else if (imc >= 16 && imc <= 16.99) {
        element = document.getElementById("2");
      } else if (imc >= 17 && imc <= 18.49) {
        element = document.getElementById("3");
      } else if (imc >= 18.5 && imc <= 24.9) {
        element = document.getElementById("4");
      } else if (imc >= 25 && imc <= 29.9) {
        element = document.getElementById("5");
      } else if (imc >= 30 && imc <= 34.99) {
        element = document.getElementById("6");
      } else if (imc >= 35 && imc <= 39.99) {
        element = document.getElementById("7");
      } else {
        element = document.getElementById("8");
      }
    } else if (age >= 60) {
      if (imc <= 22.99) {
        element = document.getElementById("1I");
      } else if (imc >= 23 && imc <= 26.99) {
        element = document.getElementById("2I");
      } else {
        element = document.getElementById("3I");
      }
    }

    return element?.setAttribute("class", styles.active);
  }, [result.imc, result.age]);

  return (
    <div className={styles.container}>
      <p>
        <strong>
          Classificação da OMS em relação a baixo peso, sobrepeso e obesidade de
          adultos de acordo com o IMC, incluindo pontos de corte recomendados
          pela Consulta de Especialistas da OMS.
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>CLASSIFICAÇÃO</th>
            <th>OBESIDADE (GRAU)</th>
          </tr>
        </thead>
        <tbody>
          <tr id="1">
            <td>MENOR OU IGUAL A 15,99</td>
            <td>BAIXO PESO (MAGREZA SEVERA)</td>
            <td>0</td>
          </tr>
          <tr id="2">
            <td>ENTRE 16 E 16,99</td>
            <td>BAIXO PESO (MAGREZA MODERADA)</td>
            <td>0</td>
          </tr>
          <tr id="3">
            <td>ENTRE 17 E 18,49</td>
            <td>BAIXO PESO (MAGREZA LEVE)</td>
            <td>0</td>
          </tr>
          <tr id="4">
            <td>ENTRE 18,5 E 24,9</td>
            <td>NORMAL</td>
            <td>0</td>
          </tr>
          <tr id="5">
            <td>ENTRE 25 E 29,9</td>
            <td>SOBREPESO (PRÉ-OBESIDADE)</td>
            <td>0</td>
          </tr>
          <tr id="6">
            <td>ENTRE 30 E 34,99</td>
            <td>OBESIDADE</td>
            <td>I</td>
          </tr>
          <tr id="7">
            <td>ENTRE 35 E 39,99</td>
            <td>OBESIDADE</td>
            <td>II</td>
          </tr>
          <tr id="8">
            <td>MAIOR OU IGUAL A 40</td>
            <td>OBESIDADE GRAVE</td>
            <td>III</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Classificação de peso pelo IMC para idosos.</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>CLASSIFICAÇÃO</th>
            <th>OBESIDADE (GRAU)</th>
          </tr>
        </thead>
        <tbody>
          <tr id="1I">
            <td>MENOR OU IGUAL A 22.99 </td>
            <td>BAIXO PESO</td>
            <td>0</td>
          </tr>
          <tr id="2I">
            <td>ENTRE 23 E 26,99</td>
            <td>ADEQUADO OU EUTRÓFICO</td>
            <td>0</td>
          </tr>
          <tr id="3I">
            <td>MAIOR OU IGUAL A 27</td>
            <td>SOBREPESO</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

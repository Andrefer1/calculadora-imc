import * as React from "react";

interface InputProps {
  span: string;
  placeholder: string;
  setAge?: (age: number) => void;
  setHeight?: (height: number) => void;
  setWeight?: (weight: number) => void;
}

export function Input({
  span,
  placeholder,
  setAge,
  setHeight,
  setWeight
}: InputProps) {
  function handleData(e: Event) {
    const number = Number(e.target?.value);

    if (setAge) {
      setAge(number);
    } else if (setHeight) {
      setHeight(number);
    } else if (setWeight) {
      setWeight(number);
    }
  }

  return (
    <div>
      <span>{span}</span>
      <input
        type="number"
        placeholder={placeholder}
        onKeyUp={(e) => handleData(e)}
        required
      />
    </div>
  );
}

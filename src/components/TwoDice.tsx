import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
  return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
  const [leftValue, setLeftValue] = useState<number>(5);
  const [rightValue, setRightValue] = useState<number>(3);
  function setLeft(): void {
    setLeftValue(d6());
  }
  function setRight(): void {
    setRightValue(d6());
  }
  return (
    <div>
      <span data-testid="left-die">{leftValue}</span>
      <span data-testid="right-die">{rightValue}</span>
      <Button onClick={setLeft}>Roll Left</Button>
      <Button onClick={setRight}>Roll Right</Button>
      {leftValue === 1 && rightValue === 1 ? <span>Lose</span> : <span></span>}
      {leftValue === rightValue && leftValue != 1 ? (
        <span>Win</span>
      ) : (
        <span></span>
      )}
    </div>
  );
}

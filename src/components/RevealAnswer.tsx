import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);

  function invertVisibility(): void {
    setVisible(!visible);
  }
  return (
    <div>
      <Button onClick={invertVisibility}>Reveal Answer</Button>
      {!visible && <div>42</div>}
    </div>
  );
}

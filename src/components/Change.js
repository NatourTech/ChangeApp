import React, { useState } from "react";
import "./style/Change.css";
import Sale from "./Sale";
import Buy from "./Buy";

function Change() {
  const [typeChange, setTypeChange] = useState(false);

  const saleChange = () => {
    setTypeChange(true);
  };
  const buyChange = () => {
    setTypeChange(false);
  };

  return (
    <div>
      <button className="sale" onClick={saleChange}>
        Sale
      </button>
      <button className="buy" onClick={buyChange}>
        Buy
      </button>
      {typeChange ? <Sale /> : <Buy />}
    </div>
  );
}

export default Change;

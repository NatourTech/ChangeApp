import React , {useState, useEffect } from "react";
import "./style/Buy.css";
import "./Sale";
import Sale from "./Sale";
function Buy() {

  const [value1, SetValue] = useState(0);
  const [select, setSelect] = useState("usd");
  const [result, setResult] = useState(0);



  function selectHandler(selectType) {
    setSelect(selectType.target.value.toLowerCase());
  }
  function inputHandler(event) {
    
    const inputAmount = event.target.value;
    SetValue(inputAmount);
  }

  fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json",
    { method: "GET" }
  ).then((res) =>
    res.json().then((data) => {
      const ils = data.ils;
      for (let k in ils) {
        if (select == k) {

          setResult(value1*(ils[k]*10)); 
        }
      }
    })
  );



  return (<div className="sale-form">
  <h1 className="title">Buy</h1>
  <form className="form">
    <select className="select"  onChange={selectHandler} >
      <option>USD</option>
      <option>EUR</option>
    </select>
    <br></br>
    <input
      type="number"
      placeholder="ChangeAmount"
      className="input"
      onChange={inputHandler}
    ></input>
    <br></br>
    <input
      type="number"
      className="input"
      readOnly="true"
      value={Number(result).toFixed(2)}
    ></input>
  </form>
</div>);
}

export default Buy;

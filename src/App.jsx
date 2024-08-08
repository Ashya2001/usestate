import React, { useState } from "react";

const App = () => {
  //let counter=5;

  let [counter, setCounter] = useState(1);

  const addValue = () => {
    if(counter ==20){
      setCounter(counter =20);
    }else{
      setCounter(counter + 1);
    }
  };

  const RemoveValue = () => {
if(counter ==0){
  setCounter(counter =0);
}else{
  setCounter(counter - 1);
}

    
  };

  return (
    <>
      <h1>React vite</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />

      <button onClick={RemoveValue}>Remove value</button>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";

const App = () => {

  
  const [currCount, setCurrCount] = useState (()=>{
    return (Number(localStorage.getItem('saveCount')) || 0)
  });
  
  useEffect(() => {
    localStorage.setItem('saveCount', currCount)
  }, [currCount])
  

  // increase the count value
  const increaseCount = () => {
    setCurrCount(currCount + 1);
  };


  // decrease the count value
  const decreaseCount = () => {
    if (currCount > 0) {
      setCurrCount(currCount - 1);
    }
  };


  // reset the count
  const resetCount = () =>{
    setCurrCount(0)
  }

  return (
    <div className="container">
      <h1 className="app-name">Counter App</h1>


    <div className="body">
          <div className="left">
        {/* increase button */}
      <button className="increase-btn btn"
       onClick={()=>{
        increaseCount()
      }}>Increase</button>

      {/*  decrease button */}
      <button className="decrease-btn btn"
       onClick={()=>{
        decreaseCount()
      }}>Decrease</button>

      {/* reset button */}
      <button
      className="reset-btn btn"
      onClick={ ()=>{
        resetCount()
      }}
      >Reset</button>
    </div>

      <div className="right">
        <div className="display-count">
        <h1>{currCount}</h1>
      </div>
      </div>

    </div>


    </div>
  );
};

export default App;

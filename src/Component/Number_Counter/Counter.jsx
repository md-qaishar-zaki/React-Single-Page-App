import React, { useState } from 'react'; 

function App() {

  const [Counter, setCounter] = useState(10); //useState

  const addCounter = () => {
    setCounter(perCounter => perCounter + 1);
    setCounter(perCounter => perCounter + 1); // all these lines are extra
    setCounter(perCounter => perCounter + 1); // all these lines are extra
    setCounter(perCounter => perCounter + 1); // all these lines are extra
    setCounter(perCounter => perCounter + 1); // all these lines are extra
  }

  return (
    <>
      <h2>Welcome</h2>
      <div class="container">
        <p>{Counter}</p>
        <button onClick={addCounter}>Add</button>
      </div>
    </>
  );
}

export default App;

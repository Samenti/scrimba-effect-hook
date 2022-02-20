import React from 'react';

export default function App() {
  const [iceAndFireData, setIceAndFireData] = React.useState({});
  
  // 1. GET the data (fetch)
  // 2. Save the data to state
  console.log("Component rendered");
  
  /* this will create an infinite loop, because fetch calls setState, 
  which causes the component to re-render and that in turn causes 
  fetch to run again */
  // fetch("https://sam-cors.herokuapp.com/https://anapioficeandfire.com/api/characters/583")
  //   .then(res => res.json())
  //   .then(data => setIceAndFireData(data));

  /* setting a side effect without setting the dependency parameter
  would still result in an infinite loop, although the fetch would
  be forced to happen after the render is completed */
  // React.useEffect(function () {
  //   fetch("https://sam-cors.herokuapp.com/https://anapioficeandfire.com/api/characters/583")
  //     .then(res => res.json())
  //     .then(data => setIceAndFireData(data));
  // });

  return (
    <div className="container">
      <pre>{JSON.stringify(iceAndFireData, null, 2)}</pre>
    </div>
  );
};
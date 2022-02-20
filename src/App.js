import React from 'react';

export default function App() {
  const [iceAndFireData, setIceAndFireData] = React.useState({});
  const [count, setCount] = React.useState(0);
  
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

  /* an empty dependency list parameter lets React know that it should
  only run the effect after the first render (when the component is mounted)
  and then never again, because there are no conditions to watch for */
  React.useEffect(function () {
    fetch("https://sam-cors.herokuapp.com/https://anapioficeandfire.com/api/characters/583")
      .then(res => res.json())
      .then(data => setIceAndFireData(data));
  }, []);

  /* if we're modifying state with some user input as in this case, the
  state can serve as a dependency for the side effect function */
  // React.useEffect(function () {
  //   console.log('Effect ran');
  // }, [count]);

  return (
    <div className="container">
      <pre>{JSON.stringify(iceAndFireData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  );
};
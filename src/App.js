import React from 'react';

export default function App() {
  const [iceAndFireData, setIceAndFireData] = React.useState({});
  const [count, setCount] = React.useState(583);

  console.log("Component rendered");
  
  React.useEffect(function () {
    console.log("Effect ran");
    fetch(`https://sam-cors.herokuapp.com/https://anapioficeandfire.com/api/characters/${count}`)
      .then(res => res.json())
      .then(data => setIceAndFireData(data));
  }, [count]);

  return (
    <div className="container">
      <pre>{JSON.stringify(iceAndFireData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button
        onClick={() => setCount(prevCount => prevCount + 1)}
      >Get Next Character</button>
    </div>
  );
};
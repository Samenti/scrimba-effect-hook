1. What is a "side effect" in React? What are some examples?
A piece of code that will interact with something outside of React or something React is not in charge of.
Examples: local storage, API, websocket subscriptions, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
Anything React is in charge of.
Examples: maintaining state, keeping the UI in sync with the data, render UI


3. When does React run your useEffect function? When does it NOT run
the effect function?
- As soon as the component loads (mounts, first renders)
- On every re-render (update) of the component, assuming no dependencies array
It will not run the effect:
- when the values of the dependencies in the array stay the same between renders


4. How would you explain what the "dependecies array" is?
- it's the second parameter to the useEffect function
- a way for React to know whether it should re-run the effect function

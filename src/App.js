import React from 'react';
import './style.css';

export default function App() {
  const temp_stores = [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }];

  function handleClick(event) {
    console.log(event.target);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div onClick={handleClick}>
        {temp_stores.map((store) => {
          return (
            <div id={store.name} key={store.name}>
              {store.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

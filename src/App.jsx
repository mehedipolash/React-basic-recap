import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import Bowler from './Bowler';

function App() {
  function handleClick() {
    alert('I am clicked');
  }

  const handleClick3 = () => {
    alert('clicked 3');
  };

  const handleAdd10 = num => {
    const newNum = num + 10;
    alert(newNum);
  };
  return (
    <>
      <h3>Vai cholen React sikhi</h3>

      <Batsman></Batsman>
      <Bowler></Bowler>

      <Counter></Counter>

      {/* <button>Click me</button> */}
      <button onClick={handleClick}>Click me</button>

      {/* another way to create function for click given below(not recommended)*/}
      <button
        onClick={function handleClick2() {
          alert('clicked2');
        }}
      >
        Click me 2
      </button>

      {/* this will we use most of the time for eventhandlewre in jsx given below */}
      <button onClick={handleClick3}>click me 3</button>

      {/* below type of eventhandler is another way but not recommended  */}
      <button onClick={() => alert('clicked 4')}>click me 4</button>

      {/* if u want to send parameter to a function then folow below btn */}
      <button onClick={() => handleAdd10(10)}>click add5</button>
    </>
  );
}

export default App;

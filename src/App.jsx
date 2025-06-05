import './App.css';
import Counter from './Counter';
import Users from './Users.jsx';
import Friends from './Friends.jsx';
import Batsman from './Batsman';
import Bowler from './Bowler';
import { Suspense } from 'react';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
  res => res.json()
);

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

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
      <h3>Vai cholen REACT sikhi</h3>

      <Suspense fallback={<h3>friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>
      <Bowler></Bowler>

      <Counter></Counter>

      {/* different way to use eventlistner me</button>

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

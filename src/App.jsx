import './App.css';
import Counter from './Counter';
import Users from './Users.jsx';
import Friends from './Friends.jsx';
import Batsman from './Batsman';
import Bowler from './Bowler';
import { Suspense } from 'react';
import Posts from './Posts.jsx';

/* const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
  res => res.json()
); */

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick() {
    alert('btn 1 clicked');
  }

  const handleClick3 = () => {
    alert('btn 3 clicked');
  };

  const handleAdd10 = num => {
    //console.log('btn 5 clicked');
    const newNum = num + 10;
    alert(newNum);
  };
  return (
    <>
      <h3>Vai cholen REACT sikhi</h3>

      {/* <Suspense fallback={<h4>Post are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      <Suspense fallback={<h3>friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users x={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>
      <Bowler></Bowler>

      <Counter></Counter>

      {/*  different way to use eventlistner  */}

      <button onClick={handleClick}>Click me</button>

      {/* another way to create function for click given below(not recommended)*/}
      <button
        onClick={function handleClick2() {
          alert('btn 2 clicked');
        }}
      >
        Click me 2
      </button>

      {/* this will we use most of the time for eventhandlewre in jsx given below */}
      <button onClick={handleClick3}>click me 3</button>

      {/* below type of eventhandler is another way but not recommended  */}
      <button onClick={() => alert('btn 4 clicked')}>click me 4</button>

      {/* if u want to send parameter to a function then folow below btn */}
      <button onClick={() => handleAdd10(10)}>click add5</button>
    </>
  );
}

export default App;

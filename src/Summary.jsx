/**
 * Component
 * JSX
 * Props
 * State
 * Event
 * [Conditional rendering]
 
*/

/**
 * 1.Api:  url: "https://jsonplaceholder.typicode.com/users"
 *
 *
 */

/***
 * 1.just write a simple fetch with json conversion.
 * 2.wrap the data loading component under suspence
 *
 */

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
//   .then(data => console.log(data))

// const loadData =async ()=> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = res.json()
//   return data;
//   }

/**
 * 1.Event trigger
 * 2.State
 * 3.Data load from API
 * 4.loop through display data
 * 5.why we use key prop?
 */

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUser] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h2>External User</h2>
      {
        users.map(user => <User name={user.name} email={user.email} website={user.website} username={ user.username}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user-container'>
      <h3>Name: {props.name}</h3>
      <h6>Email: {props.email}</h6>
      <h4>website: {props.website}</h4>
      <h4>username: { props.username}</h4>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);


    // const increaseCount = () => {
    //   const newCount = count + 1;
    //   setCount(newCount);
  return (
    <div className='counter'>
      <h2>Counter {count}</h2>
      <div className='btn-count'>
        <button className='btn' onClick={increaseCount}>Increase</button>
        <button className='btn' onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  )
}

/*
// product dynamic creact
  const products = [
    { name: 'laptop', price: 53000 },
    { name: 'phone', price: 80000 },
    { name: 'watch', price: 20000 },
    { name: 'tablet', price: 5000 },
  ]
  {/* normal dynamic
      <Product name="laptop" price="53000"></Product>
      <Product name="phone" price="90000"></Product>
      <Product name="watch" price="530"></Product>
      <Product name="teblat" price="500"></Product> 
 */
// {/* product dynamic set */}
// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }

// function Product(props) {
//   // props & JSX declare
//   return (
//     <div className="product">
//       <h3>Name: { props.name}</h3>
//       <p>Price: { props.price}</p>
//     </div>
//   )
// }

export default App;

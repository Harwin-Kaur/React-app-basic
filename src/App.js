
import { useState } from 'react';
import './App.css';
import Profile from "./UseerComponent";
import { UserBio } from './UseerComponent'; //if exporting anything inline must user {}
import { UserProfile } from './UserProfile';
import {MyForm} from './MyForm';

const App = () => {
  // const [name] = useState("Prem Acharya");
  // // const name = "Prem Acharya";
  // const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

  const [counter, setCounter] = useState(10);
  // let counter = 120;

 const increase = () => {
  setCounter(counter + 1);
  // counter++;
 }

  // const decrease = () => {
  //   setCounter(counter - 1);
  // }
  console.log(counter);

   return (
    <div 
    //   className='user-page' style={{
    //   color: 'white'
    // }}
    >
    {/* <UserProfile /> */}
    <MyForm />
    </div>
  );

  // return (
  //   <>
    
  //   {/* <Profile nameProps={name} bio = {bio}/> */}
  //   {/* <UserBio /> */}

  //   {/* <Profile nameProps={"Sam"} bio = "some sam info"/> */}

  //   {/* <Profile nameProps="Will" bio = "Will Bio"/> */}

  //   <div>{counter}</div>
  //   <button onClick={increase}>+</button>
  //   <button onClick={() => setCounter(counter - 1)}>-</button>
  //   </>
  // );
};

export default App;

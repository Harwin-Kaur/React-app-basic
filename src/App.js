
import { useState } from 'react';
import './App.css';
import Profile from "./UseerComponent";
import { UserBio } from './UseerComponent'; //if exporting anything inline must user {}

const App = () => {
  // const [name] = useState("Prem Acharya");
  // // const name = "Prem Acharya";
  // const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

  const [countr, setCounter] = useState(10);
  // let counter = 120;

 const increase = () => {
  setCounter(countr + 1);
  // counter++;
 }
  console.log(countr);
 
  return (
    <>
 
    {/* <Profile nameProps={name} bio = {bio}/> */}
    {/* <UserBio /> */}

    {/* <Profile nameProps={"Sam"} bio = "some sam info"/> */}

    {/* <Profile nameProps="Will" bio = "Will Bio"/> */}

    <div>{counter}</div>
    <button onClick={increase}>+</button>
    <button>-</button>
    </>
  );
};

export default App;

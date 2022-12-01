
import './App.css';
import { version } from 'react';

function App(props){
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  );
}

export default App;
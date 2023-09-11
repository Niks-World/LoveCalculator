import logo from './logo.svg';
import './App.css';
import Lovechk from './Lovechk';
import { Heading } from '@chakra-ui/react'
import { color } from 'framer-motion';

function App() {
  return (
    <div className="App">
     {/* <h1>Love Calculator</h1> */}
     <Heading style={{color:"red"}}>Love Calculator</Heading>
     <Lovechk/>
    </div>
  );
}

export default App;

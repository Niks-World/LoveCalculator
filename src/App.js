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
     <img src="https://64fe1057d0af9f5a6c6bc5ab--fanciful-moonbeam-9405d6.netlify.app/icon.png" width="20px" height="80px" alt="" />

     <Lovechk/>
    </div>
  );
}

export default App;

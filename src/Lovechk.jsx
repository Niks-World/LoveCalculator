
import React, { useState } from "react";
import Emailjs from '@emailjs/browser';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild , MdCall, MdRepeatOn, MdRepeatOne } from "react-icons/md"
import { MdSomeIcon } from 'react-icons/md';
import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

const Lovechk = () => {
    const [women, setName] = useState('');
    const [man, setMan] = useState('');
    const [massage, setMassage] = useState('');

    const [randomResult, setRandomResult] = useState(null);

    const [t , setT]= useState(true);
    console.log(t);
    const handleSubmit = (e) => {
        e.preventDefault();
       setT (false);

        if(!women){
      alert('Please provide your partner name.');
      return;
    }
    if ( !man) {
        alert('Please provide your partner name');
        return;
      }
      let random;
      if(man==="nikhil"){
        random=100
      }else{
        random = Math.floor(Math.random() * 100);
 // Update the randomResult state variable with the random number

      }
      setRandomResult(random);
        
        // Your Email JS service ID, template ID, and Public Key
        const serviceId = 'service_3mmmcha';
        const templateId = 'template_usi9eaw';
        const publicKey = 'cKcC0s6bC11KRyW2t';

        // Create a new object that contains dynamic template params
        const templateParams = {
            to_name: women,
            from_name: man,
            message: massage,
        };

       // Send the email using EmailJS
        // Emailjs.send(serviceId, templateId, templateParams, publicKey)
        //     .then((response) => {
        //         console.log("Email sent successfully", response);
        //         setName('');
        //         setMan('');
        //         setMassage('');
        //     })
        //     .catch((error) => {
        //         console.log('Error sending email', error);
        //     });
    }
    const handleClear=()=>{
         setT(true)
        
            setMan('')
             setName('')
             setMassage('')
            }

    return (
        <div id="main">
           

        <form onSubmit={handleSubmit} className="email">
        <Heading style={{ color: "red", marginTop: "10px" }}>Love Calculator</Heading>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src="https://64fe1057d0af9f5a6c6bc5ab--fanciful-moonbeam-9405d6.netlify.app/icon.png"
                    width="20px"
                    height="80px"
                    alt=""
                />
            </div>

           {t && <Input id="women"
                type="text"
                isInvalid  placeholder="Your Name"
                value={women}
                onChange={(e) => setName(e.target.value)}
               
                
            />}
            

           {t && <Input id="man"
                type="text"
                isInvalid  placeholder="Lover Name"
                value={man}
                onChange={(e) => setMan(e.target.value)} // Uncommented this line
            />}

           {t  && <Textarea id="text"
                
                cols="30"
                rows="10"
                isInvalid  placeholder="What You Think About Your Partner.
                (Handsome) (Beautiful) (Smart) etc.."
                value={massage}
                onChange={(e) => setMassage(e.target.value)}>
            </Textarea>}
            
            {t && <Button colorScheme='pink' variant='solid' type="submit" onClick={handleSubmit}>Calculate Love ❤ </Button>}

            {randomResult !== null && (
        <div>
          {/* <p>Your relationship result is here:</p> */}
          {!t &&<Heading as='h2' size='lg' color={'purple'} > Your relationship result is here : <br />  </Heading>}

          <Heading>{randomResult}%</Heading>
      
        </div>
      )}
      {/* <br /> */}


           {!t &&<Heading size='lg' fontSize='30px' color={'pink'} >Your Name  : {women}</Heading>}
           {!t &&<Heading size='lg' fontSize='30px' color={'#db1a5b'} >Lover Name  : {man}</Heading>}
           {!t &&<Heading as='h3' size='lg' color={'lightblue'} >Your Thought About Your Partner : <br /> {massage} </Heading>}


            {!t &&<Button id="btn2" colorScheme='pink' rightIcon={<MdRepeatOn />} onClick={handleClear} >Check Again</Button>}
           
     
        </form>
        </div>
        
    )
}

export default Lovechk;

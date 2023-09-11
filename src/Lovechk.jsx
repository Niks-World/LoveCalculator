
import React, { useState } from "react";
import Emailjs from '@emailjs/browser';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md"
import { MdSomeIcon } from 'react-icons/md';
import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

const Lovechk = () => {
    const [women, setName] = useState('');
    const [man, setMan] = useState('');
    const [massage, setMassage] = useState('');

    const [t , setT]= useState(true);
    console.log(t);
    const handleSubmit = (e) => {
        e.preventDefault();
       setT (false);


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
        <div>
        <form onSubmit={handleSubmit} className="email">
           {t && <Input id="women"
                type="text"
                placeholder="Your Name"
                value={women}
                onChange={(e) => setName(e.target.value)}
            />}
            

           {t && <Input id="man"
                type="text"
                placeholder="Lover Name"
                value={man}
                onChange={(e) => setMan(e.target.value)} // Uncommented this line
            />}

           {t  && <Textarea id="text"
                isInvalid placeholder=''
                cols="30"
                rows="10"
                placeholder="What You Think About Your Partner."
                value={massage}
                onChange={(e) => setMassage(e.target.value)}>
            </Textarea>}
            
            {t && <Button colorScheme='pink' variant='solid' type="submit">Calculate Love ❤ </Button>}
  
            {!t&& <h1>{women}</h1>}
            {!t&& <h1>{man}</h1>}
            {!t && <p>{massage}</p>}
            {!t &&<button id="btn2" onClick={handleClear} >Check Again</button>}
        </form>
        </div>
        
    )
}

export default Lovechk;

import { useState, useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

{/*template_t627if4
service_yxryiwr
pNXqLI8cuM_iqeQ9I*/}

const Contact = () => {
  const formRef = useRef();
  const [form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
});
const [loading, setLoading] = useState(false);

const handleChange = (e) =>{
 const {name, value} = e.target;
setForm({...form, [name]: value})
}


const handleSubmit = (e) =>{
  e.preventDefault();
  setLoading(true);
  emailjs.send(
    'service_yxryiwr',
    'template_t627if4',
    {
     from_name: form.name,
     to_name: 'oluwasegun',
     from_email: form.email,
     to_email: 'oluwasegunenoch_adedeji@yahoo.com',
     message: form.message,
    },
    'pNXqLI8cuM_iqeQ9I'
  )
  // this line occurs if the opeartion is succeful
  .then(() => {
    setLoading(false);
    alert('thank you. I will get back to you as soon as possible.');
//this line resets the form back
    setForm({
      name:'',
      email:'',
      message:'',
    })
    // this line is when the operation fails
  }, (error) => {
    setLoading(false);
    console.log(error)
    alert('something went wrong.')
  })
}

  return (
    <div className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10
    overflow-hidden">
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)} 
      className="flex-[0.75] bg-black-100 p-8 
      rounded-2xl">
       <p className={styles.sectionSubtext}>Get in touch
       </p>
       <h3 className='text-white font-black md:text-[60px] sm:text-[50px] 
       xs:text-[40px] text-[30px]'>contact.</h3>

       <form
       ref ={formRef} 
       onSubmit={handleSubmit}
       className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
            <span className="text-white font-medium
            mb-4"> Your Name</span>
            <input
            type ='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Whats your name?" 
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
            />

        </label>
        <label className="flex flex-col">
            <span className="text-white font-medium
            mb-4"> Your Email</span>
            <input
            type ='text'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="Whats your Email?" 
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
            />

        </label>
        <label className="flex flex-col">
            <span className="text-white font-medium
            mb-4"> Your Message</span>
            <textarea
            rows='7'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?" 
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
            />

        </label>
        <button 
        type='submit' className="bg-tertiary py-3
        px-8 outline-none w-fit text-white font-bold
        shadow-md shadow-primary rounded-xl">
          {loading? 'sending...': 'send'}

        </button>
       </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
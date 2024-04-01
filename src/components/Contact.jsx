import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
;


const Contact = () => {
  return (
    <>
    
      <div className="flex justify-center">
        
      </div>
      <div className="flex justify-center">
        <span className="text-gray-500 font-black md:text-[30px] m-auto flex justify-center sm:text-[50px] xs:text-[40px] text-[30px]">Contact Me</span>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="border border-gray-100 rounded-full p-6 flex items-center">
          <a href="mailto:segun_dejji@yahoo.com?subject=Hello&body=Dear%20recipient,">Email</a>
        </div>
        <div className="border border-gray-100 rounded-full p-4 flex items-center">
          <a href="https://www.linkedin.com/in/oluwasegun-adedeji/">LinkedIn</a>
        </div>
      </div>
     
    </>
  );
}  

export default SectionWrapper(Contact, 'contact');
import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
     
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          overview</h2>
        </motion.div>
        <motion.p
          variants ={fadeIn('','',0.1,1)} 
          className="mt-4 text-SageGreen text-secondary text-[23px]
          max-w-1xl mx-auto leading-[30px] text-justify"
          >
            I am a Web Developer with 2+ years of experience
             designing and developing responsive 
            websites and web applications.
             Proficient in HTML, CSS, JavaScript, Redux Webpack and 
             various web development 
            libraries and frameworks such as ReactJS, 
            TailwindCSS, Express, MongoDB and Next.js. Strong 
            understanding of web design principles, 
            user experience, and search engine optimization. 
            Experienced in integrating web applications with
             some back-end technologies such as Node.js.
             Strong problem-solving skills and 
             ability to work 
             in a fast-paced, deadline-driven environment.
             Proven track record of delivering high-quality 
             web solutions to clients across various industries.
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
             <ServiceCard key ={service.title} index =
             {index}  {...service} />
          
          ))}
        

        </div>
    </> 
  
  );
};

export default SectionWrapper(About, "About");
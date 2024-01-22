import { Tilt } from "react-tilt"
import {motion} from 'framer-motion';


import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";



const ProjectCard = ({index, name, description,
tags, image, source_code_link }) => {
     return(
      <Tilt>
      <motion.div variants={fadeIn("up", "spring",
      index * 0.5, 0.75)}>
       <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary p-5 rounded-2xl
        sm:w-[360px] w-full relative h-auto">
        <img src={image} alt={name} className="w-full
        h-full object-cover rounded-2xl"/>
          <h3 className="mt-5 text-white font-bold
          text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary
          text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px]
              ${tag.color}`}>
                #{tag.name}
              </p>
            ))}

          </div>
        <div className="absolute inset-0 flex justify-end 
        m-3 card-img_hover">
             <div
              onClick={() => {
                window.open(source_code_link, '_blank')
              }} className="black-gradient w-10 h-10
              rounded-full mr-5 mt-5 flex justify-center 
              items-center
              cursor-pointer"
              > 
              <img src={github} alt="github" 
              className="w-1/2 h-1/2" />
              
             </div>
        </div>
        </div>
      </motion.div>
       </Tilt>
     )
}



const Works = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>
         PROJECTS
      </h2>

    </motion.div>
    <div className="w-full flex">
      <motion.p variants={fadeIn("","", 0.1, 1)}
      className="mt-3 text-secondary text-[17px]
      max-w-3xl text-justify m-auto leading-[30px]">
         The following projects showcase my skills and 
         experience through real-world examples of my work. 
         Each project is briefly described with live demos. 
         It reflects my ability to solve 
         complex problems and 
         work with different technologies.
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
       <ProjectCard key ={`project-${index}`} index ={index}
       {...project}/>
      ))}
    </div>
   </>
  )
}

export default SectionWrapper(Works, "")
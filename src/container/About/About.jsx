import React, { useEffect, useState } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import {images} from '../../constants'
import { client, urlFor } from '../../client'
import { AppWrap } from '../../wrapper'

const About = () => {

  const [abouts,setAbouts]=useState([]);

  useEffect(()=>{
    const query= '*[_type== "abouts"]'
    client.fetch(query).then((data)=>setAbouts(data))
  },[]);

  return (
    <>
      <h2 className='head-text'>I know That <span>Good Design </span><br/>means <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div 
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap (About ,'about')
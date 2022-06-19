import React from 'react'
import {motion} from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
import {AppWrap} from '../../wrapper'

const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginleft:20}}>
                <div className="p-text">Hello, I am</div>
                <h1 className='head-text'> Aashish</h1>
            </div>
          </div>
          <div className="tag-cmp app_flex">
              <p className='p-text'>Frontend Developer</p>
              <p className='p-text'>Web Devloper</p>
            </div>
        </div>

      </motion.div>
      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5,delayChildren:0.5}}
        className="app__header-img"
      >
        <img src={images.myphoto} id="myphoto"/>
        <motion.img 
          whileInView={{scale:[0,1]}}
          transition={{duration:1, ease:'easeInOut'}}
          className='overlay_circle'
          src={images.circle}
          alt='profile-photo'
        />

      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app_header-circles"
      >
        {[images.javascript,images.react,images.css].map((circle,index)=>(
          <div className='circle-cmp app__flex' key='circle-image'>
            <img src={circle} alt='circle' />
          </div>
        ))}
        
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')
import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {['home','about', 'skills','work','testimonial','contact' ].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}
               key ={item} 
               className="app__navigation-dot"  
               style={active===item ? {backgroundColor:'#313BAC'}:{}}          
            />
          </li>
        ))}
    </div>
  )
}

export default NavigationDots
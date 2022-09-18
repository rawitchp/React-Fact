import React from 'react'
import {DiReact} from 'react-icons/di'
import './NavBar.css'

function NavBar(props) {
    const {bgColor,handleChangeBg} = props
  return (
    <div className={bgColor ? "light-bg" : "dark-bg" }>
        <div className='react-icon-container'>
            <DiReact size={35} className='react-icon'/>
        </div>
        
        <div className='react-text'>ReactFacts</div>
        <div className='light-mode'>Light</div>
        <div className='dark-mode-button' >
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round" onClick={handleChangeBg} ></span>
            </label>
        </div>
        <div className='dark-mode'>Dark</div>
    </div>
  )
}

export default NavBar
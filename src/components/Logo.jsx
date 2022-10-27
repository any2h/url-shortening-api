import React from 'react'
import logo from '../assets/logo.svg'
import logoWhite from '../assets/logo-white.svg'

const Logo = ({ width = 121, height = 33, white }) => {
    return (
        <img 
            src={white ? logoWhite : logo} 
            width={width} 
            height={height} 
            className='logo' 
            alt="Shortly" 
        />
    )
}

export default Logo

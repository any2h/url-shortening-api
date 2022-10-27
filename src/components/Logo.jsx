import React from 'react'
import logo from '../assets/logo.svg'

const Logo = ({ width = 121, height = 33 }) => {
    return (
        <img src={logo} width={width} height={height} className='logo' alt="Shortly" />
    )
}

export default Logo

import React, { Component } from 'react'
import './style.css'

class Header extends Component{
render(){
    return(
         <div className="Header">
            <div className="Logo">
                <img src="/Logo-Prog-3.jpg" alt="" className="ImgLogo"/>
            </div>            
            <div className="TextoHeader">
                <p>Inicio</p>
            </div>            
            <div className="TextoHeader2">
                <p>Sobre nosotros</p>
            </div>
            <div className="Profile">
                <div className="IconoProfile"><i className="fas fa-user-alt"></i></div><div className="PProfile"><p>Iniciar sesión</p></div>
            </div>
            <div className="Settings">
                <div className="IconoSettings"><i className="fas fa-cog"></i></div><div className="PAjustes"><p>Ajustes</p></div>
            </div>
         </div>   
    )
}
}

export default Header
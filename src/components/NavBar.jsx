import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatProvider'

const NavBar = () => {
  const {usuario,  ingresoUsuario, cerrarSesion}= useContext(ChatContext)
  return (
    // font-family: 'Pacifico', cursive;
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      

      <span className="navbar-brand m-2 "  >Whasaaaa</span>
      
     
    
      <div className=' justify-content-md-end'>
        { 
        usuario.estado ? (
          <button 
          type="button" 
          className="btn btn-outline-warning   m-2 "
          onClick={cerrarSesion}
          >Cerrar Sesion
          
          </button>
        
        ):(
          <button 
          type="button"
           className="btn btn-outline-primary  m-2 "
           onClick={ingresoUsuario}
           >Acceder
          </button>
      
        )
}
      </div>
    </nav>
  
  )
}

export default NavBar

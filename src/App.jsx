import React, { useContext } from 'react'
import { ChatContext } from './context/ChatProvider'
import NavBar from './components/NavBar'
import Chat from './components/Chat'

const App = () => {
    const {usuario}= useContext(ChatContext)
  return usuario !==null ?(
    <div>
        <NavBar/>

        {
          usuario.estado ? (
     <Chat/>
          ): (
            <div className='lead text-center mt-5'>Debes de iniciar sesion</div>
          )

        }
    </div>
  ) : (
    <div>Cargando....</div>
  )
}

export default App

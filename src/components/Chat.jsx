import React, { useContext } from 'react'
import Agregar from "./Agregar"
import { ChatContext } from '../context/ChatProvider'

const Chat = () => {
  const{ mensajes, usuario} = useContext(ChatContext)
  const refZonaChat = React.useRef(null)

  React.useEffect(()=>{
    console.log(refZonaChat)
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
  }, [mensajes])

  return (
    <div 
    className='mt-3 px-2'
    style={{height: "75vh", overflowY: "scroll"}}
    ref={refZonaChat}
    >

{
       mensajes.map((item, index) => (
           usuario.uid === item.uid ? (
                // eslint-disable-next-line react/style-prop-object
                <div className= "d-flex justify-content-end  md-2"    key={index}>
                      <span className='badge rounded-pill text-bg-info mt-2' >
                        {item.texto}
                        </span>
                 </div>  
       ) : (
              <div className='d-flex justify-content-start mb-2' key={index}>
                    <span className='badge rounded-pill text-bg-secondary mt-2'>
                     {item.texto}
               </span>
              </div>
                    )
                ))
            }

            
    <Agregar/>
    </div>
  )
}

export default Chat

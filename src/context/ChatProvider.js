import React, { createContext, useEffect, useState } from 'react'
import {auth, provider, db} from "../firebase"
import { getAuth, signInWithPopup } from 'firebase/auth'
import 'firebase/auth'
import { collection, query, where, onSnapshot, orderBy, addDoc} from "firebase/firestore";

export const ChatContext = React.createContext()

const ChatProvider = (props) => {
  const dataUsuario ={uid: null, email: null, estado: null}
  const [ usuario, setUsuario]= useState(dataUsuario)
  const [mensajes , setMensajes] = React.useState([])


   useEffect(()=> {
      detectarUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const detectarUsuario = ()=>{
      auth.onAuthStateChanged( (user) =>{
        if(user){
         setUsuario({uid: user.uid, email: null, estado: true})
         cargarMensajes()
        }else{
          setUsuario({uid: null, email: null, estado: false})
        }
      })
    }
    const ingresoUsuario = async() => {
      try {
        const auth = getAuth();
       signInWithPopup(auth, provider)
      } catch (error) {
        console.log(error)
      }
    }
  const cerrarSesion = ()=> {
    auth.signOut()
  }

  const cargarMensajes = () => {
    const q = query(collection(db, 'chat'), orderBy('fecha'));
   
    onSnapshot(q, (querySnapshot) => {
         
    const arrayMensaje = querySnapshot.docs.map((item) => item.data());
          setMensajes(arrayMensaje);
        });
    /* db.collection("chat").orderBy("fecha")
     .onSnapshot(query=>{
      const arrayMensaje = query.docs.map(item => item.data())
      setMensajes(arrayMensaje)
      
    })*/
    /*  const q = query(collection(db, "chat"), where("state", "==", "CA"), orderBy("fecha"));
     onSnapshot(q, (querySnapshot)  => {
      const chat = [];
      querySnapshot.forEach((doc) => {
        const arrayMensajes =  chat.push(doc.data());
        ;
          setMensajes(arrayMensajes)
      });
      console.log("Current cities in CA:");
    });
   */ 
  }
  const agregarMensajes = async(uidChat, textoInput)=> {
    try {
     await addDoc(collection(db, "chat"), {
      //await db.collection("chat").add({
        fecha: Date.now(),
        texto: textoInput,
        uid: uidChat
      })
      cargarMensajes();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    
    <ChatContext.Provider value={{usuario, ingresoUsuario, cerrarSesion, mensajes, agregarMensajes}}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider

import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoNoticias from './components/ListadoNoticias'

const App = () => {
    //Definir Categoria y Noticias
  const [categoria, guardarCategoria] = useState('')
  //Creamos un state que contendra  los articulos  en un arreglo
  const [noticia, guardarNoticia] = useState([]);

  //Una vez que categoria combie  consultara a la API
  useEffect(() => {
      const consultarAPI =async()=>{
          const url =`https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=5327c677610e4b44810bbadae4838878`
      
      const respuesta=await fetch(url);
      const noticias =await respuesta.json();

      console.log(noticias.articles);
      guardarNoticia(noticias.articles);
      
      
        }
      consultarAPI();
  }, [categoria]);
  return (
    <>
  
      
      <Header titulo="Buscador Noticias"/>

    {/* Formulario */}
    <div className='container white'>
    {/* Cuando el usuario de Submit se enviara al formulario */}
      <Formulario guardarCategoria={guardarCategoria}/>
      
    <ListadoNoticias noticia={noticia}/>
    </div>

    </>
  )
}

export default App

import React from 'react'
import Noticias from './Noticias'
import PropTypes from 'prop-types'
const ListadoNoticias = ({noticia}) => (
    <div className='row'>

      {noticia.map(note=>(
        
        <Noticias key={note.url} noticia={note}/>
      ))}
    </div>



)

ListadoNoticias.propTypes={
    noticia:PropTypes.array.isRequired
}


export default ListadoNoticias

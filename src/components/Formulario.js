import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'
const Formulario = ({guardarCategoria}) => {
    //Mini bases de datos  de opciones
    const OPCIONES=[
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertaiment',label:'Entretenimiento'},
        {value:'science',label:'Salud'},
        {value:'sports',label:'Deporte'},
        {value:'technology',label:'Tecnologia'},

    ]
      //Utilizar custom hooks
      //Le pasa,ps como estado general las opciones
      const [categoria,Select]=useSelect('general',OPCIONES);

    //Submit al formpasa categoria  a app.js
    const buscarNoticias=evento=>{
        evento.preventDefault();
        guardarCategoria(categoria)
    }
  

    return (

   
            <div className={`row ${styles.buscador}`}>
        <div className='col s12 m8 offset-m2'>
            <form onSubmit={buscarNoticias}>
                <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                
                <Select/>
                <div className='input-field col s12'>
                    <input type="submit" className={`btn-large green darken-2 ${styles.btn_block}`} value="Buscar"/>
                </div>
            </form>
        </div>
    </div>
)
}
Formulario.propTypes ={
    guardarCategoria:PropTypes.func.isRequired
  }
  
export default Formulario

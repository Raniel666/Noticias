import React, { useState } from 'react'

const useSelect = (stateInicial,opciones) => {
    //State del custom hook
    const [state, actualizarState] = useState(stateInicial);
    
    const SelectNoticias =()=>(
        
        <select className='browser-default' value={state} onChange={evento=>actualizarState(evento.target.value)}>
        
        {opciones.map(opcion=>(
            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))}

        <option value="">Seleccione</option>
    </select>

    )
       
    
    return [state,SelectNoticias];
    
}

export default useSelect

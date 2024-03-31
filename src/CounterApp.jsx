import React, { useState } from 'react'
import PropTypes from "prop-types"

// En caso de que la funcion del evento no tenga que referenciar al argumento , se suele sacar fuera
// const clickPlus = (event) => {
    // console.log (event)
    // add logic to increase counter value
    // }

    
export const CounterApp = ({ value }) => {
        
    //  state es como un array con dos valores : el valor actual y una función para cambiar que sera el segundo
    const [counter, setCounter] = useState( value );  // Establece el valor inicial
    
    //Tambien habria que mandar el nuevo argumento aunque sea generico aqui en la funcion
    const clickPlus = () => {
        // Al llamar al segundo  parametro de useState le decimos a react que cambio el estado y debe cambiarlo en pantalla
        setCounter( counter + 1 )
        // Otro metodo para cambiar el estado y mostrarlo
        //setCounter( (c) => c + 1)
    }
    const clickMenos = () => setCounter ( counter - 1 ) 

    const clickReset = () => setCounter( value );
    
    

    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            {/* No hace falta pasarle el evento porque de esta manera le estoy diciendo 
            que los argumentos de la funcion vendran aqui 
            En caso de necesitar valores adicionales si habria que especificar.
            Ej.  <button onClick={ (event) => clickPlus (evento, nuevo argumento) }> */}
            <button onClick= { clickPlus } > +1 </button> 
            <button onClick= { clickMenos } > -1 </button> 
            <button onClick= { clickReset } > Reset </button> 
        </> 
    )
}


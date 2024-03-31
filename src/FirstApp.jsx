import React from 'react'
import PropTypes from "prop-types"



// Las props siempre poner desestructuradas como se ve a continuación

const  FirstApp = ({title, subTitle, name}) => {

  return (

    <>
        <h1>{ title }</h1>
        <h1>{ name }</h1>
        <p>{ subTitle }</p>
    </>
  )
}

// LOS PROPTYPES SE SUELEN DEFINIR AL FINAL
//Hacer obligatorias o con x condicion nuestras props para usar componentes
FirstApp.propTypes = {
    title:  PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}
// Mandar valores por defecto a las Proptypes. Entran antes que los Proptypes
FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "Sin subtitulo",
    // Tambien pueden tener props que no esten arriba instanciados, para que se muestre en pantalla tienes que instanciarlo arriba
    name: 'No hay nombre'
}
export default FirstApp

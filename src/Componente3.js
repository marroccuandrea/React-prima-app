import React from 'react'

const Componente3 = () => {
  return (
    <section>
        <Saluto />
    </section>
  )
}

const Persona = () => {
    return <h2>Ciao sono PierGiorgio</h2>
}

const Messaggio = () => <h4>Sono un messaggio</h4>

const Saluto = () => {
    return (
        <React.Fragment>
        <Persona />
        <Messaggio />
        </React.Fragment>
    )
}

export default Componente3
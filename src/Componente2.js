import React from 'react'

const Componente2 = () => {
  return (
    <section>
        <Persona />
        <Messaggio></Messaggio> {/* Per richiamare l'elemento dentro al componente possiamo usare due metodi di scrittura */}
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

export default Componente2
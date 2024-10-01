import React from 'react'

const Componente1 = () => {
  return (
    <div>
        <h2>Ciao</h2>
        <h2>Ciao Ciao</h2>
    </div>
  )
}

export default Componente1


// Esempi di scrittura di un componente React, il contenuto si può racchiudere in un div, in un tag vuoto oppure in un React.Fragment

/* const Componente1 = () => {
  return (
    <div> <---*
        <h2>Ciao</h2>
        <h2>Ciao Ciao</h2>
    </div>
  )
}
*/
/* const Componente1 = () => {
  return (
    <> <---*
        <h2>Ciao</h2>
        <h2>Ciao Ciao</h2>
    </>
  )
}
*/
/* const Componente1 = () => {
  return (
    <React.Fragment> <---*
        <h2>Ciao</h2>
        <h2>Ciao Ciao</h2>
    </React.Fragment>
  )
}
*/
 
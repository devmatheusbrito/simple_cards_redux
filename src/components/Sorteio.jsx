import Card from './Card'
import React from 'react'

import { connect } from 'react-redux'

function Sorteio(props) {

  const { min, max } = props
  const sorteio = parseInt(Math.random() * (max - min))

  return (
  <Card title='Sorteio de NÚMEROS' purple>
    <div>
      <span>
        <span>Resultado:</span>
        <strong>{sorteio}</strong>
      </span>
    </div>
  </Card>
  )
  }

  function mapStateToPropsSorteio(state) {
    return {
      min: state.numeros.min,
      max: state.numeros.max,
    }
  }

  export default connect(mapStateToPropsSorteio)(Sorteio)
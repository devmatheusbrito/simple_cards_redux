import Card from './Card'
import React from 'react'

import { connect } from 'react-redux'

function Soma(props) {

  const { min, max } = props 

  return (
  <Card title='Soma dos NÚMEROS' blue>
    <div>
      <span>
        <span>Resultado:</span>
        <strong>{min + max}</strong>
      </span>
    </div>
  </Card>
  )
}

function mapStateToPropsSoma(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}
export default connect(mapStateToPropsSoma)(Soma)
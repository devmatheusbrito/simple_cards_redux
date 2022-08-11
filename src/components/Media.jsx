import Card from './Card'
import React from 'react'
import { connect } from 'react-redux'

function Media(props) {
  const { min, max } = props
  
  return (
  <Card title='Média dos NÚMEROS' green>
    <div>
      <span>
        <span>Resultado:</span>
        <strong>{(max+min) / 2}</strong>
      </span>
    </div>
  </Card>
  )
}

function mapStateToPropsMedia(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToPropsMedia)(Media)
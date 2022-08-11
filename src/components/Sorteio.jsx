import Card from './Card'
import React from 'react'

export default props => {

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
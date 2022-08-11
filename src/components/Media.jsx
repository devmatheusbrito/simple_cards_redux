import Card from './Card'
import React from 'react'

export default props => {

  // const min = props.min
  // const max = props.max

  const { min, max } = props
  
  return (
  <Card title='Média dos NÚMEROS' green>
    <div>
      <span>
        <span>Resultado:</span>
        <strong>{(max + min) / 2}</strong>
      </span>
    </div>
  </Card>
  )
}
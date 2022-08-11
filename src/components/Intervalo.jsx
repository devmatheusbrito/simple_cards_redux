import './Intervalo.css'
import React from 'react';
import Card from './Card';

export default props => {

  const { min, max, onChangeMin, onChangeMax } = props

  return (
    <Card title='Intervalo de números' red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input
          type="number"
          value={min}
          onChange={(e) => onChangeMin(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
          type="number"
          value={max}
          onChange={(e) => onChangeMax(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}
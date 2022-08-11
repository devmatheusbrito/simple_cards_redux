import './Intervalo.css'
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { alterarNumeroMin } from '../store/actions/numeros';

function Intervalo (props) {

  const { min, max } = props

  return (
    <Card title='Intervalo de números' red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input
          type="number"
          defaultValue={min}
          onChange={e => alterarNumeroMin(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
          type="number"
          defaultValue={max}
          />
        </span>
      </div>
    </Card>
  )
}

function mapStateToPropsIntervalo(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

function mapDispatchToProps(dispatch) {
  return  {
    alterarMinimo(novoNumero){
      const action = alterarNumeroMin(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToPropsIntervalo,
  mapDispatchToProps,
  )(Intervalo)
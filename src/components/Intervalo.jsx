import './Intervalo.css'
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { alterarNumeroMin, alterarNumeroMax } from '../store/actions/numeros';

function Intervalo (props) {

  const { min, max, alterarMinimo, alterarMaximo } = props;

  return (
    <Card title='Intervalo de números' red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input
          type="number"
          defaultValue={min}
          onChange={e => alterarMinimo(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
          type="number"
          defaultValue={max}
          onChange={e => alterarMaximo(+e.target.value)}
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
    },
    alterarMaximo(novoNumero){
      const action = alterarNumeroMax(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToPropsIntervalo,
  mapDispatchToProps,
  )(Intervalo)
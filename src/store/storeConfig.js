import { legacy_createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numeros: function(state, action) { 
    console.log('Numeros')
    console.log(state, '', action)
    switch(action.type) {
      case 'NUM_MIN_ALTERADO':
        return {
          ...state,
          min: action.payload
        }
      default:
        return {
          min:2,
          max:10
        }
    }
  },
})

function storeConfig(){
  return legacy_createStore(reducers)
}

export default storeConfig
import { legacy_createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numeros: function(state, action) { 
    console.log('Numeros')
    console.log(state, '', action)
    switch(action.type) {
      case 'NUM_ALTERADO':
        return {
          ...state,
          min: action.payload,
        }
      case 'NUM_MAX_ALTERADO':
        return {
          ...state,
          max: action.payload,
        }

      default:
        return {
          min:0,
          max:0
        }
    }
  },
})

function storeConfig(){
  return legacy_createStore(reducers)
}

export default storeConfig
export function alterarNumeroMin(novoNumero) {
  return {
    type:'NUM_ALTERADO',
    payload: novoNumero,
  }
}

export function alterarNumeroMax(novoNumero) {
  return {
    type:'NUM_MAX_ALTERADO',
    payload: novoNumero,
  }
}
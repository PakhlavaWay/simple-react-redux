export const depositMoney = (amount) => {
  return (dispacth) => {
    dispacth({
      type: 'deposit',
      payload: amount
    })
  }
}

export const withdrawMoney = (amount) => {
  return (dispacth) => {
    dispacth({
      type: 'withdraw',
      payload: amount
    })
  }
}
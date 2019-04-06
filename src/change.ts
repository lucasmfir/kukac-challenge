
const change = (total: number, money: number): Object => {

  let change = money - total
  let bills_100 = Math.floor(change / 100)
  let bills_10 = Math.floor((change - 100 * bills_100) / 10)
  let bills_1 = Math.floor(change - (100 * bills_100 + 10 * bills_10))

  return {change, bills_100, bills_10, bills_1}
}


export default change
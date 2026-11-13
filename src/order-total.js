export function orderTotal(items) {
  let total = 0
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].qty
  }
  return total
}

export const TAX = 0.07

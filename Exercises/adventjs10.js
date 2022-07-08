const coins = [1, 2, 5, 10, 20, 50];

function getCoins(change) {
  const change_coins = [0, 0, 0, 0, 0, 0];
  while (change > 0) {
    const arr = coins.filter((coin) => coin <= change);
    const coin = arr[arr.length - 1];
    change_coins[coins.indexOf(coin)] += 1;
    change -= coin;
  }
  return change_coins;
}

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

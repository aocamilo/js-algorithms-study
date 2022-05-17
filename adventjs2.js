const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter) {
  const giftCount = {};
  letter
    .trim()
    .split(" ")
    .filter((el) => !el.includes("_") || el === "")
    .forEach((el) => {
      if (giftCount[el]) {
        giftCount[el]++;
      } else {
        giftCount[el] = 1;
      }
    });
  return giftCount;
}

const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

let playerName = "Mario"
let currentLive = 3
const coin = [
    { level: 1, value: 25 },
    { level: 2, value: 30 },
    { level: 3, value: 45 },
]
let totalCoin = 0
for (let i = 0; i < coin.length; i++) {
    totalCoin += coin[i].value
}
console.log(totalCoin)
const aveargeCoin = totalCoin / coin.length
console.log(aveargeCoin)
const remainCoin = totalCoin % 3
console.log(remainCoin)
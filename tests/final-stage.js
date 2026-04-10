function findPairsDivisibleBy17() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        for (let k = 1; k <= i; k++) {
            if ((i + k) % 17 === 0) {
                result.push([i, k])
            }
        }
    }

    result.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))

    result.forEach(([i, k]) => {
        console.log(`(${i}, ${k}) = ${i + k}`)
    })

    console.log("")
    console.log(`Tổng cộng: ${result.length} cặp`)
}

findPairsDivisibleBy17();
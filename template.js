function birthdayCakeCandles(candles) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < candles.length; i++) {

        if (candles[i] > max) {
            max = candles
        }
    }
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            count++
        }

    }
    return count;
}

function compareTriplets(a, b) {
    let score = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            score[0].push(1)

        } else {
            if (b[i] > a[i]) {
                score[1].push(1)

            } 
            }

        }

    }



money = 100
coinRate = 50
totalSold = 0;

// 1 coin = 50 thb
// Exchange thb to coin
// Coin will increase rate 10% for every 10 times sold
function exchange(th) {
    money = th;
    totalCoin = 0
    nextIncreaseRate =  Math.ceil((Math.floor(totalSold) + 1)/10) * 10;

    while (money > 0) {
        coin = 0;

        if (money < coinRate) {
            coin = money/coinRate
            money -= (coin * coinRate) 
        } else if (money >= coinRate) {
            coin++;
            money -= coinRate;    
        }
        
        if (coin) {
            totalSold += 1;
            totalCoin += 1;
        }

        if (totalSold >= nextIncreaseRate) {
            coinRate += (coinRate * 10) / 100
            nextIncreaseRate += 10;
        }       
        
    }
    
    return totalCoin;

}

casese = [
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 50 },
    { thb: 75 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 55 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 60.5 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 },
    { thb: 66.55 }
]

casese.map(({ thb }) => {
    console.log(`thb: ${thb}, coin: ${exchange(thb)}, totalSold: ${totalSold}, coinRate: ${coinRate}`)
})

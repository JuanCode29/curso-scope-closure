
/* function moneyBox(coins){
    let saveCoins = 0;
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins  }`);
}
ingreseCoin(5);
ingreseCoin(5); */


function moneyBox(){
    let saveCoins = 0;
    function countCoin(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins  }`);
    }
    return countCoin;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(5);

const moneyBoxAna = moneyBox();
moneyBoxAna(5);
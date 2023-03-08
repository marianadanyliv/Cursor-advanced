// variables
const priceOfDaisies = 15.678;
const priceOfRoses = 123.965;
const priceOfTulips = 90.2345;
console.log("Ромашки:", priceOfDaisies, "Троянди:", priceOfRoses, "Тюльпани:", priceOfTulips)

// max&min prices of our flowers
const maxPriceOfFlowers = Math.max(priceOfDaisies, priceOfRoses, priceOfTulips);
const minPriceOfFlowers = Math.min(priceOfDaisies, priceOfRoses, priceOfTulips);
console.log("Максимальна вартість квітів:", maxPriceOfFlowers);
console.log("Мінімальна вартість квітів:", minPriceOfFlowers);

//total price
const totalPrice = priceOfDaisies + priceOfRoses + priceOfTulips;
console.log("Загальна вартість квітів становить:", totalPrice);

///price without all coins
const floorPrice = Math.floor(priceOfDaisies) + Math.floor(priceOfRoses) + Math.floor(priceOfTulips);
console.log("Вартість квітів без копійок:", floorPrice);

//rounded to hundred
const roundedToHundred = Math.round(totalPrice/100)*100;
console.log("Округлення до 100:", roundedToHundred);

//boolean value
function oddEvenNumber (floorPrice) {
    if(floorPrice % 2 === 0){
    return true
    } else
    {
       return false;
    }
 }
 console.log("Число парне:", oddEvenNumber(floorPrice));

 //balance of money
 let clientCash = 500;
 console.log("Залишок грошей після оплати:", clientCash - totalPrice)

 //average value of prices
 let averagePrice = (totalPrice/3).toFixed(2)
console.log(averagePrice)

const arrayPrices = [priceOfDaisies, priceOfRoses, priceOfTulips];
const avarageValue = (totalPrice / arrayPrices.length).toFixed(2);
console.log("Середня ціна заокруглена до 2 знаків:", avarageValue);

//random discount
let percent = Math.random().toFixed(2);
console.log(`${percent * 100}%`);
let discountPrice = ((1 - percent) * totalPrice).toFixed(2);
console.log("сума до сплати зі знижкою за 3 товари:", discountPrice);

//profit
const initialCost = totalPrice / 2;
const profit = Number((discountPrice - initialCost).toFixed(2));
console.log("Чистий прибуток:", profit);

//advanced
console.log(`Максимальна вартість квітів: ${maxPriceOfFlowers} Мінімальна вартість квітів: ${minPriceOfFlowers} Загальна вартість квітів становить: ${totalPrice} Вартість квітів без копійок: ${floorPrice} Округлення до 100: ${roundedToHundred} Число парне: ${oddEvenNumber(floorPrice)} Залишок грошей після оплати: ${clientCash - totalPrice} Середня ціна заокруглена до 2 знаків: ${avarageValue} сума до сплати зі знижкою за 3 товари: ${discountPrice} Чистий прибуток: ${profit}`)
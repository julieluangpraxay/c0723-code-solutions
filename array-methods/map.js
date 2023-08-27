const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const map1 = prices.map((prices) => ({
  price: prices,
  salesPrice: prices / 2,
}));
console.log('price objects:', map1);

const formatted = prices.map((prices) => `$${prices.toFixed(2)}`);

console.log('formated prices:', formatted);

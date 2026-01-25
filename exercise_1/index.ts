const productName: string = "candy";
const price: number = 2

const discountAvailable: boolean = false


// function getDiscount(price, discount) {
//   return price - price * discount;
// }


function getDiscount(price:number, discount:number): number  {
  return price - price * discount;
}



console.log(getDiscount(10, 1))


function printLength(x: unknown) {
  if(typeof x === 'string')
  console.log(x.length);
}

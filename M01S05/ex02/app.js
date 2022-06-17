function calculateRectangleArea(L, l) {
  return L * l;
}

const anotherSquare = calculateRectangleArea(8, 8);

console.log(anotherSquare);

console.warn(`
Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9`);

console.log(calculateRectangleArea(12, 9));
console.log(calculateRectangleArea(4, 3));
console.log(calculateRectangleArea(5, 3));
console.log(calculateRectangleArea(3, 2));

const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

const rectangleArea1 = calculateRectangleArea(15, 31);
const rectangleArea2 = calculateRectangleArea(8, 9);
const rectangleArea3 = calculateRectangleArea(10, 5);

const rectangle3Area = rectangleArea1 + rectangleArea2 + rectangleArea3;
console.log(rectangle3Area);

const calculateRectangleArea = function (L, l) {
  const surface = l * L;

  return surface;
};

console.warn(
  `Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?`,
);

const yield = 25;
const yieldDiff = 0;
const field01Surface = calculateRectangleArea(100, 250);
const field02Surface = calculateRectangleArea(350, 200);

const field01Yield = yield * field01Surface;
const field02Yield = yield * field02Surface;

console.log(field02Yield - field01Yield);

console.warn(
  `Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?`,
);

const beerYield = 2.5 / 10;
const field03Surface = calculateRectangleArea(400, 370);
const field03Yield = yield * field03Surface;

console.log(field03Yield * beerYield);

console.warn(
  `Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`,
);

const flourYield = 32 / 2.5;

const fieldSurface = calculateRectangleArea(300, 200);
const fieldYield = flourYield * fieldSurface;
console.log(fieldYield);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
const fieldYield001 = calculateRectangleArea(150, 200) * flourYield;
const fieldYield002 = calculateRectangleArea(500, 300) * flourYield;
const totalYieldProduction = fieldYield001 + fieldYield002;

console.log(totalYieldProduction);

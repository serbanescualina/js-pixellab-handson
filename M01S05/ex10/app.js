function calculateSurface(L, l) {
  const argumentsCount = arguments.length;

  if (argumentsCount === 2) {
    return L * l;
  }

  if (argumentsCount === 1) {
    return L ** 2;
  }

  console.warb('Invalid signature');
}

const calculateSquareSurface = (length) => {
  const surface = calculateSurface(length);

  return surface;
};

console.log(calculateSquareSurface(4));

const calculateRectangleSurface = (length, width) => {
  const surface = calculateSurface(length, width);

  return surface;
};

console.log(calculateRectangleSurface(8, 9));
calculateSurface(2);

calculateSurface(6, 7);

calculateSurface();
calculateSurface(1, 2, 3, 5);

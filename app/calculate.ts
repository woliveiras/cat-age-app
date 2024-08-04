export const calculate = (catsYears: number, catsMonths: number) => {
  const months = catsMonths / 12;
  const years = catsYears + months;

  if (years < 1) {
    return Math.round((catsMonths / 12) * 7);
  }

  if (years >= 6) {
    return Math.round((years - 6) * 4 + 40);
  } else {
    return Math.round((years * 19) / 3 + 1);
  }
};

export const wordEnding = (number: number, one: string, two: string, five: string) => {
    number = Math.abs(number);
    
    if (number % 10 === 1 && number % 100 !== 11) {
      return one;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return two;
    } else {
      return five;
    }
  }
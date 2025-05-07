export const wordEnding = (number: number, one: string, two: string, five: string) => {
  number = Math.abs(number)

  if (number % 10 === 1 && number % 100 !== 11) {
    return one
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return two
  } else {
    return five
  }
}

/**
 * Возвращает слово с нужным окончанием в зависимости от числа.
 *
 * @param number - количество (например, 1, 2, 5)
 * @param one - форма слова для 1 (например, "год")
 * @param two - форма слова для 2, 3, 4 (например, "года")
 * @param five - форма слова для 5+ (например, "лет")
 * @returns правильная форма слова
 */
export const wordEndingYears = (number: number, one: string, two: string, five: string): string => {
  number = Math.abs(number) % 100
  const n1 = number % 10

  if (number > 10 && number < 20) {
    return five
  }
  if (n1 === 1) {
    return one
  }
  if (n1 >= 2 && n1 <= 4) {
    return two
  }
  return five
}

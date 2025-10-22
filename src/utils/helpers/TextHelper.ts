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

export function formatMinutes(minutes: number): string {
  if (minutes <= 0) return '0 минут'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  const hoursStr = hours > 0 ? `${hours} ${getHourWord(hours)}` : ''
  const minsStr = mins > 0 ? `${mins} минут` : ''

  return [hoursStr, minsStr].filter(Boolean).join(' ')
}

// вспомогательная функция для склонения слова "час"
function getHourWord(hours: number): string {
  const rem = hours % 100
  if (rem >= 11 && rem <= 14) return 'часов'
  switch (hours % 10) {
    case 1:
      return 'час'
    case 2:
    case 3:
    case 4:
      return 'часа'
    default:
      return 'часов'
  }
}

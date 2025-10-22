import { format } from 'date-fns'

export const getFormatedDate = (date: Date): string => {
  return format(date, 'dd-MM-yyyy')
}

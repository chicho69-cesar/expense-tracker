import { format, fromUnixTime, parse } from 'date-fns'
import dateFnsFormat from 'date-fns/format'
import { es } from 'date-fns/locale'

export function parseDate(value, date) {
  return parse(value, 'y-MM-dd', date)
}

export function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale: es })
}

export function formatDateInSpanish(date) {
  return format(fromUnixTime(date), 'dd \'de\' MM \'de\' yyyy', { locale: es })
}

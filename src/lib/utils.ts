export function sortDates(a: string, b: string) {
  return new Date(b).getTime() - new Date(a).getTime()
}

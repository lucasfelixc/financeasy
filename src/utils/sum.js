export default function Sum(array) {
  const values = []
  const reducer = (acumulator, currentValue) => acumulator + currentValue

  array.map(value => {
    if (typeof value.value !== 'object') {
      return values.push(parseFloat(value.value))
    }

    return value.push(value)
  })

  return values.reduce(reducer)
}

export default function totalSum(array, arrayTrue) {
  array.forEach(value => {
    const valuesNumber = []
    const reducer = (acummulator, currentValue) => acummulator + currentValue

    value.forEach(value => {
      valuesNumber.push(parseFloat(value.value))
    })

    arrayTrue.push(valuesNumber.reduce(reducer))
  })
}

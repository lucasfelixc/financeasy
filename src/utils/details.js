export default function sumDetails(array, arrayValue) {
  return array.forEach(value => {
    const jan = value.jan
    const fev = value.fev
    const mar = value.mar
    const abr = value.abr
    const mai = value.mai
    const jun = value.jun
    const jul = value.jul
    const ago = value.ago
    const set = value.set
    const out = value.out
    const nov = value.nov
    const dez = value.dez

    arrayValue.push(jan)
    arrayValue.push(fev)
    arrayValue.push(mar)
    arrayValue.push(abr)
    arrayValue.push(mai)
    arrayValue.push(jun)
    arrayValue.push(jul)
    arrayValue.push(ago)
    arrayValue.push(set)
    arrayValue.push(out)
    arrayValue.push(nov)
    arrayValue.push(dez)
  })
}

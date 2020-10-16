export const generate24HourOptions = () => {
  let result = [{ display: '-- select --', value: '' }]
  for (let i = 0; i <= 24; i += 0.5) {
    let opt = {}
    let [hr, min] = String(i).split('.')
    opt.display = `${hr}h ${Number(min) ? ' 30min' : ''}`
    opt.value = i
    result.push(opt)
  }
  return result
}

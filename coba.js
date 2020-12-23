const divideAndSort = (number) => {
  // if (typeof(number) === 'number') {
    let str = (BigInt(number).toString())
    const array = str.split('0')
    console.log(array)

    const hasil = array.map( (element) => {
      return element.split('').sort().join('')
    })
    console.log(hasil.join(''))
  // } else {
  //   console.log('Type data harus number')
  // }
}

// divideAndSort(5956560159466056)
divideAndSort(59565601594660560123456789123456789123456789123456789n)
const divideAndSort = (number) => {
  // validasi
  if (typeof(number) === 'number') {
    let str = number.toString() // conversi type number to string
    // validasi digit inputan
    if( str.length <= 16) {
      const array = str.split('0') // bentuk array dari hasil str di split('0')
      // console.log(array) // hasil arraynya
      const hasil = array.map( (element) => {
        return element.split('').sort().join('')
      })
      // console.log(hasil) // hasil setelah disortir perelement arraynya
      const output = parseInt(hasil.join(''))
      console.log(output) // hasil akhir

    } else {
      console.log(`Oops, maksimal input data 16 digit!`)
    }
  } else {
    console.log('Type data harus number')
  }
}
divideAndSort(5956560159466056)
// divideAndSort(5956560159466056012)
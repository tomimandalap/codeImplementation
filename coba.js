const divideAndSort = (number) => {
  if (typeof(number) === 'bigint' || typeof(number) === 'number') {
    let str = number.toString()
    const array = str.split('0')
    console.log(array)

    const hasil = array.map( (element) => {
      return element.split('').sort().join('')
    })
    
    console.log(parseInt(hasil.join(''))) //menampilkan hasil akhir dalam type data number

  } else {
    console.log('Nilai harus number!')
  }
}

divideAndSort(5956560159466056)
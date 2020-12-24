const reversed = (element) => {
  if ( typeof(element) === 'string') {
    console.log(`Inputan: ${element}`)
    // chaining method
    const arr = element.split(' ').reverse().join(' ')
    console.log(`Hasil reverse: ${arr}`)  
  } else {
    console.log('Oops, keyword harus string!')
  }
}

reversed('Saya belajar Javascript')
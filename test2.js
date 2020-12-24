const reversed = (element) => {
  console.log(`Inputan: ${element}`)
  // chaining method
  const arr = element.split(' ').reverse().join(' ')
  console.log(`Hasil reverse: ${arr}`)  
}

reversed('Saya belajar Javascript')
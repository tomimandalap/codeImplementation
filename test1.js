const palindrome = (text) => {
  if ( typeof(text) === 'string' ) {
    let inputText = text.toLowerCase()

    // chaining method
    const data = inputText.split('').reverse().join('')

    if (data === inputText) {
      console.log(`keyword "${text}" merupakan kata dari palindrom`)
    } else {
      console.log(`keyword "${text}" bukan kata palindrom`)
    }
    
  } else {
    console.log('Oops, keyword harus string!')
  }
}

// palindrome('Coba')
palindrome(134567)





// link sumber https://medium.com/aufabillah/reverse-string-javascript-d51a6cc1a1cd
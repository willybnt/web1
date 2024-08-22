function ehPalindromo(palavra) {
    return palavra === palavra.split('').reverse().join('');
  }
  
  const palavra = prompt("Digite uma palavra:");
  const resultado = ehPalindromo(palavra);
  console.log(resultado ? "A palavra é um palíndromo." : "A palavra não é um palíndromo.");
  
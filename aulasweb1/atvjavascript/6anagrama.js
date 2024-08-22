function saoAnagramas(palavra1, palavra2) {
    const ordenar = str => str.split('').sort().join('');
    return ordenar(palavra1) === ordenar(palavra2);
  }
  
  const palavra1 = prompt("Digite a primeira palavra:").toLowerCase().replace(/\s+/g, '');
  const palavra2 = prompt("Digite a segunda palavra:").toLowerCase().replace(/\s+/g, '');
  
  const resultado = saoAnagramas(palavra1, palavra2);
  console.log(resultado ? "As palavras são anagramas." : "As palavras não são anagramas.");
  
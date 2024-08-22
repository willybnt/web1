function contarEspacos(frase) {
    return (frase.match(/\s/g) || []).length;
  }
  
  const frase = prompt("Digite uma frase:");
  const espacos = contarEspacos(frase);
  console.log(`Quantidade de espaços em branco: ${espacos}`);
  
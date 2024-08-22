function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  function obterCategoriaIMC(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  }
  
  const peso = parseFloat(prompt("Digite o peso (em kg):"));
  const altura = parseFloat(prompt("Digite a altura (em metros):"));
  
  if (peso > 0 && altura > 0) {
    const imc = calcularIMC(peso, altura);
    console.log(`O IMC é ${imc.toFixed(2)} (${obterCategoriaIMC(imc)})`);
  } else {
    console.log("Por favor, insira valores válidos para peso e altura.");
  }
  
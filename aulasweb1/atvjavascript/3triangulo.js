function calcularPerimetro(a, b, c) {
    return a + b + c;
  }
  
  function calcularArea(base, altura) {
    return (base * altura) / 2;
  }
  
  const a = parseFloat(prompt("Digite o valor do lado a:"));
  const b = parseFloat(prompt("Digite o valor do lado b:"));
  const c = parseFloat(prompt("Digite o valor do lado c:"));
  const altura = parseFloat(prompt("Digite a altura do lado b:"));
  
  if (a > 0 && b > 0 && c > 0 && altura > 0) {
    const perimetro = calcularPerimetro(a, b, c);
    const area = calcularArea(b, altura);
  
    console.log(`O perímetro do triângulo é ${perimetro.toFixed(2)}`);
    console.log(`A área do triângulo é ${area.toFixed(2)}`);
  } else {
    console.log("Por favor, insira valores válidos e positivos para os lados e a altura.");
  }
  
function resolverEquacaoSegundoGrau(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      return "A equação não possui raízes reais.";
    }
    
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    return [raiz1, raiz2];
  }
  
  const a = parseFloat(prompt("Digite o valor de a:"));
  const b = parseFloat(prompt("Digite o valor de b:"));
  const c = parseFloat(prompt("Digite o valor de c:"));
  
  const resultado = resolverEquacaoSegundoGrau(a, b, c);
  if (typeof resultado === "string") {
    console.log(resultado);
  } else {
    console.log(`Raízes: ${resultado[0].toFixed(2)}, ${resultado[1].toFixed(2)}`);
  }
  
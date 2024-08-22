function exibirSobrenome(nomeCompleto) {
    const partes = nomeCompleto.trim().split(' ');
    const sobrenome = partes.pop();
    return `${sobrenome} ${partes.join(' ')}`;
  }
  
  const nomeCompleto = prompt("Digite o nome completo:");
  const sobrenomePrimeiro = exibirSobrenome(nomeCompleto);
  console.log(`Sobrenome primeiro: ${sobrenomePrimeiro}`);
  
// Uma função que recebe dois números e uma função de callback
function calculate(a, b, callback) {
  const sum = a + b;
  // Executa a função de callback, passando a soma como argumento
  callback(sum);
}

// A função que será usada como callback para mostrar o resultado
function displayResult(result) {
  console.log('O resultado é: ' + result);
} 

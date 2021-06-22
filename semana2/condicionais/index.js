console.log("Heloo Pride")
//1 - Exercício de interpretação de código
//a) Esse código pede para o usuario um numero, e dependendo do numero que ele digitar vai passar ou não.
//b) Ele só vai imprimir os numeros diviziveis por 2 como passou no teste.
//c) Todos os outros numeros não divisiveis por 2.

//2 - Exercicio de interpretação de código
//a) O código serve para que assim que o usuario escolher a fruta ele informa o valor do kg.
//b) Vai aparecer maça no valor.
//c) Se tirar o break antes do default ele vai ser no valor de 5 reais. 

//3 - Exercicio de interpretação de código
//a) A primeira linha pede ao usúario um numero qualquer.
//b) Se o usuario digitar 10 vai informar que passou no teste, se for -10 vai dar not defined.
/*c) Colocando o console log dentro no escopo globral, se o usuario digitar 10 vai passar no teste.
 e vai aparecer a Essa mensagem é secreta. Mas se colocar o -10 não vai aparecer mensagem nenhuma.*/

 //Exercicios de escrita de código.
 /* 1) Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).*/
  //a)
  const idadeDoUsuario= Number(prompt("Qual sua idade?"))
  const verificaIdade = idadeDoUsuario
  
  const podeOuNaoDirigir = (verificaIdade) =>{
    if(verificaIdade) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não tem idade para dirigir")
    }
  }
    
  console.log(podeOuNaoDirigir(verificaIdade))

  



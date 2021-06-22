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

  //b)

 const periodo = prompt("Em que turno você estuda? M (matutino) ou V (vespertino), ou N (noturno)")

 if(periodo === "M") {
     console.log("Bom dia!") 
 } else if(periodo === "V") {
     console.log("Boa tarde!")
 } else if(periodo === "N") {
     console.log("Boa noite!")
 }    else {
     console.log("Erro!")
 }

 // Exercício - 3
 //const periodo = prompt("Em que turno você estuda? M (matutino) ou V (vespertino), ou N (noturno)")

 switch(periodo) {
     case "M":
     console.log("Bom dia!");
     break;
     case "V":
     console.log("Boa tarde!");
     break;
     case "N":
    console.log("Boa noite!");
    break;
    default: 
    console.log("Erro!");
    break;
 }

 //Exercício 4
 //Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

 const genero = prompt("Qual o genero do fime?");
 const preco = prompt("Qual o preço do ingresso?");

   if (genero === "fantasia" && preco <= 15){
     console.log("Bom filme!");
 } else {
     console.log("Escolha outro filme :(");
 }

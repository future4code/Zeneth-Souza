console.log("Hello Pride!")

// 1- Exercício de interpretação de código
//O código está informando é que o valor do meu "i" é 5 e toda vez que ele rodar vai acrescentar mais 1.
//Vai rodar 5 vezes, acrescentando 1+1 = Impresso no console vai ser 10. 

// 2- Exercício de interpretação de código
//a) Ele está perguntando da lista de numeros qual é maior que 18
//Vai ser impresso no console = 19/21/23/25/27/30
//b) Não dá para acessar cada elemento.
// 3 - Exercício de leitura de código
// Se o usuario digitar 4 ele vai imprimir 4 linhas com 4 **** 

//---------------------Exercícios de escrita de código---------------------------
// 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
 //a)
 const quantidadeDeAnimais = Number(prompt('Quantos animais de estimação você tem?'));
 animais = 0;
 if (quantidadeDeAnimais > 0) {
   console.log('Que pena!, você não pode adotar um pet');
 }

 //b)
 const quantidadeDeAnumais = Number(prompt('Quantos animais de estimação você tem?'));
  animais = [];
 if (quantidadeDeAnimais < 1) { 
     console.log("Você não tem Pet")    
 } else {
    for( let i=0; i< quantidadeDeAnimais; i++ ){
        const animal = prompt('Digite o nome do seu animal de estimação')
        animais.push(animal)
    }
}
console.log(animais)

//----------------------------------Exercício2-----------------------------------------------------------
/*Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:*/
//A)
const arrayOriginal = [36,45,69,87,12,2,150,33,47]
console.log(arrayOriginal)

//B)
const arrayOriginal = [36,45,69,87,12,2,150,33,47]
    const imprimirArray = (arrayNumeros) => {
        for( const i=0; i<arrayNumeros.length; i++){
            console.log(numero)
        }
    }
        imprimirArray(arrayOriginal)


//C)
const arrayPares = [36,12,2,150,];
console.log(arrayPares);

//D)
const arrayElementos = []
console.log("Resposta item D")
while (arrayElementos.length<quantidade){
    for(i=0;i<arrayOriginal.length;i++){
        arrayElementos.push(`O elemento do index ${arrayOriginal[i]).toString()} é ${arrayOriginal[i]}`)
    }
    console.log(arrayElementos)
}





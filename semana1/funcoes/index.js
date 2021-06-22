console.log("Hello Pride")

// EXERCICIO DE INTERPRETACAO
//1 -
// a) Ele vai retornar o valor da minha variavel * o valor da minha funcao.
//5
//10
// b) Not defined
//2. Leia o código abaixo
//a. Explique o que essa função faz e qual é sua utilidade:
//Usuario digita uma frase, na outra funcao é para retornar 
//o texto do usuario em letra minusca e falar se no texto tem a palavra cenoura e vai ser FALSE.
/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra` = Todas as respostas vão ser true*/

     //Exercícios de escrita de código
      
     //a 
     function imprimeOlaPessoa() {
         console.log("Olá, meu nome é Zeneth moro em São Paulo e tenho 33 anos e sou estudante.")
     }
     imprimeOlaPessoa()

     //b
     function informacoesUsuario(nome, idade, cidade, profissão) {
         return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`;
     }
     console.log(informacoesUsuario("Zeneth", "33", "São Paulo", "estudante."));

     //EXERCICIO 2 - Escreva as funções explicadas abaixo:
     //A)

     function calculaDoisNumeros(number1, number2){
         const soma = number1 + number2
         console.log(soma)
     }
     calculaDoisNumeros(27, 33)

     //B)
 
     function trueOrFalse(number1, number2) {
        return number1 >= number2;
     }
     console.log(trueOrFalse(56,48))

     //C)
     function trueOrFalse(parametro){
        return parametro % 2 === 0;
     }
     console.log(trueOrFalse(48))

     //D)
     
     function texto(texto) {
       console.log(`Eu amo minha terra: ${texto.length}`);
       console.log(texto.toUpperCase());   
    }
     texto("Eu amo minha terra");

    
    



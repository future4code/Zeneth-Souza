console.log("Hello pride!")

//Exercicio de leitura de código
//1) O map está acessando cada elemento, sua posição no array.
//2) Nesse caso ele está acessando o nome e sobrenome, ele está criando um novo array para imprimir só isso. Vai ser Impresso no console: Amanda Rangel, Lais Petra e Leticia Chijo.
//3) Vai retornar: Mandi - Amanda Rangel, Laura - Lais Petra.

//-----------------Exercícios de escrita de código----------------------------

//1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//A)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
  
 const novoArrayA = pets.map((item, index, array) => {
     return item.nome
 })

 console.log(novoArrayA)

 //B)

 const pets2 = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]
  
  const apenasDogsDaRacaSalsicha = pets2.filter((dogs, index, array) => {
     return dogs.raca === "Salsicha"
  })

  console.log(apenasDogsDaRacaSalsicha)

  //C)

  const pets3 = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]

  const apenasDogsDaRacaPoodle = pets3.filter((dogs, index, array)) =>{
      retur dogs.raca === "Poodle" + ' Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]' ${nome}!'
  })

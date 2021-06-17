console.log('Hello Pride')

//Exercícios de interpretação de código//
//Respostas
//Ele não vai encontar respostas pois eu não dei nenhum elemento.
//ELe vai responder null
// ele vai tirar 2 numeros que antes eram 13 agora são 11.
//Ele vai acessar a posição 0, pois normalmente o computador começa a contar do 0
// Ele vai acessar o indice onde está o número 19
// O valor vai ser 6.
//A frase vai ficar tudo em maiusculo frase fica Subi num ônibus em Mirrocos ele não vai substituir nada e
//ele vai contar a quantidade de elemntos que vai dar 27.

//Exercícios de escrita de código

//1
const seuNome = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual seu e-mail?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${seuNome}`)
//Desculpa mas eu não consigo colocar a crase e não vai.

//2 - Array com 5 comidas preferidas

const comidasPreferidas = ["lasanha", "japonesa", "carne assada", "feijoada", "batata frita"]
console.log(comidasPreferidas)

console.log(`Essas são minhas comidas preferidas
${comidasPreferidas [0]}
${comidasPreferidas [1]}
${comidasPreferidas [2]}
${comidasPreferidas [3]}
${comidasPreferidas [4]}`)

const comidaDoUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = comidaDoUsuario;

console.log(comidasPreferidas);

//3 - a) Crie um array vazio e guarde-o em uma variável, chamada lista de tarefas:

const listaDeTarefas = []

const tarefaUsuario1 = prompt ("Me informe uma tarefa que tenha que fazer hoje") 
const tarefaUsuario2 = prompt ("Me informe uma tarefa que tenha que fazer hoje")
const tarefaUsuario3 = prompt ("Me informe uma tarefa que tenha que fazer hoje")

listaDeTarefas.push(tarefaUsuario1);
listaDeTarefas.push(tarefaUsuario2);
listaDeTarefas.push(tarefaUsuario3);

console.log(listaDeTarefas);

const tarefaUsuario4 = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2");
listaDeTarefas.splice(tarefaUsuario4, 1);

console.log(listaDeTarefas)






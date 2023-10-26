//declara variavel
/*let nickname = "Francisco Mestre pokemon"
//concatena uma mensagem com uma variavel
//console.log ("Bem vindo " + nickname)
//console.log (nickname + " entrou no server")*/
//////////////////////////////////////////////////

//diferenca entre const e variaveis
/*constante
//const notificacao = "Pokemon Go diz:"

//variavel
let notificacao = "Digimon Go diz:"
console.log (notificacao + " tem um novo pokemon na regiao")
console.log (notificacao + " você foi derrotado por um lider")*/
//////////////////////////////////////////////

//tipos de variaveis
/*let poteCafe = "café Pilão"
let poteAcucar = "Açucar Cristal"
let poteBiscoito = "Biscoito Maizena"
const mensagemDaVovo = "Na cozinha da vovó tem: "
console.log (mensagemDaVovo + poteCafe + ", " + poteAcucar + ", " + poteBiscoito)

poteCafe = "café 3 Corações"

console.log (mensagemDaVovo + poteCafe + ", " + poteAcucar + ", " + poteBiscoito)*/
//////////////////////////////////////////////

//tipos de variaveis
/*let nomePokemon = "pikachu"
let pokemonSexo = "M"

let nivelPokemon = 20
let pontosDeVidaPokemon = 45

let selecionavel = true*/

////////////////////////
//vetor
/*let nomesPokemon = ["pikachu", "charmander", "bulbasaur"]

//matriz
let timePokemo = [
  ["pikachu", "M", "level 1"],
  ["charmander", "F", "level 4"],
]

console.log(
  "O pokemon " +
    timePokemo[1][0] +
    " é do sexo " +
    timePokemo[1][1] +
    " e está no " +
    timePokemo[1][2]
)*/
////////////////////////

///trabalhando com condicionais
/*let ehLigado = true
if (ehLigado) {
  console.log("executou comando")
}

/*let possuiOvos = true
let itensComprados = ""
if (possuiOvos) {
  itensComprados = "Leite"
} else {
  console.log("passou na sessão de congelados")
  itensComprados = "Lazanha congelada"
}

console.log("item comprado: " + itensComprados)*/

/*let nivelDeFome = 10
if (nivelDeFome === 1) {
  console.log("pouca fome")
} else if (nivelDeFome === 2) {
  console.log("muita fome")
} else {
  console.log("você comeria mais que o pica-pau!")
}*/

////////////////////////

//switch case
// switch/case/break/default
/*let fruta = "morango"

switch (fruta) {
  case "laranja":
    console.log("suco de laranja")
    break

  case "banana":
  case "morango":
    console.log("vitamina de " + fruta)
    break

  case "maça":
    console.log("suco de maça")
    break

  default:
    console.log("suco salada de fruta")
}*/

////////////////////////
//introdução laço de repetição
/*for (let i = 0; i < 4; i++) {
  console.log(i)
  console.log("aumentando o contador")
}

let pontosDeVida = 0

for (let i = 0; i < 10; i++) {
  pontosDeVida += 1
  console.log("tomou poção magica " + i)
}

console.log(pontosDeVida + " totais")*/

///while
/*let i = 0

while (i < 3) {
  console.log("ola")
  i++
}*/
///////////////

///do while
/*let i = 0

do {
  console.log("ola")
  i++
} while (i < 3)*/

////////////////////////
//function
/*torrar()

function torrar() {
  console.log("torrando pão")
  injetarPao()
}

function injetarPao() {
  console.log("preparando para injetar pão")
  console.log("finalizado")
}

main()

function main() {
  getData()
  checkValues()
  sendToDatabase()
}

function getData() {
  console.log("pegando dados do usuario")
  if (1<3){
    console.log("numero encontrado")
  }
}

function checkValues() {
  console.log("pegando dados do usuario")
}

function sendToDatabase() {
  console.log("enviando pro server")
}

torrar("pao de forma", "francisco")


function torrar(pao, nome = "Cliente", valor=9.65) {
  //() >> paramentro
  console.log("torrada feita com " + pao)
  console.log("ela é um pedido de " + nome)
  console.log("valor total do pedido é " + valor)
}


/////////
createStringConnection("db_produtcs", "francisco", "1234")

function createStringConnection(databaseName, user, pass){
  console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

///////
//funções ocm retorno
let resultado = soma(5, 10)

console.log("o resultado dessa função é "+ resultado)

function soma(numA, numB) {
  
  return numA + numB
}
/*
let userName = getFirstName("Carlos-Ruanito-de Almeida-Silva", "-")
console.log("Seja Bem-vindo " + userName)

userName = getFirstName("Francisco Bezerra", " ")
console.log("Seja Bem-vindo " + userName)

function getFirstName(name, splitChar){
  let firstName = name.split(splitChar)[0]
  return firstName
}
*/
/*
let invoice = {
  name: "Francisco",
  age: 31,
  products: {
    0: ["mouse 2xwm", 29.90],
    1: ["Teclado mecanico", 129.99],
    2: ["Monitor", 899.99]
  },
  taxes: "98.99"
}

generateInvoice(invoice)

 function generateInvoice(invoice) {
   console.log(`O comprador é ${invoice.name}`)
   console.log(`A idade é ${invoice.age}`)

   for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(` - ${productName}: R$ ${productPrice}`)
   }
   
   
 }*/

class formaDeBolo {
  constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio
  }
  escrever(){
    console.log(
      `Um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`
    ) 
  }

  assar(){
    console.log("bolo assando de " + this.saborDaMassa)
  }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutela")
let boloPremium = new formaDeBolo("baunilha", "coco")


boloFesta.saborDaMassa = "floresta negra"
boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()

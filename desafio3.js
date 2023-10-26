//classe
class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  //objetos(metodos)
  attack() {

    //estrutura de decisão
    switch (this.tipo) {
      case "mago":
        attacking = "magia"
        console.log(`o ${this.tipo} atacou usando ${attacking} `)
        break

      case "guerreiro":
        attacking = "espada"
        console.log(`o ${this.tipo} atacou usando ${attacking} `)
        break

      case "monge":
        attacking = "artes marciais"
        console.log(`o ${this.tipo} atacou usando ${attacking} `)
        break

      case "ninja":
        attacking = "shuriken"
        console.log(`o ${this.tipo} atacou usando ${attacking} `)
        break
    }
  }
}


//variaveis
let attacking
let heroMage = new hero("Presto", 22, "mago")
let heroWarrior = new hero("Eric", 24, "guerreiro")
let heroMonk = new hero("Mestre dos magos", 88, "monge")
let heroNinja = new hero("Bob", 10, "ninja")


//chamar classe+objeto
heroMage.attack()
heroWarrior.attack()
heroMonk.attack()
heroNinja.attack()

const contadorA = require('./aula132-instanciaUnica')
const contadorB = require('./aula132-instanciaUnica')

const contadorC = require('./aula132-instanciaNova')()
const contadorD = require('./aula132-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
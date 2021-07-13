const fs = require('fs')

const caminho = __dirname + '/aula137-arquivo.json' // serve pra ler tanto sincrono quanto assincrono

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // utf-8 é o encoding
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./aula137-arquivo.json')
console.log(config.db) // este exemplo vem antes do assincrono

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
const alunas = require ("../model/alunas.json")
exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(alunas)
}
exports.getById = (req,res) => {
    const id = req.params.id
    if (id > 17 || id <= 0){
        res.send("id não é válido")
    }
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}
exports.getBooks = (req,res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna){
        res.send("não localizada")
    }
    const livros = aluna.livros
    const titulos = livros.map(livro => livro.titulo)
    res.status(200).send(titulos)
}

exports.getSp = (req, res) => {
    const nasceuSp = alunas.filter (menina => menina.nasceuEmSp == "true")
    const meninasSP = nasceuSp.map(aluna => aluna.nome)
    res.status(200).send(meninasSP)
}
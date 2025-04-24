/*
PARA A CONEXÃO FUTURA DO BANCO DE DADOS 
const Item = require('../model/Item');

*/

// mockando os dados para chamada fake para funcionamento das rotas
let itens = [
  { id: 1, nome: "Item A", descricao: "Primeiro item" },
  { id: 2, nome: "Item B", descricao: "Segundo item" }
];

// POST = criação de um novo item
exports.createItem = (req, res) => {
  const { nome, descricao } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  const novoItem = {
    id: Date.now(), // gera um ID aleatório toda vez se você não passar o ID pela rquisição
    nome,
    descricao
  };

  itens.push(novoItem);
  res.status(201).json(novoItem);
};

// GET = Listar todos os itens
exports.getItems = (req, res) => {
  res.json(itens);
};

// GET ID = Buscar item por ID
exports.getItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = itens.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item não encontrado" });
  }

  res.json(item);
};

// PUT = Atualizar item por ID em especifico
exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, descricao } = req.body;

  const index = itens.findIndex(i => i.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Item não encontrado" });
  }

  itens[index] = {
    ...itens[index],
    nome: nome || itens[index].nome,
    descricao: descricao || itens[index].descricao
  };

  res.json(itens[index]);
};

// DELETE = Deletar item por ID por item em especifico
exports.deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = itens.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item não encontrado" });
  }

  const deletado = itens.splice(index, 1);
  res.json({ message: "Item deletado com sucesso", item: deletado[0] });
};

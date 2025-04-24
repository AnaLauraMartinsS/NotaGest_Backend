const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(cors()); // vai estar habilitando o CORS para qualquer origem que quiser se conectar
app.use(express.json());

const itemRoutes = require('./route/itemRoute');
app.use('/api/item', itemRoutes);

/*
Sincronização com o DB -> Provavelmente MySQL ou MongoDB (se mudar para mongo, muda as configurações de ambiente para a conexão!)
Favor seguir a DOCUMENTAÇÃO DO PRÓPRIO MONGODB para a conexão.
*/
sequelize.sync().then(() => {
  console.log("Banco sincronizado!");
}).catch(err => {
  console.error("Erro ao conectar com o banco:", err);
});

// Rodar o servidor na porta 3001 -> Front vai rodar na porta 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

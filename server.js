const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const itemRoutes = require('./route/itemRoute');
app.use('/api/item', itemRoutes);

// Sincronização com o Banco de Dados
sequelize.sync().then(() => {
  console.log("Banco sincronizado!");
}).catch(err => {
  console.error("Erro ao conectar com o banco:", err);
});

// Rodar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

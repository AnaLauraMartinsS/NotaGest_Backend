# 📝 NotaGest - API Backend com Express.js

Este projeto é o backend simples feito com **Node.js & Express**, realiza todas as funções de um CRUD (Create, Read, Update, Delete) com os dados mockados.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Axios](https://axios-http.com/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)

API REST feita com **Node.js** e **Express** para gerenciamento de arquivos. Este projeto simula o cadastro de itens com rotas básicas de CRUD.

## ⚙️ Como Rodar o Back-end

1. Acesse a pasta do back-end:
   ```bash
   cd backend
2. Instale as dependências:
  npm install

3. Inicie o servidor:
  npm run dev

A API estará disponível em: http://localhost:3001/api/item

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto **back-end** com as seguintes informações para configurar a conexão com o banco de dados MySQL:
.env

# Porta do servidor
PORT=3001

# Configurações do MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

🧪 Testes
Você pode testar os endpoints usando:

Postman ou Insomnia

## 📚 Endpoints da API

| Método  | Rota              | Descrição                   |
|---------|-------------------|-----------------------------|
| GET     | `/api/item`       | Lista todos os itens        |
| GET     | `/api/item/{id}`  | Busca item por ID           |
| POST    | `/api/item`       | Cria um novo item           |
| PUT     | `/api/item/{id}`  | Atualiza um item por ID     |
| DELETE  | `/api/item/{id}`  | Deleta um item por ID       |

📌 Adendo

A conexão com banco de dados ainda está em fase de implementação.

Por enquanto os dados são simulados em memória.

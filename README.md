# 📝 NotaGest - API Backend com Express.js

Este projeto é o backend simples feito com **Node.js & Express**, realiza todas as funções de um CRUD (Create, Read, Update, Delete) com os dados mockados.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Axios](https://axios-http.com/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)

## ⚙️ Como fazer a instalação e execução do projeto

1. **Clone o repositório**

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

2. **No terminal coloque o seguinte comando**
npm install

3. **Dentro da IDE crie um arquivo .ENV** com as seguintes configurações:
PORT=3001
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco

4. Inicie a API com o seguinte comando:
npm run dev

5. O servidor ficará disponível em: http://localhost:3001

🧪 Testando a API
Você pode testar com ferramentas como:

Insomnia ou Postman

Endpoints disponíveis:

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





# To-Do List API

API RESTful para gerenciamento de tarefas (to-do list), construída com NestJS, Sequelize (ORM) e PostgreSQL.

---

## Tecnologias

- [NestJS](https://nestjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- JWT para autenticação
- Docker e Docker Compose para containerização

---

## Funcionalidades

- Cadastro e login de usuários
- Criação, atualização, listagem e remoção de tarefas
- Associação de etiquetas (tags) às tarefas
- Autenticação via JWT
- Relação muitos-para-muitos entre tarefas e tags

---

## Pré-requisitos

- Docker e Docker Compose instalados ([Docker Docs](https://docs.docker.com/get-docker/))
- Node.js (opcional para rodar localmente)

---

## Instalação e execução

### Com Docker

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Inicie os containers Docker:

```bash
docker-compose up -d
```

3. (Opcional) Para rodar a aplicação em modo de desenvolvimento:

```bash
npm run start:dev
```

---

## Endpoints principais da API

| Método | Endpoint           | Descrição                        | Autenticação? |
|--------|--------------------|---------------------------------|---------------|
| POST   | `/auth/register`   | Registrar novo usuário           | Não           |
| POST   | `/auth/login`      | Login e obtenção do token JWT    | Não           |
| GET    | `/tasks`           | Listar todas as tarefas do usuário | Sim          |
| POST   | `/tasks`           | Criar nova tarefa                | Sim           |
| PUT    | `/tasks/:id`       | Atualizar tarefa existente      | Sim           |
| DELETE | `/tasks/:id`       | Deletar tarefa                  | Sim           |
| GET    | `/tags`            | Listar etiquetas                | Sim           |
| POST   | `/tags`            | Criar nova etiqueta             | Sim           |

---

## Como usar os endpoints

### 1. Registrar usuário

- **Endpoint:** `POST /auth/register`
- **Descrição:** Registra um novo usuário no sistema.
- **Request Body:**

```json
{
  "username": "joao",
  "email": "joao@email.com",
  "password": "senha123"
}
```

- **Resposta esperada:** Dados do usuário criado (sem senha).

---

### 2. Login

- **Endpoint:** `POST /auth/login`
- **Descrição:** Autentica o usuário e retorna um token JWT para acesso às rotas protegidas.
- **Request Body:**

```json
{
  "email": "joao@email.com",
  "password": "senha123"
}
```

- **Resposta esperada:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

### 3. Criar tarefa

- **Endpoint:** `POST /tasks`
- **Descrição:** Cria uma nova tarefa para o usuário autenticado.
- **Headers:**

```
Authorization: Bearer <token obtido no login>
Content-Type: application/json
```

- **Request Body:**

```json
{
  "title": "Comprar leite",
  "description": "Leite, pão e café",
  "tags": [1, 3]
}
```

- **Resposta esperada:** Dados da tarefa criada, incluindo tags associadas.

---

### 4. Listar tarefas

- **Endpoint:** `GET /tasks`
- **Descrição:** Lista todas as tarefas do usuário autenticado.
- **Headers:**

```
Authorization: Bearer <token>
```

- **Resposta esperada:** Lista de tarefas com informações completas.

---

### 5. Atualizar tarefa

- **Endpoint:** `PUT /tasks/:id`
- **Descrição:** Atualiza uma tarefa existente.
- **Headers:**

```
Authorization: Bearer <token>
Content-Type: application/json
```

- **Request Body (exemplo):**

```json
{
  "title": "Comprar leite e pão",
  "status": "completed"
}
```

---

### 6. Deletar tarefa

- **Endpoint:** `DELETE /tasks/:id`
- **Descrição:** Remove uma tarefa.
- **Headers:**

```
Authorization: Bearer <token>
```

---

### 7. Gerenciar etiquetas (tags)

- Listar etiquetas: `GET /tags` (requer token)
- Criar etiqueta: `POST /tags` com body JSON:

```json
{ "name": "Urgente" }
```

---

## Estrutura do projeto

```
src/
├── app.module.ts         # Módulo raiz da aplicação
├── main.ts               # Arquivo principal de inicialização
├── auth/                 # Módulo de autenticação
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── users/                # Model e lógica relacionada a usuários
│   └── user.model.ts
├── tasks/                # Módulo de tarefas (controller, service, model)
│   ├── task.controller.ts
│   ├── task.service.ts
│   └── task.model.ts
├── tags/                 # Módulo de etiquetas (controller, service, model)
│   ├── tag.controller.ts
│   ├── tag.service.ts
│   └── tag.model.ts
```

---

## Variáveis de ambiente

Configure as seguintes variáveis no arquivo `.env`:

| Variável           | Descrição                  | Exemplo          |
|--------------------|----------------------------|------------------|
| `DATABASE_HOST`    | Host do banco de dados      | `localhost`      |
| `DATABASE_PORT`    | Porta do banco de dados     | `5432`           |
| `DATABASE_USER`    | Usuário do banco            | `postgres`       |
| `DATABASE_PASSWORD`| Senha do banco              | `senha123`       |
| `DATABASE_NAME`    | Nome do banco               | `todo_db`        |
| `JWT_SECRET`       | Chave secreta para JWT      | `seusegredojwt`  |

---

Se quiser posso ajudar a criar um arquivo `.env.example` para facilitar a configuração!

---

Se precisar de mais alguma coisa, só avisar!

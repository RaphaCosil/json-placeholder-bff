# BFF NestJS com JSONPlaceholder

## Visão Geral
Este é um projeto Backend for Frontend (BFF) desenvolvido com NestJS, que consome a API JSONPlaceholder para lidar com publicações e comentários. A aplicação está organizada em módulos separados para `comment` e `publication`.

## Tecnologias Utilizadas
- [NestJS](https://nestjs.com/)
- [Axios](https://github.com/axios/axios) para requisições HTTP
- [RxJS](https://rxjs.dev/) para manipulação de requisições assíncronas
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como API externa
- [ConfigService](https://docs.nestjs.com/techniques/configuration) para gerenciamento de variáveis de ambiente

## Estrutura do Projeto
```
src/
|-- comment/
|   |-- controllers/       
|   |-- dto/                
|   |-- interfaces/       
|   |-- mapper/             
|   |-- services/          
|   |-- comment.module.ts  
|
|-- publication/
|   |-- controllers/        
|   |-- dto/                
|   |-- interfaces/        
|   |-- mapper/             
|   |-- services/          
|   |-- publication.module.ts
|
|-- app.module.ts           
|-- main.ts                
|
|-- test/  
```

## Endpoints

### Publicações (`/publication`)
- **POST `/publication`** - Criar uma nova publicação
- **GET `/publication`** - Buscar todas as publicações
- **GET `/publication/:id`** - Buscar uma publicação por ID
- **GET `/publication/user/:userId`** - Buscar publicações de um usuário

### Comentários (`/comment`)
- **POST `/comment`** - Criar um novo comentário
- **GET `/comment`** - Buscar todos os comentários
- **GET `/comment/:id`** - Buscar um comentário por ID
- **GET `/comment/publication/:publicationId`** - Buscar comentários de uma publicação

## Configuração e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/RaphaCosil/server-bff
   cd server-bff
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente:
   ```sh
   cp .env.example .env
   ```
   Edite o arquivo `.env` e defina `API_KEY` com a URL da API JSONPlaceholder.
4. Execute a aplicação:
   ```sh
   npm run start
   ```
5. Para rodar em modo de desenvolvimento:
   ```sh
   npm run start:dev
   ```

## Testes
Para rodar os testes unitários:
```sh
npm run test
```
Para rodar os testes e2e:
```sh
npm run test:e2e
```


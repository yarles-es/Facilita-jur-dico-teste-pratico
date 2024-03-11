# Sistema de Gerenciamento de Clientes para Empresa de Limpeza

Este projeto foi desenvolvido como parte do Teste de Programação para a vaga de Desenvolvedor na Facilita Jurídico. O objetivo é fornecer uma plataforma integrada para gerenciar os clientes de uma empresa de limpeza, substituindo o controle anterior feito por planilhas. O sistema permite o cadastro e a visualização de clientes, bem como a otimização de rotas de atendimento.

## Características

- **Cadastro de Clientes**: Possibilidade de adicionar novos clientes à base de dados.
- **Listagem de Clientes**: Visualização de todos os clientes cadastrados com opções de filtragem.
- **Otimização de Rotas**: Cálculo da rota mais eficiente para a visitação dos clientes, partindo da empresa e retornando a ela.

## Tecnologias Utilizadas

- **Backend**: Node.js com um banco de dados PostgreSQL.
- **Frontend**: React para uma interface de usuário e interativa.

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:

- `/backend`: Contém toda a lógica do servidor, APIs e conexão com o banco de dados PostgreSQL.
- `/frontend`: Abriga a interface de usuário desenvolvida com React, que se comunica com o backend.

## Como Executar

### Pré-requisitos

- Node.js (criado com a versão 21.5.0)
- PostgreSQL
- Docker(Opcional)
- Docker-compose(Opicional)

### Instruções

Clone o repositório para a sua máquina local e siga as instruções abaixo para executar o backend e o frontend separadamente.

### Backend com Docker(Recomendado)

Esta aplicação está configurada para ser executada usando o Docker, o que simplifica a configuração do ambiente.

1. Navegue até a pasta `backend`.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente conforme necessário.(caso não use o docker).
4. Usando docker execute o comando `npm run docker` para gerar um container com os dados ja completos para o backEnd funcionar.
5. Execute `npm start` para iniciar o servidor.

### BackEnd sem Docker

Se você preferir não usar o Docker, siga as instruções abaixo.

#### Configuração do Banco de Dados

1. Instale e configure o PostgreSQL.
2. Crie um banco de dados chamado seu_banco_de_dados.
3. Execute o DDL abaixo para criar a tabela necessária:
```sql
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  coord_x DECIMAL(10,2) NOT NULL,
  coord_y DECIMAL(10,2) NOT NULL
);
```
4. Navegue até a pasta backend.
5. Modifique o arquivo .env na raiz do backEnd com as seguintes variaveis:
```makefile
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=seu_banco_de_dados
```
6. Instale as dependências do projeto com npm install.
7. Execute npm start para rodar o servidor em modo de desenvolvimento.


### Frontend

1. Navegue até a pasta `frontend`.
2. Instale as dependências com `npm install`.
3. Execute `npm run dev` para iniciar o ambiente de desenvolvimento do React.

## Banco de Dados

Abaixo está o DDL para criar a tabela de clientes no PostgreSQL:

```sql
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  coord_x DECIMAL(10,2) NOT NULL,
  coord_y DECIMAL(10,2) NOT NULL
);
```
# Link para explicação em video do projeto:
https://youtu.be/rqw7cubjTqE

Personalize as versões do Node.js e PostgreSQL e outras informações específicas conforme necessário. Este é um ponto de partida; sinta-se à vontade para adicionar detalhes adicionais como capturas de tela, GIFs de demonstração, e qualquer outra informação que você achar que pode ser útil para quem está tentando entender ou contribuir para o projeto.

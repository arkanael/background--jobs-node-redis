<h1 align="center">
  <img alt="node" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" width="1200px" />
</h1>

## 🏎 Sobre App

<p align="center">Envio de e-mails ou trabalhos em segundo plano com Node.js utilizando uma biblioteca fantástica chamada Bull que nos permite não só executar background tasks mas também monitorar falhas, realizar retentativas, adicionar prioridades e tudo isso de uma forma extremamente simples e performática.</p>

## 🚀 Tecnologias

- Express para criar a API
- Nodemon para reinicar a api de forma automatica durante o desenvolvimento
- Nodemailer para envio de email
- Mailtrap para teste de email.
- Dotenv para configurar variaveis de ambientes na aplicação
- Redis é um armazenamento de estrutura de dados de chave-valor de código aberto e na memória.
- Docker para rodar o redis
- Bull biblioteca node que implementa um sistema de fila super rápido e muito robusto baseado em redis.
- Bull board - Para monitorar as fallhas da aplicação.
- Npm-run-all para executar varios scripts do packeged.json de uma só vez.

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Mailtrap](https://mailtrap.io/)

## 🔥 Instalação e execução do app

1. Faça um clone desse repositório;
2. Entre na pasta `cd masterclass-nodejs-background-jobs`;
3. Rode `yarn` para instalar as dependências;
4. Copie o arquivo `.env.example` e crie um arquivo `.env` com as credenciais de email e do Redis;
5. Rode `yarn dev` para iniciar o servidor.

## Cadastro no Mailtrap

Acesse o site do [Mailtrap](https://mailtrap.io/), crie uma conta e depois crie um projeto para obter as configurações
de acesso.

## 🚲 `.env.example` e crie um arquivo `.env` com as credenciais e porta do mailtrap

MAIL_HOST=smtp.mailtrap.io"
MAIL_PORT=2525
MAIL_USER=
MAIL_PASS=

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

## 🛹 Instalação do redis

### Via docker (a melhor escolha, necessita do docker instalado):

docker run --name redis -p 6379:6379 -d -t redis:alpine

### Windows 10 (apresentou um problema):

Link: https://github.com/MicrosoftArchive/redis/releases

### Precisa baixar o arquivo msi do instalador e baixar o arquivo zip com o cli exemplo

Redis-x64-3.0.504.msi (Instalador)
Redis-x64-3.0.504.zip (CLI)

Segue um pequeno tutorial no youtube: https://www.youtube.com/watch?v=MdusQpokN_s

## ✈ Comandos de utilizados no desenvolvimento do app

- yarn init -y
- yarn add express
- yarn add nodemon sucrase -D
- yarn add nodemailer
- yarn add dotenv
- yarn add bull
- yarn add npm-run-all -D
- yarn add bull-board

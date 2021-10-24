<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/masterclass.png" width="120px" />
</h1>

<p align="center">Esse projeto sobre trabalhos em segundo plano com Node.js utilizando uma biblioteca fantástica chamada Bull que nos permite não só executar background tasks mas também monitorar falhas, realizar retentativas, adicionar prioridades e tudo isso de uma forma extremamente simples e performática.</p>


## 🚀 Tecnologias

express para criar a API
nodemon para reinicar a api de forma automatica durante o desenvolvimento
nodemailer para envio de email
Mailtrap para teste de email.
dotenv para configurar variaveis de ambientes na aplicação
bull  biblioteca node que implementa um sistema de fila super rápido e muito robusto baseado em redis.
Redis
docker para rodar o redis
npm-run-all para executar varios scripts do packeged.json de uma só vez.
Bull board - Para monitorar as fallhas da aplicação.

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)


## 🔥 Instalação e execução do app

1. Faça um clone desse repositório;
2. Entre na pasta `cd masterclass-nodejs-background-jobs`;
3. Rode `yarn` para instalar as dependências;
4. Copie o arquivo `.env.example` e crie um arquivo `.env` com as credenciais de email e do Redis;
7. Rode `yarn dev` para iniciar o servidor.

## 🔥 Instalação do redis

Via docker (a melhor escolha, necessita do docker instalado): 
docker run --name redis -p 6379:6379 -d -t redis:alpine

Windows 10 (apresentou um problema): 
Link: https://github.com/MicrosoftArchive/redis/releases

Precisa baixar o arquivo msi do instalador e baixar o arquivo zip com o cli
exemplo: 
Redis-x64-3.0.504.msi (Instalador)
Redis-x64-3.0.504.zip (CLI)

Segue um pequeno tutorial no youtube: https://www.youtube.com/watch?v=MdusQpokN_s

## 🔥 Comandos de utilizados no desenvolvimento do app

yarn init -y
yarn add express
yarn add nodemon sucrase -D
yarn add nodemailer
yarn add dotenv
yarn add bull
yarn add npm-run-all -D
yarn add bull-board

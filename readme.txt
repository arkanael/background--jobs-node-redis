Backgraund jobs

yarn init -y
yarn add express
yarn add nodemon sucrase -D
yarn add nodemailer
yarn add dotenv
yarn add bull
yarn add npm-run-all -D
yarn add bull-board

Instalar o redis:
Docker (a melhor escolha): 
docker run --name redis -p 6379:6379 -d -t redis:alpine

Windows 10 (apresentou um problema): 
Link: https://github.com/MicrosoftArchive/redis/releases

Precisa baixar o arquivo msi do instalador e baixar o arquivo zip com o cli
exemplo: 
Redis-x64-3.0.504.msi (Instalador)
Redis-x64-3.0.504.zip (CLI)

Segue um pequeno tutorial no youtube: https://www.youtube.com/watch?v=MdusQpokN_s


Tecnologias: 

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


Backgraund jobs
# Passos para rodar o projeto com o Docker

```
1 - Ter o Docker configurado na sua máquina

2 - Depois de certificar que o Docker está configurado e rodando, vamos copiar o ficheiro **.env.example** \n isso dentro da pasta **/server/.env.example**, alterar o nome para **.env**

3 - Depois de copiar o ficheiro **.env.example** e alterar o nome para **.env**, deve setar as variaveis de ambiente: 
    DB_NAME=desafio-dev-db
    DB_USER=admin
    DB_PASSWD=123456
    DB_HOST=desafio_dev_db

4 - Próximo passo, voltar para a pasta principal rodando o seguinte comando no terminal **cd ..**, em seguida rodar o comando **pwd** para certificar que está dentro da pasta **desafio-dev**,
atenção: o comando **pwd** vai exibir o caminho apartir da raiz

5 - Estamos quase prontos, agora precisamos rodar o comando **docker-compose up -d**, depois rodar o comando **docker-compose ps** para certificar que os containers estão no AR.

6 - Finalmente pode certificar que a API tá rodando acessando a URL **http://localhost:4444** no seu navegador e aplicação WEB no endereço **http://localhost:3000**
```

# Passos para rodar o projeto SEM Docker

```
1 - Ter o NODEJS configurado na sua máquina

2 - Copiar o ficheiro **.env.example** isso dentro da pasta **/server/.env.example**, alterar o nome para **.env**

2 - Setar as variaveis de ambiente dentro do ficheiro **server/.env**: 
    DB_NAME=desafio-dev-db
    DB_USER=admin
    DB_PASSWD=123456
    DB_HOST=localhost

3 - Estando dentro da pasta **/server**, rodar o comando **yarn/npm** para instalar as dependencias

4 - Depois disso rodar o comando **yarn dev:server** para startar o servidor

5 - Finalmente pode certificar que a API tá rodando acessando a URL **http://localhost:4444** no seu navegador

6 - Estamos quase prontos, agora precisamos rodar a nossa aplicação web, voltar para a pasta raiz **desafio-dev**, e instalar as dependencias com o comando **yarn/npm**.

7 - Tendo as nossas dependencias instaladas precisamos startar a aplicação com o comando **yarn dev**.

8 - Agora já pode acessar a sua aplicação WEB no navegador através do endereço **http://localhost:3000**

9 - HORAAAAA VIVAAAAAAAAAAAAA, parabéns :balloon: você conseguiu rodar o projeto agora é só testar :sunglasses:
```


# API ENDPOINTS

```
POST /upload-transaction
BODY {
    upload-file: File
}
```
```
GET /transactions
```

# TECNOLOGIAS USADAS

:arrow_forward: NODEJS + EXPRESS + TYPESCRIPT + TYPEORM + POSTGRES + DOCKER + DOCKER COMPOSE + INSOMNIA
<br>
:arrow_forward: REACTJS + VITE + TYPESCRIPT + VITEST

<h1 align="center">Desenvolvido por Henriques Salucamba :purple_heart:</h1>

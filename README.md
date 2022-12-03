# Atividade de POO

# Rodar o script ambiente.sh
Se você estiver usando o linux de os seguintes comandos:
```
chmod +x ambiente.sh
chmod +x initClient.sh
./ambiente.sh
```
Se você estiver usando o windows, abra o gitBash e execute o comando:
```
./ambiente.sh
```

Quando o script ambiente.sh estiver sendo executado ira aparecer as seguintes opções:

![op](https://github.com/mateushlsilva/atvi1-POO/blob/main/imagens/op.png)

A opção 1 vai rodar a atvi1</br>
A opção 2 vai rodar a atvi2</br>
A opção 3 vai rodar a atvi3</br>
A opção 4 vai rodar o back-end da atvi4</br>
A opção 5 vai rodar o back-end da atvi5</br>

Para rodar o front-end da atvi4 e atvi5 será necessario rodar o script *initClient.sh* em outra aba do gitBash !
Então abra o gitBash e execute o comando:
```
./initClient.sh
```
Caso a atvi1 não seja executada, você deve usar os seguintes comandos:
```
cd atvi-wb-typescript
npm run dev 
```
Caso o *npm run dev* não funcione você deve usar o seguinte comando:
```
npm install
npm run app 
```

Caso a atvi2 não seja executada, você deve usar os seguintes comandos:
```
cd atvi2
npm start
```
Caso o *npm start* não funcione você deve usar o seguinte comando:
```
npm install
npm start
```

Caso a atvi3 não seja executada, você deve usar os seguintes comandos:
```
cd atvi3
npm start
```
Caso o *npm start* não funcione você deve usar o seguinte comando:
```
npm install
npm start
```
Caso a atvi4 não seja executada, você deve usar os seguintes comandos, para o rodar o back-end:
```
cd atvi4/executavel
java -jar wbbackend.jar
```
Para rodar o front:
```
cd atvi4/front
npm start
```

Caso o *npm start* não funcione você deve usar o seguinte comando:
```
npm install
npm start
```

Caso a atvi5 não seja executada, você deve usar os seguintes comandos, para o rodar o back-end:
```
cd atvi5/server
npm run dev
```
Para rodar o front:
```
cd atvi5/client
npm start
```

Caso o *npm start* não funcione você deve usar o seguinte comando:
```
npm install
npm start
```

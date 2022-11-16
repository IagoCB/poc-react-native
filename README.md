<h1 align="center"> :memo: Poc React Native</h1>
<p align="center">O projeto consiste em uma prova de conceito na qual, através do aplicativo, é possível gerenciar usuários listando-os, salvando-os, editando-os e excluindo-os.</p>

<div align="center">

![ReactNative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Android Studio](https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white)

</div>

## 📑 Conteúdo
<a href="#Requisitos">🔧 Requisitos</a><br>
<a href="#Como-executar-o-aplicativo">🧩 Como executar o aplicativo</a><br>
<a href="#Como-rodar-os-testes">📀 Como rodar os testes</a><br>
<a href="#Visão-Geral-do-Aplicativo">📸 Visão Geral do Aplicativo</a>

## 🔧 Requisitos <a name="Requisitos"></a>
1. Instale o [Android Studio](https://developer.android.com/studio).
    - É necessário criar um emulador ou baixá-lo no seu celular para utilizar o aplicativo.

2. Baixe o [Node.js](https://nodejs.org/en/download/) versão 12 a 16 e siga as instruções na documentação oficial<br>
     
    - Verifique se as instalações ocorreram com sucesso através do seguinte comando no terminal:
        ```
        node --version
        ```

3. Utilizei o [Visual Studio Code](https://code.visualstudio.com/) mas também é possível utilizar outro editor de sua preferência, basta configurá-lo corretamente.
    
## 🧩 Como executar o aplicativo <a name="Como-executar-o-aplicativo"></a>
1. Utilizando o terminal do Git Bash, clone o repositório em sua máquina através do seguinte comando:
    ```
    $ git clone https://github.com/IagoCB/poc-react-native.git
    ```
2. Vá para o back-end:
    ```
    cd poc-react-native/back
    ```
3. Instale as dependências:
    ```
    npm i
    ```
4. Coloque o caminho para o mongodb no arquivo mongo.helper.ts
5. Execute o back:
    ```
    npm run dev
    ```
6. Vá para o aplicativo:
    ```
    cd ../front
    ```
7. Instale as dependências:
    ```
    npm i
    ```
8. Coloque o caminho para o back no arquivo config.js
9. Execute o aplicativo:
    ```
    expo start
    ```
10. Escolha a opção que deseja executar.

## 📀 Como rodar os testes do back <a name="Como-rodar-os-testes"></a>

- Através do terminal utilize o comando:
    ```
    npm run test
    ```

## 📸 Visão Geral do Aplicativo <a name="Visão-Geral-do-Aplicativo"></a>
<div align="center">
<img width="24%" height="24%" src="images/image1.jpg?raw=true"> 
<img width="24%" height="24%" src="images/image2.jpg?raw=true"> 
<img width="24%" height="24%" src="images/image3.jpg?raw=true"> 
<img width="24%" height="24%" src="images/image4.jpg?raw=true"> 
</div>
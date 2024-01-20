# Google Search Robot

Este repositório apresenta um estudo de caso desenvolvido como parte do desafio técnico para o processo seletivo da empresa BrandMonitor.

## Visão Geral

O projeto consiste em um aplicativo dividido em três partes principais:

### Frontend (ReactJS - Vite)
O frontend é construído utilizando ReactJS e Vite. Ele é responsável por receber três informações específicas do usuário.

### Backend (NestJS)
O backend, implementado com NestJS, recebe as informações do frontend e se comunica com um processador de dados implementado em Golang. Esta comunicação ocorre através da rede, permitindo a transferência eficiente de dados.

### Processador de Dados (Golang)
O processador de dados, desenvolvido em Golang, desempenha um papel crucial no projeto. Ao receber as informações do backend, ele adiciona um campo `dateTime` às mesmas e realiza um tratamento no campo `keywords`, convertendo-as para UPPERCASE. Após esse processamento básico, os dados são enviados de volta ao backend para serem salvos no banco de dados MongoDB.

## Fluxograma do Projeto

![Fluxograma](https://github.com/whalyf/google-search-robot/blob/master/data-flow.jpg)

## Tecnologias Utilizadas
- Frontend: ReactJS, Vite
- Backend: NestJS
- Processador de Dados: Golang
- Banco de Dados: MongoDB

## Como Executar o Projeto

Para executar o projeto localmente, siga as instruções no README específico de cada componente (react-app, backend, go-robot)

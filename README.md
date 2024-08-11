# e-Commerce & Admin

![GitHub last commit](https://img.shields.io/github/last-commit/ortegavan/ecommerce-tcc) ![GitHub contributors](https://img.shields.io/github/contributors/ortegavan/ecommerce-tcc) ![Static Badge](https://img.shields.io/badge/code_style-prettier-ff69b4)

Este repositório contém os entregáveis para conclusão da Mentoria Angular Pro 2.0 de Andrew Rosário e Paolo Almeida.

Trata-se de um sistema de e-commerce composto por lista, busca e detalhes de produtos e uma tela de administração de usuários.

## Tecnologias

As aplicações foram criadas utilizando Angular 17, Angular Material e Nx. Trata-se de um monorepo contendo duas aplicações: o site de e-commerce (versão cliente) e um painel administrativo.

## Setup

Ao clonar o repositório, instale as dependências com o comando:

```bash
npm install
```

## Execução

Para executar o site de e-commerce (versão cliente), utilize o comando:

```bash
nx serve ecommerce
```

Para executar o painel administrativo, utilize o comando:

```bash
nx serve ecommerce-admin
```

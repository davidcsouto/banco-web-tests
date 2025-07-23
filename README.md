# banco-web-tests

Projeto de testes automatizados utilizando Cypress e JavaScript, desenvolvido como parte da Mentoria 2.0 do Júlio de Lima. O objetivo é demonstrar e aplicar conhecimentos adquiridos sobre automação de testes, organização de código e geração de relatórios.

## Objetivo

Este repositório tem como finalidade mostrar o que está sendo aprendido e desenvolvido durante a Mentoria 2.0 do Júlio de Lima, focando em automação de testes end-to-end para a aplicação **banco-web**.

## Componentes do Projeto

- **Cypress**: Framework principal para automação de testes.
- **Custom Commands**: Extensões do Cypress para reutilização de código e melhor organização dos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados dos testes.
- **package.json**: Gerenciamento de dependências e scripts do projeto.

## Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- npm (geralmente instalado junto com o Node.js)
- Clonar e rodar as aplicações:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/banco-web-tests.git
   cd banco-web-tests
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Certifique-se de que a API e a aplicação web estejam rodando localmente.

## Execução dos Testes

- Para rodar os testes em modo headless e gerar o relatório:
  ```sh
  npx cypress run
  ```

- Para abrir o Cypress em modo interativo:
  ```sh
  npx cypress open
  ```

- O relatório será gerado automaticamente na pasta `cypress/reports` após a execução dos testes.

## Estrutura dos Testes

- Os testes estão localizados na pasta `cypress/e2e`.
- Os Custom Commands estão definidos em `cypress/support/commands.js`.
- Os relatórios são configurados via `cypress.config.js` e `package.json`.

## Custom Commands

Os Custom Commands facilitam a reutilização de ações comuns nos testes, como login e transferência entre contas. Exemplos de comandos implementados:

- `cy.fazerLoginComCredenciaisValidas()` — Utiliza dos dados representados na fixture `credenciais.json` para preencher os campos com credenciais válidas.
- `cy.fazerLoginComCredenciaisInvalidas()` — Utiliza dos dados representados na fixture `credenciais.json` para preencher os campos com credenciais inválidas. 
- `cy.realizarTransferencia(contaOrigem, contaDestino, valor)` — Usa os dados recebidos no parâmetro realizar uma transferência.
- `cy.verificarMensagemNoToast(mensagem)` — Comando comum a testes que realizam asserções de mensagens exibidas via toast.
- `cy.selecionarOpcaoNaCombobox(labelDoCampo, opcao)` — Seleciona a conta para origem e destino dada a label (`conta-origem` e `conta-destino`) e em `opcao` o nome do cliente.

Você pode consultar todos os comandos personalizados em `cypress/support/commands/`.

## Documentação dos Testes

Os testes cobrem cenários como:

- Realização transferências com validação de regra de negócio
- Realização de login


---

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias.
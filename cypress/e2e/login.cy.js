describe('Login', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })
  it.only('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('apos-preencher-dados-válidos')
    cy.contains('Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('Entrar').click()

    cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')
  })
})
describe('Transferências', ()=> {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('Entrar').click()
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Maria Oliveira').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('João da Silva').click()

        cy.get('#valor').type('11')
        cy.contains('Transferir').click()

        cy.get('.toast').should('be.visible').and('have.text', 'Transferência realizada!')
    })
})
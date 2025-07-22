describe('Transferências', ()=> {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', 11)

        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar mais que 5 mil sem o token', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', 5000.01)

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})
/// <reference types="cypress" /> 

context('Tela Home.', () =>
{
    describe('01.A - Validar Acesso e Aceitação de Cookie.', () =>
    {
        it('01.A.01 - Acesso ao projeto.', () =>
        {
            cy.visitar()
        });

        it('01.A.02 - Aceitação de cookies.', () =>
        {
            cy.visitar()
            cy.aceitarCookies()
        });
    });

    describe('01.B - Validar Visualização do Menu Superior e Principal.', () =>
    {
        beforeEach(() =>
        {
            cy.visitarCookies()
        });

        it('01.B.01 - Menu superior.', () =>
        {
            cy.menuSuperior()
        });

        it('01.B.02 - Menu principal.', () =>
        {
            cy.menuPrincipal()
        });
    });

    // describe('03 - Validar Visualização dos Banners.', () =>
    // {
    //     beforeEach(() =>
    //     {
    //         cy.visitarCookies()
    //     });
    // });

    describe('01.D - Validar Visualização do Rodapé.', () =>
    {
        beforeEach(() =>
        {
            cy.visitarCookies()
        });

        it('01.D.01 - Opção Buscar no site.', () =>
        {
            cy.rodape()
        });
    });
});
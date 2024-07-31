/// <reference types="cypress" />

import loc from '../../support/locators'

context('Tela Parque São Jorge', () =>
{
    beforeEach(() =>
    {
        //cy.visitarCookies()
        cy.visit('https://www.corinthians.com.br/parquesaojorge')
    });

    describe('02.A - Validar Acesso e Aceitação de Cookie.', () =>
    {
        it('02.A.01 - Acesso ao projeto.', () =>
        {
            // cy.get(loc.menuPrincipal.localEsq)
            //     .eq(0)
            //     .click()
            //     cy.get('.ct-active > div > ul > li')
            //         .eq(20)
            //         .click()

            cy.waitUntil(() =>
                cy.get('.container > a > img')
                    .should('be.visible'))

            cy.get('.container > a > img')
                .should('be.visible')

            cy.url()
                .should('be.equal', 'https://www.corinthians.com.br/parquesaojorge')
        });

        it('02.A.01 - Visualização de Banner Promocional.', () => {
            cy.waitUntil(() =>
                cy.get('.modal-body > button')
                    .should('be.visible'))

            cy.get('.modal-body > button')
                .click()
        });

        it('02.A.02 - Preenchimento de Cadastro de Sócio', () =>
        {
            cy.get('.modal-body > button')
                .click()

            cy.get('.bg-dark > h2')
                .scrollIntoView()
                .should('be.visible')
                .and('have.css', 'color', 'rgb(248, 249, 250)')
                .and('contain', 'SEJA SÓCIO')
        });
    });
});
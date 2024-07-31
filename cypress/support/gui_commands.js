import loc from './locators.js'
import 'cypress-wait-until'
import 'cypress-iframe'

Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'));

Cypress.Commands.add('visitar',() =>
{
    

    cy.waitUntil( ()=>
        cy.get(loc.Home.team)
            .should('be.visible'))

    cy.get(loc.Home.team)
        .should('be.visible')
        cy.get(loc.Home.local)
            .should('have.prop', 'title', 'Corinthians')
});

Cypress.Commands.add('aceitarCookies',() =>
{
    cy.get(loc.Cookie.local)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', loc.Cookie.texto)

    cy.get(loc.Cookie.button)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(255, 0, 0)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('contain', 'Entendido')
        .click()

    cy.get(loc.Cookie.button)
        .should('not.be.exist')
});

Cypress.Commands.add('visitarCookies',() =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.waitUntil( ()=>
        cy.get(loc.Home.team)
            .should('be.visible'))

    cy.get(loc.Cookie.button)
        .click()
});

Cypress.Commands.add('menuSuperior',() =>
{
    cy.get(loc.menuSuperior.localMSup)
        .eq(0)
        .should('be.visible')
            cy.get(loc.menuSuperior.buscarImg)
                .should('be.visible')
                .and('have.css', 'color', 'rgb(173, 173, 173)')
            cy.get(loc.menuSuperior.Link)
                .should('contain', 'Buscar')

    cy.get(loc.menuSuperior.localMSup)
        .eq(1)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Fiel Torcedor')

    cy.get(loc.menuSuperior.localMSup)
        .eq(2)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Universo SCCP')

    cy.get(loc.menuSuperior.localMSup)
        .eq(3)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Chute Inicial')

    cy.get(loc.menuSuperior.localMSup)
        .eq(4)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Neo Química Arena')

    cy.get(loc.menuSuperior.localMSup)
        .eq(5)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Loucos por Pontos')

    cy.get(loc.menuSuperior.localRSociais)
        .eq(0)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'LinkedIn')

    cy.get(loc.menuSuperior.localRSociais)
        .eq(1)
        .should('be.visible')
        .invoke('attr', 'onclick')
        //Erro de código, nome errado da rede social
        .and('include', 'Instragram')

    cy.get(loc.menuSuperior.localRSociais)
        .eq(2)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Twitter')

    cy.get(loc.menuSuperior.localRSociais)
        .eq(3)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Facebook')

    cy.get(loc.menuSuperior.localRSociais)
        .eq(4)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'YouTube')

    cy.get(loc.menuSuperior.localRSociais)
        .eq(5)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Tiktok')

    cy.get(loc.menuSuperior.localMSup)
        .eq(5)
        .should('be.visible')
        .invoke('attr', 'onclick')
        .and('include', 'Loucos por Pontos')
});

Cypress.Commands.add('menuPrincipal',() =>
{
    cy.get(loc.menuPrincipal.localEsq)
        .eq(0)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'Clube')

    cy.get(loc.menuPrincipal.localEsq)
        .eq(1)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'Futebol')

    cy.get(loc.menuPrincipal.localEsq)
        .eq(2)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'MODALIDADES')

    cy.get(loc.menuPrincipal.localEsq)
        .eq(3)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'Ingressos/Planos')

    cy.get(loc.menuPrincipal.localDir)
        .eq(0)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'NOTÍCIAS')

        cy.get(loc.menuPrincipal.localDir)
        .eq(1)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'Negócios')

        cy.get(loc.menuPrincipal.localDir)
        .eq(2)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'IMPRENSA')

    cy.get(loc.menuPrincipal.localDir)
        .eq(3)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain', 'TRANSPARÊNCIA')
});

Cypress.Commands.add('rodape',() =>
{
    cy.get(loc.rodape.buscarSite)
        .scrollIntoView()
        .should('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('contain', 'BUSCA NO SITE')
        cy.get(loc.rodape.camposPesq)
            .should('be.visible')
            .and('have.attr', 'type', 'text')
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get(loc.rodape.btnOk)
            .should('be.visible')
            .and('have.attr', 'type', 'button')
            .and('have.css', 'background-color', 'rgb(51, 51, 51)')
            .and('have.css', 'color','rgb(255, 255, 255)')
            .and('contain', 'OK')
});
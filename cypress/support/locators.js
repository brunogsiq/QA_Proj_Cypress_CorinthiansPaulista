const locators= {
    Home: {
        team: '.ct-logo',
        local: '.ct-logo > img'
    },
    Cookie: {
        local: '#cookieNotice',
        texto: 'Nossa plataforma utiliza cookies',
        button: '#btn-cookie-notice-close',
    },
    menuSuperior: {
        buscar: '.li-buscar',
        buscarImg: '.li-buscar > a > img',
        Link: '.li-buscar > a',
        localMSup: '.col-sm-5.d-none > ul > li > a',
        localRSociais: '.li-redes-sociais > ul > li > a'
    },
    menuPrincipal: {
        localEsq: '.col-sm-5.menu-items-left > ul > li > a',
        localDir: '.col-sm-5.menu-items-right > ul > li > a'
    },
    rodape: {
        buscarSite: '.container > h1',
        camposPesq: '.footer-form > input',
        btnOk: '.footer-form > button'
    }
}
export default locators;
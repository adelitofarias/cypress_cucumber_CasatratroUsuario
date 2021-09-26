import CadastroUsuarioLocator from '../locators/cadastroUsuarioLocator'
const cadastroUsuarioLocator = new CadastroUsuarioLocator
const url = Cypress.config("baseUrl")

class CadastroUsuarioPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
      
    // Prencher nome usando dados da feature
    preencherNome(nome){
       cy.get(cadastroUsuarioLocator.campoFormNome()).type(nome);

    }
    
    //Preencher sobrenome usando dados dp json
    preencherSobrenome() {
        cy.fixture('userData').as('user').then(function() { 

            cy.get(cadastroUsuarioLocator.campoFormSobrenome()).type(this.user.sobreNome);
        }) 
    }

    //marcar sexo
    clicarSexo() {
        cy.get(cadastroUsuarioLocator.radioBox()).click()
    }

    //Selecionar o botão de cadastro
    clicarCadastrar(){
        cy.get(cadastroUsuarioLocator.botaoCadatrar()).click()
    }

    //Verificar se contém a string com a cidade escolhida corretamente
    visualizarUsuario() {
       
       cy.get(cadastroUsuarioLocator.notificacaoCadastro()).should('contain', 'Cadastrado')
       cy.get(cadastroUsuarioLocator.notificacaoNomeUsuario()).should('contain', 'João')
       cy.get(cadastroUsuarioLocator.notificacaoSobrenome()).should('contain', 'Silva')
       cy.get(cadastroUsuarioLocator.notificacaoSexo()).should('contain', 'Masc')
 
    }
    
}

export default CadastroUsuarioPage;


import CadastroUsuarioPage from '../pageobjects/cadastroUsuarioPage'
const cadastroUsuarioPage = new CadastroUsuarioPage

Given("que acesse a pagina de cadastro de novo usuario", () => {
    cadastroUsuarioPage.acessarSite();
})

And("preencher nome {string}", (nome) => {
    cadastroUsuarioPage.preencherNome(nome);
})

And("preencher sobrenome {string}", (sobrenome) => {
    cadastroUsuarioPage.preencherSobrenome(sobrenome);
})

And("marcar sexo", () => {
    cadastroUsuarioPage.clicarSexo();
})

When("acionar o botão de cadastro", () => {
    cadastroUsuarioPage.clicarCadastrar();
})

Then("será listado o novo usuário cadastrado no sistema", () => {
    cadastroUsuarioPage.visualizarUsuario();
})

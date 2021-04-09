class CadastroUsuarioLocator {

    campoFormNome = () => { return '#formNome' }

    campoFormSobrenome = () => {return '#formSobrenome'}

    radioBox = () => {return '#formSexoMasc'}

    botaoCadatrar = () => { return '#formCadastrar' }

    notificacaoCadastro = () => {return '#resultado > :nth-child(1)'}

    notificacaoNomeUsuario = () => {return '#descNome'}

    notificacaoSobrenome = () => {return '#descSobrenome'}

    notificacaoSexo = () => {return '#descSexo'}
}

export default CadastroUsuarioLocator;
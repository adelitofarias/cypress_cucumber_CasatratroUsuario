Feature: Cadastro de Usuaro

    Como usuario, desejo cadastrar novo usuario
    Para conferir se o sistema está em conformidade

    Scenario: Preencher dados básicos do usuário
        Given que acesse a pagina de cadastro de novo usuario
        And preencher nome "João"
        And preencher sobrenome Silva
        And marcar sexo
        When acionar o botão de cadastro
        Then será listado o novo usuário cadastrado no sistema

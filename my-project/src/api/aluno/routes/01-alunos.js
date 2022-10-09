module.exports = {
    routes: [
        {
            method: "POST",
            only: ["find"],
            path: "/novo-aluno",
            handler: "aluno.adicionar",
            config: {
                auth: false
            }
        },
        {
            method: "GET",
            only: ["find"],
            path: "/todos-alunos",
            handler: "aluno.todosAlunos",
            config: {
                auth: false
            }
        },
        {
            method: "GET",
            only: ["find"],
            path: "/aluno",
            handler: "aluno.getAluno",
            config: {
                auth: false
            }
        },
        {
            method: "GET",
            only: ["find"],
            path: "/aluno-plano",
            handler: "aluno.alunoPlano",
            config: {
                auth: false
            }
        },
        {
            method: "DELETE",
            only: ["find"],
            path: "/aluno",
            handler: "aluno.deleteAluno",
            config: {
                auth: false
            }
        }
        
        
        
    ]
}
module.exports = {
    routes: [
        {
            method: "POST",
            only: ["find"],
            path: "/novo-funcionario",
            handler: "funcionario.adicionar",
            config: {
                auth: false
            }
        },
        {
            method: "GET",
            only: ["find"],
            path: "/todos-funcionarios",
            handler: "funcionario.todosFuncionarios",
            config: {
                auth: false
            }
        },
        {
            method: "GET",
            only: ["find"],
            path: "/funcionario",
            handler: "funcionario.getFuncionario",
            config: {
                auth: false
            }
        },
        {
            method: "DELETE",
            only: ["find"],
            path: "/funcionario",
            handler: "funcionario.deleteFuncionario",
            config: {
                auth: false
            }
        }
        
        
        
    ]
}
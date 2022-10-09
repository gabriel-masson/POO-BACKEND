'use strict';

/**
 *  funcionario controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::funcionario.funcionario',({ strapi }) => ({
    async adicionar(ctx) {

        const request = ctx.request.body;
        try {
            const funcionario = await strapi.entityService.create('api::funcionario.funcionario', {
                data: {
                    ...request,
                },
            });


            ctx.body = funcionario;
            return funcionario;

        } catch (error) {
            console.log(error)
        }

    },

    async todosFuncionarios(ctx){
        try {
            const funcionarios= await strapi.entityService.findMany('api::funcionario.funcionario', {
                fields: "*"
            });


            ctx.body = funcionarios;
            return funcionarios;

        } catch (error) {
            console.log(error)
        }
    },

    async getFuncionario(ctx){
        const request = ctx.request.query;

        try {
            const funcionarios= await strapi.entityService.findOne('api::funcionario.funcionario',Number(request.id) ,{
                fields: "*"
            });


            ctx.body = funcionarios;
            return funcionarios;

        } catch (error) {
            console.log(error)
        }

    },
    async deleteFuncionario(ctx){
        const request = ctx.request.query;

        try {
            const funcionarios= await strapi.entityService.delete('api::funcionario.funcionario',Number(request.id));


            ctx.body = funcionarios;
            return funcionarios;

        } catch (error) {
            console.log(error)
        }

    },

}));

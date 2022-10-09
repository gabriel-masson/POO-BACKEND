'use strict';

/**
 *  aluno controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { default: axios } = require("axios");
module.exports = createCoreController('api::aluno.aluno',({ strapi }) => ({
    async adicionar(ctx) {

        const request = ctx.request.body;
        try {
            const aluno = await strapi.entityService.create('api::aluno.aluno', {
                data: {
                    ...request,
                },
            });


            ctx.body = aluno;
            return aluno;

        } catch (error) {
            console.log(error)
        }

    },

    async todosAlunos(ctx){
        try {
            const alunos= await strapi.entityService.findMany('api::aluno.aluno', {
                fields: "*"
            });


            ctx.body = alunos;
            return alunos;

        } catch (error) {
            console.log(error)
        }
    },

    async getAluno(ctx){
        const request = ctx.request.query;

        try {
            const alunos= await strapi.entityService.findOne('api::aluno.aluno',Number(request.id) ,{
                fields: "*"
            });


            ctx.body = alunos;
            return alunos;

        } catch (error) {
            console.log(error)
        }

    },
    async deleteAluno(ctx){
        const request = ctx.request.query;

        try {
            const alunos= await strapi.entityService.delete('api::aluno.aluno',Number(request.id));


            ctx.body = alunos;
            return alunos;

        } catch (error) {
            console.log(error)
        }

    },
    async alunoPlano(ctx){
        const request = ctx.request.query;

        try {
            const alunos= await strapi.entityService.findOne('api::aluno.aluno',Number(request.id_aluno) ,{
                fields: "*"
            });
            console.log(alunos)
            const plano = await axios.get(`http://localhost:1337/api/planos/${Number(request.id_plano)}`)
            console.log(plano.data.data)

            ctx.body = {
                alunos,
                plano: plano.data.data.attributes
            };
            return {alunos,plano:plano.data.attributes};

        } catch (error) {
            console.log(error)
        }
    }
}));

import prisma from '../../prisma/index.js';

class LogService {
    /**
     * Cria um novo registro logConsulta no banco de dados.
     *
     * @param {Object} dados - Dados da logConsulta a ser criado.
     * @returns {Promise<Object>} - logConsulta criada.
     * @throws {Error} - Se o usuário, profissional ou procedimento não for encontrado.
     */
    static async create(dados) {
        const userExistente = await prisma.user.findUnique({
            where: {
                id: dados.usuariosId,
            },
        });

        if (!userExistente) {
            throw new Error('Usuario não encontrado');
        }

        const profissionalExistente = await prisma.profissional.findUnique({
            where: {
                id: dados.profissionalId,
            },
        });

        if (!profissionalExistente) {
            throw new Error('Profissional não encontrado');
        }

        const procedimentoExistente = await prisma.procedimento.findUnique({
            where: {
                id: dados.procedimentoId,
            },
        });

        if (!procedimentoExistente) {
            throw new Error('Procedimento não encontrado');
        }

        return prisma.logConsulta.create({
            data: dados,
        });
    }
}

export default LogService;

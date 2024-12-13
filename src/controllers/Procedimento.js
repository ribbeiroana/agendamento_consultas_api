import ProcedimentoService from '../service/Procedimento';

class ProcedimentoController {
    async create(req, res) {
        try {
            // Obtém os dados da requisição
            const dados = req.body;

            // Verificar se 'usuarioId' foi passado corretamente
            if (!dados.profissionalId) {
                return res.status(400).json({ error: 'profissionalId é obrigatório' });
            }
            // Passa os dados para o serviço de criação do profissional
            const novoProfissional = await ProcedimentoService.create(dados);

            // Retorna o novo profissional criado
            return res.status(201).json(novoProfissional);
        } catch (e) {
            // Se houver erro, retorna o erro
            return res.status(400).json({ error: e.message });
        }
    }

    async index(req, res) {
        try {
            const procedimentos = await ProcedimentoService.findAll();
            return res.json(procedimentos);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const procedimento = await ProcedimentoService.findById(id);
            if (!procedimento) {
                return res.status(404).json({ error: 'Procedimento não encontrado' });
            }
            return res.json(procedimento);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const ProcedimentoAtualizado = await ProcedimentoService.update(id, dados);
            return res.json(ProcedimentoAtualizado);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await ProcedimentoService.delete(id);
            return res.status(204).send();
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}

export default new ProcedimentoController();
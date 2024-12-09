import User from '../models/user';

class UserController {

    async create(req, res) {
        try {
            const dados = req.body;
            const novoUser = await User.create(dados);
            res.json(novoUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
    async index(req, res) {
        try {
            const users = await User.findAll({ attributes: ['id', 'nome', 'cpf', 'localizacao'] });
            return res.json(users);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'User não encontrado' });
            }
            const { nome, cpf, localizacao } = user;
            return res.json({ nome, cpf, localizacao });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

}
export default new UserController();

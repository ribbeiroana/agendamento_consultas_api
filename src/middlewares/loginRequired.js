import jwt from 'jsonwebtoken';
import User from '../models/user';

export default async(req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required'],
        });
    }

    const [token] = authorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, cpf } = dados;

        const user = await User.findOne({
            where: {
                id,
                cpf,
            },
        });

        if (!user) {
            return res.status(401).json({
                errors: ['Usuário inválido'],
            });
        }
        req.userId = id;
        req.userCpf = cpf;
        return next();
    } catch (e) {
        return res.status(401).json({
            errors: ['Token expirado ou inválido.'],
        });
    }
};

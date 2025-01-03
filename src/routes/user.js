import { Router } from 'express';
import User from '../controllers/User';

const router = new Router();

router.get('/', User.index);
router.get('/:id', User.show);
router.post('/', User.create);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

export default router;

/*
controllers
index - lista os usuarios - GET
store/create - cria um novo usuario - POST
delete - paga um usuario - DELETE
show - mostra um usuario - GET
update - atualiza um usuario - PATCH OU PUT
*/

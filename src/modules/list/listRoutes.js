import {Router} from 'express';

import { list } from './listControllers';

const router = Router();

router.post('/', list);

export default router;

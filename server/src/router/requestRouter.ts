import express from 'express';
import * as controller from  '../controller/requestController'
const requestrouter = express.Router();

 requestrouter.post('/',controller.addrequst)
 requestrouter.get('/',controller.rectriveRequestAll)
 requestrouter.put('/:id',controller.Updaterequest)
 requestrouter.get('/:id',controller.requestFindByid)
requestrouter.delete('/:id',controller.deleteTodo)

export default requestrouter
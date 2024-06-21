import { Request, Response, NextFunction } from 'express';
import { asyerrohander } from '../utile/error';
import { makerespon } from '../utile/makerespon';
import Requests, {IRequest} from '../Modul/Request'
import * as service from '../service/requestservice'

export const addrequst = asyerrohander(async (req: Request, res: Response, next: NextFunction) => {
     const Addrequest: IRequest = req.body;
    // const Addrequest: IRequest = {
    //     ...req.body,
    //     createdOn: new Date(req.body.createdOn), // Convert to Date
    // };
    
    const requestAdd = await service.addRequestService(Addrequest);
    return makerespon({
        res,
        data: requestAdd,
        message: "Add To-do successfully",
    });
});

export const rectriveRequestAll = asyerrohander(async (req: Request, res: Response, next: NextFunction)=>{

    const rectiveRequest = await service.AllRequest();
    return makerespon({
        res,
        data: rectiveRequest,
        message: "all To-do successfully",
    });

})


export const Updaterequest = asyerrohander(async (req: Request, res: Response, next: NextFunction) => {
   
      const updateRequest = await service.uptadeRequestServices(req.params.id, req.body);
      return makerespon({ res, data: updateRequest, message: 'Request updated successfully' });
   
  });


export const requestFindByid = asyerrohander(async (req: Request, res: Response, next: NextFunction) => {
   
    const fondrequestById = await service.findByIDservices(req.params.id);
    return makerespon({ res, data: fondrequestById, message: 'Request updated successfully' });
    
   
})  



export const deleteTodo = asyerrohander(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const removedTodo = await service.removeTodobyid(req.params.id);
    return makerespon({
      res,
      data: removedTodo,
      message: 'TODO removed successfully',
    });
  } catch (error) {
    next(error); 
  }
});










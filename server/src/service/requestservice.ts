import { IRequest } from "../Modul/Request"
import createError, { HttpError } from 'http-errors';
import * as repositer from '../repositery/requestreposatary'


export const addRequestService =async  (data :IRequest): Promise<any>=>{

    try {
        const createRequestsuessfull = await repositer.addrequstRepositery({
          ...data
        });
    
        if (!createRequestsuessfull) {
          throw  createError(400, 'Failed to create createRequest') as HttpError;
        }
    
        return createRequestsuessfull;
      } catch (error) {
        console.error('Error in addcreateRequest Services:', error);
        throw  createError(500, 'Internal Server Error') as HttpError;
      }
}
export const AllRequest = async (): Promise<IRequest[]> => {
    try {
      const allRequst = await repositer.AllTodoservice();
      return allRequst;
    } catch (error) {
      console.error('Error in AllRequest:', error);
      throw new Error('Failed to fetch todos'); 
    }
  };


  export const uptadeRequestServices = async (id: string, payload: Partial<IRequest>): Promise<IRequest | null> => {
    try {
      const udaterequest = await repositer.updateRepositey({ _id: id }, payload);
      return udaterequest;
    } catch (error) {
      console.error('Error in updateTodoService:', error);
      throw new Error('Failed to update TODO');
    }
  };

  export const findByIDservices = async(id:string):Promise<IRequest | null>=>{

     const datafind = await repositer.findRequstById(id)
     if(!datafind){
        throw  createError(400, 'Failed to find createRequest') as HttpError;
     }
     return datafind
  }

  export const removeTodobyid = async (id: string): Promise<IRequest | null> => {
    try {
      const deletedTodo = await repositer.removeReposutery({ _id: id });
      return deletedTodo;
    } catch (error) {
      console.error('Error in removeTodobyid:', error);
      throw error; // Re-throw error for centralized error handling
    }
  };
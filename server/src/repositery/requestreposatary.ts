import Requests,{IRequest} from "../Modul/Request"
export const addrequstRepositery =  async(Data: Partial<IRequest>): Promise<IRequest>=>{

    
        const newRequst = new Requests(Data as IRequest);
        const svaerequst = await newRequst.save();
        return svaerequst;
     
}

export const AllTodoservice = async (): Promise<IRequest[]> => {
    try {
        const Allrequest = await Requests.find();
        return Allrequest;
    } catch (error) {
        throw new Error('Error fetching todos: ' + error);
    }
};


export const updateRepositey = async (filters: any, data: Partial<IRequest>): Promise<IRequest | null> => {
    try {
      const updateRequsrt = await Requests.findByIdAndUpdate(filters._id, data, { new: true });
      if (!updateRequsrt) {
        console.warn('No TODO found with filters:', filters);
        return null;
      }
      return updateRequsrt;
    } catch (error) {
      console.error('Error in updateTodoRepository:', error);
      throw error;
    }
  };
  export const removeReposutery = async (filter: any): Promise<IRequest | null> => {
    try {
      const todoDelete = await Requests.findByIdAndDelete(filter);
      return todoDelete;
    } catch (error) {
      console.error('Error in removeReposutery:', error);
      throw error; // Re-throw error for centralized error handling
    }
  };


  export const findRequstById = async (filter: string): Promise<IRequest | null> => {
    try {
      const todoFind = await Requests.findOne({ _id: filter });
      if (!todoFind) {
        console.log('No TODO found.');
        return null; // Return null if todo not found
      }
      return todoFind; // Return found todo
    } catch (error) {
      console.error('Error in findToDoById:', error);
      throw error; // Re-throw error for centralized error handling
    }
  };
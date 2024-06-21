import axios from "axios"


export interface IRequset{
    _id : string
    requestId: string;
    createdOn: string;
    location: string;
    service: string;
    status: string;
    priority:  string;
    department: string;
    requestedBy: string;
    assignedTo?: string;
}


export interface IADDRequest {
    createdOn: string;
    location: string;
    service: string;
    status: string;
    priority: string;
    department: string;
    requestedBy: string;
    assignedTo: string;
  }
export const alldatarective = async ()=>{

    try {
        const response = await axios.get<{ message: string, data: IRequset[] }>('http://localhost:5004/kl/request');
        return response.data.data; // Return the data property which is an array of todos
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error: " + error.message);
        } else {
            console.error("Unexpected error: ", error);
        }
        return []; // Return an empty array in case of an error
    }

     
}
export const deleteRequest = async (id: string): Promise<boolean> => {
    try {
      const response = await axios.delete(`http://localhost:5004/kl/request/${id}`);
      return response.status === 200;

    } catch (error) {
      console.error("Error deleting TODO:", error);
      throw error;
    }
  };

  export const findbyidrequest = async(id: any) : Promise<IRequset>=>{

    try {
        const response = await axios.get<{ data: IRequset}>(`http://localhost:5004/kl/request/${id}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching TODO:", error);
        throw error;
      }
  }

// export const alldatarective = async (): Promise<Todo[]> => {
//     try {
//         const response = await axios.get<Todo[]>('http://localhost:3000/kl/newdo');
//         console.log(response.data)
//         return response.data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.error("Error: " + error.message);
//         } else {
//             console.error("Unexpected error: ", error);
//         }
//         return []; // Return an empty array in case of an error
//     }
// }

// export const alldatarective = async (): Promise<Todo[]> => {
//     try {
//         const response = await axios.get<{ message: string, data: Todo[] }>('http://localhost:3000/kl/newdo');
//         return response.data.data; // Return the data property which is an array of todos
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.error("Error: " + error.message);
//         } else {
//             console.error("Unexpected error: ", error);
//         }
//         return []; // Return an empty array in case of an error
//     }
// }

export const Addrequest = async (newTodo: IADDRequest): Promise<IADDRequest> => {
    try {
        const response = await axios.post<{ message: string, data: IADDRequest }>('http://localhost:5004/kl/request/', newTodo);
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error: " + error.message);
        } else {
            console.error("Unexpected error: ", error);
        }
        throw error; // Rethrow the error so it can be handled by the calling function
    }
}


export const updatetodo = async(id:string,newTodo: IRequset)=>{

     try{

        const responsde = await axios.put<{ message: string, data: IRequset }>(`http://localhost:5004/kl/request/${id}`,newTodo)
        return responsde.data.data;

     }catch(error){
        if (axios.isAxiosError(error)) {
            console.error("Error: " + error.message);
        } else {
            console.error("Unexpected error: ", error);
        }
        throw error; // Rethrow the error so it can be handled by the calling function
     }
}
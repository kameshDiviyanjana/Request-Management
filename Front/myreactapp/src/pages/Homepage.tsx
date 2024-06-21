import React, { useEffect, useState } from 'react'
import { IRequset,alldatarective, deleteRequest } from '../componet/api';
import Sweetalert2 from "sweetalert2";
import { Link } from 'react-router-dom';
import anithiomloder from '../assets/icons8-loading.gif'


interface Props{

}

const Homepage :React.FC<Props> = (props : Props) => {

  const [requestdata,setrequestdata] = useState<IRequset[]>([])

 
  const alldatatRequest = async () => {
    const respons = await alldatarective();
    setrequestdata(respons);
};

useEffect(() => {
  alldatatRequest();
}, []);

console.log(requestdata)
//      const [title,settitle] = useState('')
//      const [description,setdescription] = useState('')
//      const [completed,setcompleted] = useState(false)


const deleterequest = async(id : string)=>{
   
  Sweetalert2.fire({
    title: 'Are you sure?',
    text: "You want be able to delete this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then(async (result) => {

    if(result.isConfirmed){
        try {
            const response = await deleteRequest(id)
            if (response) {
                Sweetalert2.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                alldatatRequest()
            } else {
                Sweetalert2.fire(
                    'Not Deleted!',
                    'Something want wrong',
                    'error'
                )
             
            }
           } catch (error) {
           console.error("Error fetching Todo:", error);
         }
    }
})
  
}

const navigateupdate = (id :string)=>{
  // console.log("click")
  // return <Link to = 'update'></Link>
 

 // navigate(`update`)
}

 const [title, setTitle] = useState('');




return (
<div className=' bg-gray-200 mb-6 '>
  
<div className=' lg:ml-20 lg:mr-20 max-lg:ml-4 max-lg:mr-4  '>
    {/* <h2>Homepage</h2>
    <input
      type='text'
      placeholder='Title'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <textarea
      placeholder='Description'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <label>
      Completed:
      <input
        type='checkbox'
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
    </label>
    <button onClick={handleAddTodo}>Add Todo</button> */}
    <div className=' w-full  h-full lg:flex  gap-3 border-gray-300 outline-none rounded-xl '>
    
      <div className='flex justify-between items-center py-1 px-2  border-2 border-collapse border-gray-300 rounded-xl  bg-white mt-3'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

      <input
      type='text'
      placeholder='Title'
      value={title}
      className='outline-none '
    
    />
      </div>
      <div className=' flex justify-around' >
      <div className=' '>
      <div className="flex mt-4">
    <div className="relative">
      <input type="date" value="2024-02-01" className="rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
      <span className="absolute right-2 top-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </span>
      </div>
    </div>

      </div>
      <div className=' mt-4'>
      <div className="relative ml-4">
      <select className="rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
        <option value="">Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      
    </div>
   

     
      </div>
      </div>
           <div className=' flex mt-6 justify-end  w-full gap-2'>
            <div className='bg-black rounded-lg  w-9 py-2 px-2  scalerclas'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-5  text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
</svg>
            </div>
   <div className='bg-black rounded-lg  w-9 py-2 px-2 scalerclas'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-5  text-white ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
   </div>


           </div>
      
    
    </div>
    <div className=' max-lg:overflow-y-auto mt-5   '>
    <table className="min-w-full divide-y  divide-gray-200    ">
  <thead className=" bg-yellow-600 ">
    <tr className=' '>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created on</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested by</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned to</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
      <th></th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    
      {
        Array.isArray(requestdata) && requestdata.length > 0 ?(
          requestdata.map((data)=>(
            <>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
             <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.requestId}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.createdOn}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.location}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.service}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200  "><p className={`${data.status === "New" ? ' New' : data.status === "Escalated" ? 'Escalated' :data.status === "On Hold"? 'onholde' :data.status === "In Progress" ? ' InProgress' : ''}`}>{data.status}</p></td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.department}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.requestedBy}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200">{data.assignedTo}</td>
      <td className="px-6 py-4 whitespace-nowrap border-2 border-gray-200"><p className={`${data.priority === "Low" ? 'low':data.priority === "Medium" ? 'mediume': data.priority === "High" ? 'high ':'' }`}>{data.priority}</p></td>
      <td className='   flex gap-5 justify-center py-2 px-2'>
        <button> <Link to = {`/update/${data._id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 hover:text-orange-400 transition ease-in-out delay-150 duration-100  hover:scale-150" onClick={()=>{
          navigateupdate(data._id)
        }}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg></Link> 
</button> <button> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 hover:text-red-500  transition ease-in-out delay-150 duration-100  hover:scale-150 " onClick={()=>{
  deleterequest(data._id)
}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button></td>
      </tr>
            </>
          ))
        ):(
          <div className=' lg:flex  items-center flex-col justify-center mt-12 w-full absolute '>
                   <img src={anithiomloder} alt='image' className='  relative'/>
          </div>
         
        )
      }
    

 
  
  </tbody>
</table>
    </div>
   
  </div>
</div>
);
}

export default Homepage
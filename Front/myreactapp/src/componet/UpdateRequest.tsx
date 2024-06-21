


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { IRequset, findbyidrequest } from './api';

// // Define interface for route parameters
// interface RouteParams {
//   pid: string; // Assuming 'pid' is a parameter you expect to receive
// }

// const UpdateRequest: React.FC = () => {
//   //const { pid } = useParams<{ id: any }>(); // Using useParams with specified type
//   const { id } = useParams<{ id?: any }>();
//   const [finddatabuids,setfinddatabuids] = useState<IRequset[]>([])
  
//    const [dates,setdates] = useState('2024-05-08')
//    const [requestId, setrequestId] = useState<string>('');
//    const [createdOn, setcreatedOn] = useState<string>('');
//    const [location, setlocation] = useState<string>('');
//    const [service, setservice] = useState<string>('');
//    const [status, setstatus] = useState<string>('');
//    const [priority, setpriority] = useState<string>('');
//    const [department, setdepartmentd] = useState<string>('');
//    const [requestedBy, setrequestedBy] = useState<string>('');
//    const [assignedTo, setassignedTo] = useState<string>('');

//    useEffect(() => {
//     if (id) {
//         findData(id);
//     }
// }, [id]); 

//   const findData = async (ids:any)=>{
//     // const findrequest = await findbyidrequest(id).then((res)=>{

          
//     // })
//     try {
//         const response = await findbyidrequest(ids); 
//         const data = response; 
//         console.log(response)
//        // setdates(data.dates);
//         setrequestId(data.requestId);
//         setcreatedOn(data.createdOn);
//         setlocation(data.location);
//         setservice(response.service);
//         setstatus(data.status);
//         setpriority(data.priority);
//         setdepartmentd(data.department);
//         setrequestedBy(data.requestedBy);
//         setassignedTo(data.assignedTo || '');
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
   
//   }
  
//    console.log(dates)
//    console.log(service)
//   return (
//     <div className=' w-full h-full  '>
//       {/* Example usage of 'pid' */}
      
//       <div >
//       <div className="max-w-4xl mx-auto py-8 px-4">
//     <h2 className="text-2xl font-bold mb-6 text-center">Service Request Form Update</h2>
//     <form id="serviceRequestForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className=' grid grid-cols-2 gap-6'>
//         <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Created On </label>
//         <input type="date" id="createdOn" name="createdOn" required value={createdOn}
//                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  onChange={(e)=>{
//                 setdates(e.target.value)
//                }}/>
//       </div>

//       <div className="mb-4">
//         <label  className="block text-gray-700 text-sm font-bold mb-2">Location </label>
//         <select id="location" name="location" required value={location}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//           <option value="">Select Location</option>
//           <option value="location1">Location 1</option>
//           <option value="location2">Location 2</option>
//           <option value="location3">Location 3</option>
         
//         </select>
//       </div>
//         </div>
     

//       <div className="mb-4">
//         <label  className="block text-gray-700 text-sm font-bold mb-2">Service </label>
//         <input type="text" id="service" name="service" placeholder="Enter Service" required value={requestedBy}
//                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//       </div>

//       <div className="mb-4">
//         <label  className="block text-gray-700 text-sm font-bold mb-2">Status </label>
//         <select id="status" name="status" required value={status} 
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//           <option value="">Select Status</option>
//           <option value="pending">Pending</option>
//           <option value="inProgress">In Progress</option>
//           <option value="completed">Completed</option>
        
//         </select>
//       </div>

     
//       <div className=' grid grid-cols-2 gap-6'>

//       <div className="mb-4">
//         <label  className="block text-gray-700 text-sm font-bold mb-2">Priority </label>
//         <select id="priority" name="priority" required  value={assignedTo}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//           <option value="">Select Priority</option>
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
        
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Department </label>
//         <select id="department" name="department" required value={department}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//           <option value="">Select Department</option>
//           <option value="dept1">Department 1</option>
//           <option value="dept2">Department 2</option>
//           <option value="dept3">Department 3</option>
       
//         </select>
//       </div>

//       </div>
     

//       <div className="mb-4">
//         <label  className="block text-gray-700 text-sm font-bold mb-2">Requested By </label>
//         <input type="text" id="requestedBy" name="requestedBy" placeholder="Enter Requested By" required value={department}
//                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Assigned To </label> 
//         <input type="text" id="assignedTo" name="assignedTo" placeholder="Enter Assigned To" value={assignedTo}
//                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//       </div>

//       <div className="flex  items-center justify-end  ml-4">
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded focus:outline-none focus:shadow-outline">
//           Submit
//         </button>
//       </div>
//     </form>
//   </div> 
//       </div>
//     </div>
//   );
// };

// export default UpdateRequest;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { IRequset, findbyidrequest, updatetodo } from './api';
// import Sweetalert2 from "sweetalert2";
// import { useNavigate  } from 'react-router-dom';

// const UpdateRequest: React.FC = () => {
//   const { id } = useParams<{id: any}>();
//   const [finddatabuids, setfinddatabuids] = useState<IRequset[]>([]);
//   const next = useNavigate();
  
//   const [dates, setdates] = useState<string>('2024-05-08');
//   const [requestId, setrequestId] = useState<string>('');
//   const [createdOn, setcreatedOn] = useState<string>('');
//   const [location, setlocation] = useState<string>('');
//   const [service, setservice] = useState<string>('');
//   const [status, setstatus] = useState<string>('');
//   const [priority, setpriority] = useState<string>('');
//   const [department, setdepartmentd] = useState<string>('');
//   const [requestedBy, setrequestedBy] = useState<string>('');
//   const [assignedTo, setassignedTo] = useState<string>('');

//   useEffect(() => {
//     if (id) {
//         findData(id);
//     }
//   }, [id]);

//   const findData = async (ids: string) => {
//     try {
//       const response = await findbyidrequest(ids); 
//       const data = response; 
//       console.log(response);
//       setdates(data.createdOn);
//       setrequestId(data.requestId);
//       setcreatedOn( formatDate(data.createdOn));
//       setlocation(data.location);
//       setservice(data.service);
//       setstatus(data.status);
//       setpriority(data.priority);
//       setdepartmentd(data.department);
//       setrequestedBy(data.requestedBy);
//       setassignedTo(data.assignedTo || '');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
//   const formatDate = (dateString: string) => {
//     return dateString.split('T')[0];
//   }

//    const update = async()=>{
   
//   const updatedata  : IRequset={
//       requestId,
//       createdOn,
//       location,
//       service,
//       status,
//       priority,
//       department,
//       requestedBy,
//       assignedTo,
//       _id: id
//   }
//   console.log(updatedata)
//      const updatedatas = await updatetodo(id,updatedata)
//      try{
//         if (updatedatas) {
//             Sweetalert2.fire({
//                 toast: true,
//                 position: 'top-end',
//                 showConfirmButton: false,
//                 timer: 3000,
//                 icon: 'success',
//                 title : 'Congaulatio you tasck completed'
//             })
//             next('/')
            
//             }else{
//                 alert("not uodate")
//             }

//      }catch(error){
//            console.log(error)
//      }
    
        
//    }
 
//    console.log(service)
//   return (
//     <div className='w-full h-full '>
//       <div className="max-w-4xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">Service Request Form Update</h2>
//         <form id="serviceRequestForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className='grid grid-cols-2 gap-6'>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Created On </label>
//               <input type="date" id="createdOn" name="createdOn" required value={createdOn}
//                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                      onChange={(e) => setcreatedOn(e.target.value)} />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Location </label>
//               <select id="location" name="location" required value={location}
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                       onChange={(e) => setlocation(e.target.value)}>
//                 <option value="">Select Location</option>
//                 <option value="1th floor">1th floor</option>
//                 <option value="2th floor">2th floor</option>
//                 <option value="3th floor">3th floor</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Service </label>
//             <input type="text" id="service" name="service" placeholder="Enter Service" required value={service}
//                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                    onChange={(e) => setservice(e.target.value)} />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Status </label>
//             <select id="status" name="status" required value={status} 
//                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                     onChange={(e) => setstatus(e.target.value)}>
//               <option value="">Select Status</option>
//               <option value="New">New</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Escalated">Escalated</option>
//               <option value="On Hold">On Hold</option>
//             </select>
//           </div>

//           <div className='grid grid-cols-2 gap-6'>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Priority </label>
//               <select id="priority" name="priority" required value={priority}
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                       onChange={(e) => setpriority(e.target.value)}>
//                 <option value="">Select Priority</option>
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="High">High</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Department </label>
//               <select id="department" name="department" required value={department}
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                       onChange={(e) => setdepartmentd(e.target.value)}>
//                 <option value="">Select Department</option>
//                 <option value="it">Department 1</option>
//                 <option value="Facilities">Facilities</option>
//                 <option value="dept3">Department 3</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Requested By </label>
//             <input type="text" id="requestedBy" name="requestedBy" placeholder="Enter Requested By" required value={requestedBy}
//                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                    onChange={(e) => setrequestedBy(e.target.value)} />
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Assigned To </label> 
//             <input type="text" id="assignedTo" name="assignedTo" placeholder="Enter Assigned To" value={assignedTo}
//                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                    onChange={(e) => setassignedTo(e.target.value)} />
//           </div>

//           <div className="flex items-center justify-end ml-4">
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded focus:outline-none focus:shadow-outline" onClick={()=>{
//                 update()
//             }}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div> 
//     </div>
//   );
// };

// export default UpdateRequest;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IRequset, findbyidrequest, updatetodo } from './api';
import Sweetalert2 from "sweetalert2";

const UpdateRequest: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  
  const [requestData, setRequestData] = useState<IRequset>({
    requestId: '',
    createdOn: '',
    location: '',
    service: '',
    status: '',
    priority: '',
    department: '',
    requestedBy: '',
    assignedTo: '',
    _id: ''
  });

  useEffect(() => {
    if (id) {
      fetchRequestData(id);
    }
  }, [id]);

  const fetchRequestData = async (requestId: string) => {
    try {
      const response = await findbyidrequest(requestId);
      setRequestData({
        ...response,
        createdOn: formatDate(response.createdOn)
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const formatDate = (dateString: string) => {
    return dateString.split('T')[0];
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRequestData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedData = await updatetodo(id!, requestData);
      if (updatedData) {
        Sweetalert2.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
          title: 'Congratulations, your task is completed'
        });
        navigate('/');
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full h-full'>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Service Request Form Update</h2>
        <form id="serviceRequestForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-6'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Created On </label>
              <input type="date" id="createdOn" name="createdOn" required value={requestData.createdOn}
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                     onChange={handleInputChange} />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Location </label>
              <select id="location" name="location" required value={requestData.location}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      onChange={handleInputChange}>
                <option value="">Select Location</option>
                <option value="1th floor">1th floor</option>
                <option value="2th floor">2th floor</option>
                <option value="3th floor">3th floor</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Service </label>
            <input type="text" id="service" name="service" placeholder="Enter Service" required value={requestData.service}
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   onChange={handleInputChange} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Status </label>
            <select id="status" name="status" required value={requestData.status} 
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    onChange={handleInputChange}>
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Escalated">Escalated</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Priority </label>
              <select id="priority" name="priority" required value={requestData.priority}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      onChange={handleInputChange}>
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Department </label>
              <select id="department" name="department" required value={requestData.department}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      onChange={handleInputChange}>
             
                <option value="it">IT</option>
                <option value="Facilities">Facilities</option>
                <option value="Marketing">Marketing </option>
                <option value="Production">Production </option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Requested By </label>
            <input type="text" id="requestedBy" name="requestedBy" placeholder="Enter Requested By" required value={requestData.requestedBy}
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   onChange={handleInputChange} />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Assigned To </label> 
            <input type="text" id="assignedTo" name="assignedTo" placeholder="Enter Assigned To" value={requestData.assignedTo}
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   onChange={handleInputChange} />
          </div>

          <div className="flex items-center justify-end ml-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div> 
    </div>
  );
};

export default UpdateRequest;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { IRequset, findbyidrequest, updatetodo } from './api';
// import Sweetalert2 from "sweetalert2";

// const UpdateRequest: React.FC = () => {
//   const { id } = useParams<{id: string}>();
//   const navigate = useNavigate();
  
//   const [requestData, setRequestData] = useState<IRequset>({
//     requestId: '',
//     createdOn: '',
//     location: '',
//     service: '',
//     status: '',
//     priority: '',
//     department: '',
//     requestedBy: '',
//     assignedTo: '',
//     _id: ''
//   });

//   useEffect(() => {
//     if (id) {
//       fetchRequestData(id);
//     }
//   }, [id]);

//   const fetchRequestData = async (requestId: string) => {
//     try {
//       const response = await findbyidrequest(requestId);
//       setRequestData({
//         ...response,
//         createdOn: formatDate(response.createdOn)
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   const formatDate = (dateString: string) => {
//     return dateString.split('T')[0];
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setRequestData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const updatedData = await updatetodo(id!, requestData);
//       if (updatedData) {
//         Sweetalert2.fire({
//           toast: true,
//           position: 'top-end',
//           showConfirmButton: false,
//           timer: 3000,
//           icon: 'success',
//           title: 'Congratulations, your task is completed'
//         });
//         navigate('/');
//       } else {
//         alert("Update failed");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className='w-full h-full'>
//       <div className="max-w-4xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">Service Request Form Update</h2>
//         <form id="serviceRequestForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//           <div className='grid grid-cols-2 gap-6'>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Created On </label>
//               <input type="date" id="createdOn" name="createdOn" required value={requestData.createdOn}
//                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                      onChange={handleInputChange} />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Location </label>
//               <select id="location" name="location" required value={requestData.location}
//                       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                       onChange={handleInputChange}>
//                 <option value="">Select Location</option>
//                 <option value="1th floor">1th floor</option>
//                 <option value="2th floor">2th floor</option>
//                 <option value="3th floor">3th floor</option>
//               </select>
//             </div>
//           </div>

//           {/* Continue with the rest of your form fields, using requestData and handleInputChange */}

//           <div className="flex items-center justify-end ml-4">
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded focus:outline-none focus:shadow-outline">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div> 
//     </div>
//   );
// };

// export default UpdateRequest;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { IRequset, findbyidrequest, updatetodo } from './api';
// import Sweetalert2 from 'sweetalert2';

// const UpdateRequest: React.FC = () => {
//   const { id } = useParams<{ id: any }>();
//  // const history = useHistory();

//   const [dates, setDates] = useState<string>('2024-05-08');
//   const [requestId, setRequestId] = useState<string>('');
//   const [createdOn, setCreatedOn] = useState<string>('');
//   const [location, setLocation] = useState<string>('');
//   const [service, setService] = useState<string>('');
//   const [status, setStatus] = useState<string>('');
//   const [priority, setPriority] = useState<string>('');
//   const [department, setDepartment] = useState<string>('');
//   const [requestedBy, setRequestedBy] = useState<string>('');
//   const [assignedTo, setAssignedTo] = useState<string>('');

//   useEffect(() => {
//     if (id) {
//       findData(id);
//     }
//   }, [id]);

//   const findData = async (ids: string) => {
//     try {
//       const response = await findbyidrequest(ids);
//       const data = response;
//       setDates(data.createdOn);
//       setRequestId(data.requestId);
//       setCreatedOn(formatDate(data.createdOn));
//       setLocation(data.location);
//       setService(data.service);
//       setStatus(data.status);
//       setPriority(data.priority);
//       setDepartment(data.department);
//       setRequestedBy(data.requestedBy);
//       setAssignedTo(data.assignedTo || '');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const formatDate = (dateString: string) => {
//     return dateString.split('T')[0];
//   };

//   const update = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission
//     const updatedData: IRequset = {
//       _id: id,
//       requestId,
//       createdOn,
//       location,
//       service,
//       status,
//       priority,
//       department,
//       requestedBy,
//       assignedTo,
//     };

//     try {
//       const updatedResponse = await updatetodo(id, updatedData);
//       if (updatedResponse) {
//         Sweetalert2.fire({
//           toast: true,
//           position: 'top-end',
//           showConfirmButton: false,
//           timer: 3000,
//           icon: 'success',
//           title: 'Congratulations, task completed',
//         });
//         //history.push('/'); // Redirect to home or another page after successful update
//       }
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   return (
//     <div className='w-full h-full'>
//       <div className="max-w-4xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">Service Request Form Update</h2>
//         <form id="serviceRequestForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  >
//           <div className='grid grid-cols-2 gap-6'>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Created On</label>
//               <input
//                 type="date"
//                 id="createdOn"
//                 name="createdOn"
//                 required
//                 value={createdOn}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => setCreatedOn(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
//               <select
//                 id="location"
//                 name="location"
//                 required
//                 value={location}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => setLocation(e.target.value)}
//               >
//                 <option value="">Select Location</option>
//                 <option value="1th floor">1th floor</option>
//                 <option value="2th floor">2th floor</option>
//                 <option value="3th floor">3th floor</option>
//               </select>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Service</label>
//             <input
//               type="text"
//               id="service"
//               name="service"
//               placeholder="Enter Service"
//               required
//               value={service}
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setService(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//             <select
//               id="status"
//               name="status"
//               required
//               value={status}
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <option value="">Select Status</option>
//               <option value="New">New</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Escalated">Escalated</option>
//               <option value="On Hold">On Hold</option>
//             </select>
//           </div>
//           <div className='grid grid-cols-2 gap-6'>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
//               <select
//                 id="priority"
//                 name="priority"
//                 required
//                 value={priority}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => setPriority(e.target.value)}
//               >
//                 <option value="">Select Priority</option>
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="High">High</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Department</label>
//               <select
//                 id="department"
//                 name="department"
//                 required
//                 value={department}
//                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => setDepartment(e.target.value)}
//               >
//                 <option value="">Select Department</option>
//                 <option value="it">Department 1</option>
//                 <option value="Facilities">Facilities</option>
//                 <option value="dept3">Department 3</option>
//               </select>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Requested By</label>
//             <input
//               type="text"
//               id="requestedBy"
//               name="requestedBy"
//               placeholder="Enter Requested By"
//               required
//               value={requestedBy}
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setRequestedBy(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Assigned To</label>
//             <input
//               type="text"
//               id="assignedTo"
//               name="assignedTo"
//               placeholder="Enter Assigned To"
//               value={assignedTo}
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setAssignedTo(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-end ml-4">
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded focus:outline-none focus:shadow-outline" onClick={update}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div> 
//     </div>
//   );
// };

// export default UpdateRequest;




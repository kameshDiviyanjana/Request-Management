


import React from 'react';
import axios from 'axios';
import Sweetalert2 from "sweetalert2";

interface FormProps {
  onSubmit: (data: any) => void;
}

export interface IRequest {
  requestId: string;
  createdOn: string;
  location: string;
  service: string;
  status: string;
  priority: string;
  department: string;
  requestedBy: string;
  assignedTo: string;
}

export const Addrequest = async (newRequest: IRequest): Promise<IRequest> => {
  try {
    const response = await axios.post<{ data: IRequest }>('http://localhost:5004/kl/request/', newRequest);
    return response.data.data;
  } catch (error) {
    console.error("Error adding request:", error);
    throw error;
  }
}

const Moduleforme: React.FC<FormProps> = ({ onSubmit }) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: IRequest = {
      requestId: 'GH48669',
      createdOn: e.currentTarget.createdOn.value,
      location: e.currentTarget.location.value,
      service: e.currentTarget.service.value,
      status: e.currentTarget.status.value,
      priority: e.currentTarget.priority.value,
      department: e.currentTarget.department.value,
      requestedBy: e.currentTarget.requestedBy.value,
      assignedTo: e.currentTarget.assignedTo.value
    };

    try {
      const response = await Addrequest(formData);
      console.log('API Response:', response); // Log the API response to verify success
      if(response){
        Sweetalert2.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        
      }
     
      e.currentTarget.reset(); 
    } catch (error) {
      console.error('Error submitting form:', error);
    
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Service Request Form </h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className='grid grid-cols-2 gap-6'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Created On</label>
              <input
                type="date"
                id="createdOn"
                name="createdOn"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
              <select
                id="location"
                name="location"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Location</option>
                <option value="1th floor">1th floor</option>
                <option value="2th floor">2th floor</option>
                <option value="3th floor">3th floor</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Service</label>
            <input
              type="text"
              id="service"
              name="service"
              placeholder="Enter Service"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
            <select
              id="status"
              name="status"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Escalated">Escalated</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
              <select
                id="priority"
                name="priority"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Department</label>
              <select
                id="department"
                name="department"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Department</option>
                <option value="it">IT</option>
                <option value="Facilities">Facilities</option>
                <option value="Marketing">Marketing </option>
                <option value="Production">Production </option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Requested By</label>
            <input
              type="text"
              id="requestedBy"
              name="requestedBy"
              placeholder="Enter Requested By"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Assigned To</label>
            <input
              type="text"
              id="assignedTo"
              name="assignedTo"
              placeholder="Enter Assigned To"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Moduleforme;


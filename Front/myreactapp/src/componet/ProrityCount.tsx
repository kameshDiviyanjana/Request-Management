import React,{useState,useEffect} from 'react'
import { IRequset, alldatarective } from './api';
import Modal from './MyPortal';
import Moduleforme from './Moduleforme'
interface Props{

}

const ProrityCount = (props : Props) => {

    const [tasks, setTasks] = useState<IRequset[]>([]);
    const [newCount, setNewCount] = useState(0);
    const [onhold, setonhold] = useState(0);
    const [escalated, setEscalated] = useState(0);
    const [inporogres, setinporogres] = useState(0);


  useEffect(() => {
    fetchTasks();
  }, []); 

  useEffect(() => {
   
    calculateCounts();
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const response = await  alldatarective()
      setTasks(response); 
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const calculateCounts = () => {
    let newcount = 0;
    let onholdcount = 0;
    let inprogrescount = 0;
    let escalatedcount = 0;

    tasks.forEach((task) => {
      switch (task.status) {
        case 'New':
            newcount++;
          break;
        case 'On Hold':
            onholdcount++;
          break;
        case 'In Progress':
            inprogrescount++;
          break;
        case 'Escalated' :
            escalatedcount++
            break;  
        default:
          break;
      }
    });

    setNewCount(newcount);
    setonhold(onholdcount);
    setinporogres(inprogrescount);
    setEscalated(escalatedcount)
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className=' w-full h-full bg-white py-6 px-10  '>
        <div>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Moduleforme onSubmit={handleSubmit} />
      </Modal>
    </div>
        <div className=' lg:grid grid-cols-2 gap-4  lg:ml-20 lg:mr-20 max-lg:ml-1 max-lg:mr-1  max-md:justify-center '>
            <div  className=' flex gap-6  py-5 px-6'>
            <h2 className=' font-bold text-3xl'>Request</h2>
            <button className=' bg-red-900 flex flex-row h-11 max-lg:text-[10px]  gap-2 py-2 text-white px-6 outline-none rounded-lg' onClick={() => setIsOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
New Request</button>
            </div>
            <div className=' flex  justify-around'>
            <div className=' lg:flex  gap-4   justify-end  max-lg:justify-center '>
                {/* <div className=' bg-green-400 rounded-full w-36 h-36'>
                    <div className=' py-7 px-8  '>
                    {highCount}
                    <h4 className=' mt-12  text-center'>New Request</h4>
                    </div>
                </div> */}
                <div className=" flex flex-col items-center rounded-full justify-center w-28 h-28 bg-pink-200 border-2 ">
    <div className="text-4xl font-bold">{newCount}</div>
    <div className="text-xs text-center">New<br/>Requests</div>
  </div>
  <div className="flex flex-col items-center rounded-full justify-center w-28 h-28 bg-green-200 border-2 ">
    <div className="text-4xl font-bold">{inporogres}</div>
    <div className="text-xs text-center">In Progress<br/>Requests</div>
  </div>
  <div className="flex flex-col items-center rounded-full justify-center w-28 h-28  bg-blue-200 border-2 ">
    <div className="text-4xl font-bold">{escalated}</div>
    <div className="text-xs text-center">Escalated<br/>Requests</div>
  </div>
  <div className="flex flex-col items-center rounded-full justify-center w-28 h-28 bg-purple-200 border-2 ">
    <div className="text-4xl font-bold">{onhold}</div>
    <div className="text-xs text-center">On Hold<br/>Requests</div>
  </div>
        {/* <p>High Priority: {highCount}</p>
        <p>Medium Priority: {mediumCount}</p>
        <p>Low Priority: {lowCount}</p> */}
      </div>
            </div>
        </div>
      
   
     
    </div>
  );
}

export default ProrityCount
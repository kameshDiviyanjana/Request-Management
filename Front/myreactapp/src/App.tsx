
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'

function App() {
 

  return (
    <>
   {/* <h1 className=' text-red-400 text-center'>mu</h1>
       dddddd
       <Outlet/> */}
       <RouterProvider router={router}/>
    </>
  )
}

export default App

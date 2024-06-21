import { createBrowserRouter } from "react-router-dom";

//import Homepage from "../pages/Homepage";
import Serch from "../pages/Serch";
import Companypage from "../pages/Cmompanypage";
import NavBar from "../componet/NavBar";
import UpdateRequest from "../componet/UpdateRequest";
import DashBorde from "../pages/DashBorde";
import ReportPage from "../pages/ReportPage";
import Requestpage from "../pages/Requestpage";
import FeedBackPage from "../pages/FeedBackPage";
import NotFound from "../componet/NotFound";

export const router = createBrowserRouter(
    [
        {
            path : '',
            element : <NavBar/>,
            children : [
              {path : '/',element:<DashBorde/>},
              {path :'/serch' ,element:<Serch/>}  ,
              {
                        path : '/compon',
                        element : <Companypage/>
                     },

                     {
                        path : '/update/:id' ,
                        element : <UpdateRequest/>
                     },{

                        path : '/report',
                        element : <ReportPage/>
                     },{

                        path : '/request',
                        element : <Requestpage/>
                     },{
                        path : '/feedback',
                        element : <FeedBackPage/>
                     }
            
            ]
        },{
            path : '*',
            element : <NotFound/>
        }
        // {path : '',element:<Homepage/>},
        //      {path :'serch' ,element:<Serch/>}  ,
        //      {
        //         path : 'compon',
        //         element : <Companypage/>
        //      }
    ]
)
import { createBrowserRouter } from "react-router-dom";
import Form from "../Modules/Components/Form";
import AddSera from "../Pages/AddSera";
import DisplaySera from "../Pages/DisplaySera";
import HitadySera from "../Pages/HitadySera";


export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <DisplaySera />
    },
    {
        path : '/addSera',
        element: <AddSera />
    },{
        path : "/hitady",
        element : <HitadySera />
    }
])
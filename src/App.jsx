import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

import HomePage from "./Pages/HomePage"
import MainComponent from "./Layout/MainComponent";
import JobsPage from './Pages/JobsPage'
import GetStarted from './Pages/GetStarted'
import NotFoundPage from "./Pages/NotFound";
import SinglePage, { singlePageLoader } from "./Pages/ReadMorePage"
import EditJobPage from "./Pages/EditJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainComponent />} >
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<SinglePage />} loader={singlePageLoader}/>
    <Route path='/edit-job/:id' element={<EditJobPage />} loader={singlePageLoader}/>

    <Route path='get-started' element={<GetStarted />} />
    <Route path='/*' element={<NotFoundPage />} />
    </Route>  
  )
)

export default function App() {
  return<RouterProvider router={router} />;
}

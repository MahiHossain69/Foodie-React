
import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>}></Route>
  </Route>
))
function App() {
 

  return (
    <>
 
<RouterProvider router={router}/>
    </>
  )
}

export default App

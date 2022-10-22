import { Navigate } from "react-router-dom"
import Home from "../pages/Main/Home"
import Research from "../pages/Main/Research"
import Member from "../pages/Main/Member"
import Publications from "../pages/Main/Publications"
import Openings from "../pages/Main/Openings"
import Links from "../pages/Main/Links"
//路由表
 const routes = [
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/research',
    element: <Research/>,
  },
  {
    path: '/member',
    element: <Member/>,
  },
  {
    path: '/publications',
    element: <Publications/>,
  },
  {
    path: '/openings',
    element: <Openings/>,
  },
  {
    path: '/links',
    element: <Links/>,
  },
  {
    path: '/',
    element:  <Navigate to='/home' />
  }
]
export default routes;

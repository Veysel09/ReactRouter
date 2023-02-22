import { Outlet, Navigate } from "react-router-dom";



const PrivateRouter = () => {
    const userAuthenticated = true
  return <div>
    {userAuthenticated ? <Outlet/> : <Navigate to="Login" /> }</div>;
}

export default PrivateRouter
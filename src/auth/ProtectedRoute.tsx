import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

// if user then go through protected routes else will go to the home page
const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth0(); 

//outlet - render all the child routes once the user is authenticated
    return isAuthenticated ? (<Outlet/>) : (<Navigate to = "/" replace />)
} 

export default ProtectedRoute;
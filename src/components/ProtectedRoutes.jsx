import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const userName = useSelector(state => state.userName)
    
    if (userName) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    } 
}; 
export default ProtectedRoutes;
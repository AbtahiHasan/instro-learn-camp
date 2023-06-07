import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import useAuthorization from '../../hooks/useAuthorization';


const InstructorOnly = ({children}) => {
    const {loading, user} = useAuth()
    const {isLoading, role} = useAuthorization()
    const location = useLocation();
    if(loading || isLoading){
        return "LoadingSpinner"
    }
    
    if(user.email && role === "instructor"){
        return children;
    }
    return <Navigate state={{from: location}} to="/" replace/>;
};

export default InstructorOnly;
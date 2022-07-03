import { Outlet, Navigate } from "react-router-dom"


const PrivateRoute = () => {

    const login = localStorage.getItem('userLogin') ? true : false;

    console.log(login);

    return (
        login ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute
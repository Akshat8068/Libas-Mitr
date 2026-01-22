import React from 'react'
import useAdminAuth from '../hooks/useAdminAuth'
import Loader from './Loader'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateAdminComponent = () => {
    const { isAdmin, authLoading } = useAdminAuth()
    if (authLoading) {
        return (
            <Loader loadingMessage={"Authincating Admin"}/>
        )
    }
  return isAdmin ? <Outlet/>:<Navigate to={"/"}/>
}

export default PrivateAdminComponent

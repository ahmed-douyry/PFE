import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div>
        <ul className="flex text-black bg-blue">
            <li className="ml-5 px-2 py-1">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/Login'}>Login</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/Register'}>Register</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/Users'}>Users</Link>
            </li>
        </ul>
    </div>
    <main className='container'><Outlet /></main>
    
    </>
  )
}

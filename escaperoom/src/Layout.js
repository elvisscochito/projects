import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {//Link se usa en vez de 'a' para no recargar la página al entrar a una sección
  return (
    <main>
        <nav>
            <Link to="/register">Register here</Link> 
        </nav>
        <section>
            <Outlet />
        </section>
    </main>
  )
}
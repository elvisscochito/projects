import React from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { SidebarData } from "../../pages/SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import "../Layout.css";

const Layout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); //Eliminamos el token
    navigate("/", { replace: true }); //El replace evita que se genere un histórico de haber iniciado sesión
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar); //Cambia el estado en el que está al contrario (activa la sidebar)
  return (
    <main>
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Navbar className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Container
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Nav>
                <Nav.Item>
                  <Nav.Link>
                    <div className="btn-logout" onClick={handleLogout}>
                      <div className="logout-logo">
                        <AiIcons.AiOutlineLogout />
                      </div>
                      Logout
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
      {/* <Navbar bg='dark'>
            <Container>
                <Navbar.Brand>
                    <NavLink to='/home'>Escape from Reality</NavLink>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/home/logros">Logros</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/home/amigos">Amigos</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <div className='btn-logout' onClick={handleLogout}>Salir <i className="bi bi-box-arrow-right"></i></div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar> */}
      <section>
        <Outlet></Outlet>
      </section>
    </main>
  );
};

export default Layout;

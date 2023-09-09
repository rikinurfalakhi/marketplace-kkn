import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../data/index'


import { FiShoppingCart } from "react-icons/fi"


function NavbarComponent() {
    const navigate = useNavigate();

    const [changeColor, setChangeColor] = useState(false)
    const [activeTabs, setActiveTabs] = useState(navLinks[0].text)
    const changeBacgkroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        }
        else { setChangeColor(false) }
    }
    function navigateToLogin() {
        navigate('/login'); // Ganti '/login' dengan path yang sesuai
    }
    function navigateToDaftar() {
        navigate('/registrasi'); // Ganti '/login' dengan path yang sesuai
    }
    useEffect(() => {

        changeBacgkroundColor()
        window.addEventListener('scroll', changeBacgkroundColor)
    })

    return (
        <Navbar bg='light' fixed="top" expand="lg" className={changeColor ? 'color-active' : ''}>
            <Container>
                <Navbar.Brand href='#home' className='fs-3 fw-bold'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        {navLinks.map((link) => {
                            return (
                                <div key={link.id} className='nav-link'>
                                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')} end>{link.text}</NavLink>
                                </div>
                            )
                        })}
                    </Nav>
                    <div className='text-center d-flex align-items-center justify-content-center'>
                        <Nav className='ikon-keranjang'>
                            <NavLink to={'/keranjang'} className='nav-link'><FiShoppingCart /></NavLink>
                        </Nav>


                        <button onClick={() => navigateToLogin()} className='btn btn-outline-danger rounded-1 margin_right'>Masuk</button>
                        <button onClick={() => navigateToDaftar()} className='btn btn-outline-danger rounded-1 active'>Daftar</button>
                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
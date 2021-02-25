import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Ser} from './NavbarElements';
import Ico from '../../images/logo.png';//ajouter pour le logo

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, []

)

const toggleHome = () => {
    scroll.scrollToTop();
}


    return (
     <>
     <IconContext.Provider value={{color: 'green'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <Ser src={Ico} /></NavLogo>
                        {/* ajouter le ser balise pour le logo */}
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Qui sommes nous</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80} >CBD</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Produits</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Historique</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to='/product'>Nos produits</NavBtnLink>
                <NavBtnLink to='/signin'>Inscription</NavBtnLink>
                </NavBtn>  
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
     </>
    )
}

export default Navbar

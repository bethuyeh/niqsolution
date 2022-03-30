import React, {useState, useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {Nav, 
        NavContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
    } from './NavbarElements'
import {FaBars} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'
import niqlogo from '../../Images/niqlogo.png'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY>=80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={niqlogo} height="60px" width="120px" alt="img-here"/></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>                                        
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                to= "hero" 
                                smooth= "true" 
                                duration={500}  
                                exact= "true" 
                                offset={-80}
                                activeclass="active"
                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to= "about" 
                                smooth= "true" 
                                duration={500}  
                                exact= "true" 
                                offset={-80}
                                activeclass="active"
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to= "services" 
                                smooth= "true" 
                                duration={500} 
                                exact= "true" 
                                offset={-80}
                                activeclass="active"
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to= "contact" 
                                smooth= "true" 
                                duration={500}
                                exact= "true"
                                offset={-80}
                                activeclass="active"
                                >Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                
                </NavContainer>
            </Nav>  
            </IconContext.Provider>
        </>
    )
}

export default Navbar

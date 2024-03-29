import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav= styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height:80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;
export const NavContainer= styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index: 1;
    width: 100%;
    padding: 0 7vw;
    max-width: 1100px;    
   
`;

export const NavLogo = styled(LinkR)`
    color: #FFF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration:none;

    @media screen and (max-width: 768px){
        font-size:1.3rem; 
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
        color: #fff;
    }
`
    export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;

        @media screen and (max-width: 768px) {
            display: none;
        }
    `



    export const NavBtn = styled.nav`
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
            display: none;
        }
    `
    export const NavBtnLink = styled(LinkR)`
        border-radius: 50px;
        background: #1E96A6;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
    `;

    export const NavItem = styled.li`
        height: 80px
    `

    export const NavLinks = styled(LinkS)`
        color: #fff;
        font-weight: 670;
        font-size: 16px;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;

     &:hover {
         text-decoration: none;
         color: #fff;
         border-bottom: 3px solid #1E96A6;
     }   
    `;

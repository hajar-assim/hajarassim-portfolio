import styled from "styled-components";
import {device} from './../../devices';

export const Nav = styled.nav`
    background-color: #191919;
    height: 70px;
    width: 100%;
    border: 1px solid #9f8bcf;
    position: fixed;
    align-items: center;
    padding-bottom:10px;
    justify-content: center;
    margin-top: -30px;
    margin-left: -9px;

    @media ${device.iPhone12P} {
        max-width: 399px;
        padding-right:200px;
    }

`

export const NavLogo = styled.div`
    color: #9f8bcf;
    font-weight: bold;
    margin-right: 6rem;
    margin-left: 3rem;
    font-size: 1.4rem;
    cursor:pointer;

    @media ${device.iPhone12P} {
        max-width: 390px;
        margin-left:-18px;
        font-size: 1rem;
        margin-right:1rem;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    height:70px;

    @media ${device.iPhone12P} {
        max-width: 390px;
    }
`

export const NavItem = styled.li`
    height:70px;
    color: #9E9E9E;
    display: flex;
    padding: 0 1.9rem;
    align-items: center;
    font-size: 0.93rem;
    text-align: center;

    @media ${device.iPhone12P} {
        max-width: 390px;
        font-size: 1rem;
        padding: 15px;
    }
`


export const NavSy = styled.div`
    color: #9f8bcf;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 45%;

    @media ${device.iPhone12P} {
        visibility: hidden;
    }
`

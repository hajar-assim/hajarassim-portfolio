import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #fff;
    height: 70px;
    width: 100%;
    position: fixed;
    align-items: center;
    padding-bottom:10px;
    justify-content: center;
    margin-top: -30px;
    margin-left: -10px;

`

export const NavLogo = styled.div`
    color: black;
    font-weight: bold;
    margin-right: 6rem;
    margin-left: 3rem;
    font-size: 1.4rem;
    cursor:pointer;
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    height:70px;
`

export const NavItem = styled.li`
    cursor: pointer;
    height:70px;
    color: black;
    display: flex;
    padding: 0 1.9rem;
    align-items: center;
    font-size: 0.93rem;
    text-align: center;

`


export const NavSy = styled.div`
    color: black;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 45%;
`

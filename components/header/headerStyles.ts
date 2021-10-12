import styled from "styled-components"

export const Navbar = styled.nav`
    padding: 1rem;
    height: 70px;
    display: flex;
    box-shadow: 0px 3px 2px 0px #EBEBEB;
    background-color: ${props => props.theme.elements};
    @media screen and (max-width: 550px) {
        height: 100px;
    }
`
export const NavTitle = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    color: ${props => props.theme.txtColor};
`
export const Title = styled.h2`
    color: black;
    margin-left: 3vw;
    font-weight: 800;
    cursor: pointer;
    color: ${props => props.theme.txtColor};
    @media screen and (max-width: 550px) {
        font-size: 15px;
    }
`
export const ToggleTheme = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`
export const ThemeText = styled.p`
    font-weight: 600;
    margin-right: 3vw;
    margin-left: 5px;
    font-weight: 800;
    color: ${props => props.theme.txtColor};
`
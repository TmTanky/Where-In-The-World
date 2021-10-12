import styled from "styled-components";

export const Card = styled.div`
    height: 330px;
    width: 250px;
    border-radius: 5px;
    margin: 37.5px;
    overflow: hidden;
    background-color: ${props => props.theme.elements};
    cursor: pointer;
`
export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    color: ${props => props.theme.txtColor};
`
export const Detail = styled.p`
    margin: 2px 0;
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.txtColor};
`
export const ImageHolder = styled.div`
    flex: 1;
    display: flex;
    height: 150px;
`
export const CountryInfo = styled.section`
    flex: 2;
    display: flex;
    justify-content: center;
    height: 170px;
`
export const CountryDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto 25px;
`
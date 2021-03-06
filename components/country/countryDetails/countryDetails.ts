import styled from "styled-components";

export const TitleTag = styled.h1(({ theme }) => ({
    marginBottom: "18px",
    fontWeight: 800,
    fontSize: "30px",
    color: theme.txtColor,
}));

export const InfoTag = styled.p(({ theme }) => ({
    margin: "7px 0",
    color: theme.txtColor,
}));

export const RootBase = styled.main(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.bg,
}));

export const DetailsBase = styled.div`
    display: flex;
    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`;

export const DetailsImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 200px;
    margin: 0rem 40px;
`;

export const DetailsBaseInfo = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 40px;
    @media screen and (max-width: 950px) {
        margin-top: 40px;
    }
`;

export const DetailsInfo = styled.div`
    display: flex;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const LeftInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const RightInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 700px) {
        margin-top: 35px;
    }
`;

export const BorderBase = styled.section`
    display: flex;
    margin-top: 40px;
    @media screen and (max-width: 700px) {
        align-items: unset;
        flex-direction: column;
    }
`;

export const BorderCountriesBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    flex-flow: row wrap;
    padding-bottom: 2rem;
    @media screen and (max-width: 700px) {
        margin-top: 18px;
        justify-content: flex-start;
    }
`;

export const BorderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: max-content;
    padding: 0 0.5rem;
    background-color: ${(props) => props.theme.elements};
    margin: 4px 4px;
    border-radius: 3px;
    font-weight: 300;
    cursor: pointer;
    font-size: 15px;
`;

export const BackBase = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
`;

export const BackBtn = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    display: flex;
    justify-content: center;
    height: 30px;
    align-items: center;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.txtColor};
    margin: 0 8vw;
    @media screen and (max-width: 700px) {
        margin: 0 40px;
    }
`;

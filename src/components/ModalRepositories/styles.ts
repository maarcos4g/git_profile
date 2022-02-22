import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background: var(--modal);

    display: flex;
    flex-direction: column;

    border-radius: 20px;

    padding: 20px;
    gap: 10px;

    align-items: center;

    overflow-y: scroll;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 65px;

    display: flex;

    text-align: center;
    justify-content: space-between;
`;

export const ButtonBack = styled.button`
    width: 40px;
    height: 100%;

    border: none;

    background: transparent;

    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

export const ImageBack = styled.img``;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    font-family: 'Rajdhani', sans-serif;
    color: var(--black);

    width: 100%;
    text-align: center;
`;

export const CountText = styled.span`
    font-size: 15px;
    font-weight: 500;
    font-family: 'Rajdhani', sans-serif;
    color: var(--black);

    margin-bottom: 10px;
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 70px;

    display: flex;

    gap: 10px;

    justify-content: center;
    align-items: center;
`;

export const Image = styled.img``;

export const ContainerDetail = styled.div`
    width: 100%;

    justify-content: center;

    display: flex;
    flex-direction: column;
`;

export const TitleRepo = styled.a`
    font-size: 18px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;

    color: var(--black);

    text-decoration: none;
`;

export const DescriptionRepo = styled.span`
    width: 100%;

    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    color: var(--black);
`;

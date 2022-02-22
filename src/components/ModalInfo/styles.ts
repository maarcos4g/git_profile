import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background: var(--modal);

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 7.2px;
`;

export const TextBold = styled.h1`
    font-size: 30px;
    font-weight: 700;
    font-family: 'Rajdhani', sans-serif;
    color: var(--black);
`;

export const ContainerText = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
`;

export const Text = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Rajdhani', sans-serif;
  color: var(--black);
`;

export const ContainerDescription = styled.div`
  margin-top: 30px;

  width: 80%;
  height: 65px;
  background: var(--white);

  border-radius: 10px;
  border-top: 4px solid var(--red);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionItem = styled.button`
  width: 30%;
  height: 100%;

  border: none;
  background: transparent;
  cursor: pointer;

  margin: 5px;
`;

export const Separator = styled.div`
  width: 3px;
  height: 90%;
  background: var(--gray);
`;

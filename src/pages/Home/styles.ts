import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Title = styled.span`
  font-size: 28px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  width: 500px;
  text-align: center;
`;

export const InputArea = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  `;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const InputText = styled.input`
  width: 80%;
  height: 45px;
  padding: 20px 25px;
  border-radius: 20px;
  border: none;
  font-family: 'Inter', sans-serif;
`;

export const ButtonSearch = styled.button`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--red);
  border: none;
  cursor: pointer;
`;

export const Image = styled.img``;

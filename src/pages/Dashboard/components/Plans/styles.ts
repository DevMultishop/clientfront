import styled from 'styled-components';

export const PlanContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.backgroundBody};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  border-image: initial;
  margin-bottom: 10px;
  /* min-width: 100px; */
  height: 200px;
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

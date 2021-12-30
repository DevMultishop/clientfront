import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.header`
  margin: 1.138rem 1.8rem 0;
  width: calc(100% - 3.6rem - 260px);
  background-color: ${({ theme }) => theme.color.backgroundHeader};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  position: fixed;
  right: 0;
  z-index: 1064;
  transition: all 0.4s ease;
  padding: 0.5rem 0;

  @media (max-width: 1200px) {
    width: calc(100% - 3.6rem);
  }

  .left {
    display: flex;
    align-items: center;
  }
`;

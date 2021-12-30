import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  background: ${({ theme }) => theme.color.backgroundSidebar};
  width: 260px;
  height: 100vh;
  transition: all 0.4s ease;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;

  @media (max-width: 1200px) {
    transform: translateX(-100%);
  }

  &.mobile {
    transform: translateX(0);
  }
`;

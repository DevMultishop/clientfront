import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const FadeInTop = keyframes`
  0% {
    transform: translateY(-16px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Action = styled.button`
  position: relative;
  border: none;
  background: transparent;
  margin: 0 auto;
  display: block;

  &:disabled {
    pointer-events: none;
  }

  .user-info {
    bottom: 0;
    color: rgb(98, 98, 98);

    p:first-of-type {
      font-weight: 600;
    }
  }
`;

export const LineHeader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 24px;
  padding: 24px;
  transform: translateY(0);
  opacity: 1;
  animation: 2s ease ${FadeInTop};
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .avatar {
    margin: 0 auto 8px;
  }

  &:first-child {
    /* margin-bottom: 0; */
  }

  .react-multi-carousel-list {
    margin-top: 24px;
  }

  &.line-1 {
    .avatar {
      width: 115px;
      height: 115px;
    }
  }

  &.line-2 {
    .avatar {
      width: 95px;
      height: 95px;
    }
  }

  &.line-3 {
    .avatar {
      width: 75px;
      height: 75px;
    }
  }
`;

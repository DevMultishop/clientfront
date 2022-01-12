import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  .react-multi-carousel-list {
    position: static;
    overflow: visible;
    padding-bottom: 20px;

    &:hover button {
      opacity: 1;
      visibility: visible;
    }
  }
`;

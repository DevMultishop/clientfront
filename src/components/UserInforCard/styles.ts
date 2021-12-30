import styled from 'styled-components';

export const HContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 1px;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 8px 0 24px;
  min-width: 1px;

  h3 {
    font-size: 16px;
  }

  p {
    color: rgb(135, 134, 139);
    font-size: 12px;

    @media (max-width: 480px) {
      /* display: none; */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 90%;
    }
  }
`;

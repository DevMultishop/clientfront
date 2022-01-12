import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface UploadProps {
  isDragActive: boolean;
  isDragReject: boolean;
  refKey?: string;
  [key: string]: any;
  type?: 'error' | 'success' | 'default';
}

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border-color: #e83f5b;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  position: relative;
  border: 1.5px dashed #969cb3;
  border-radius: 5px;
  background: ${props => props.theme.color.background};

  cursor: pointer;
  transition: height 0.2s ease;
  height: 100px;

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}
  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}

  p {
    position: relative;
    z-index: 2;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }
`;

const messageColors = {
  default: '#007aff',
  error: '#e83f5b',
  success: '#12a454',
};

export const UploadMessage = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4px;
  /* line-height: 24px; */
  color: ${({ type }: UploadProps) => messageColors[type || 'default']};
  font-size: 12px;
`;

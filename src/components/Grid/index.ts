import styled from 'styled-components';
import { lighten, darken } from 'polished';

interface IContainerProps {
  overflow?: string;
}
interface IRowProps {
  flexWrap?: string;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  overflow: ${({ overflow }) => overflow};
  margin-right: auto;
  margin-left: auto;

  &.fluid {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Row = styled.div<IRowProps>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;

  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;

  &.span-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  &.span-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  &.span-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  &.span-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  &.span-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  &.span-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  &.span-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  &.span-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  &.span-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  &.span-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  &.span-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  &.span-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  &.span-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 576px) {
    &.span-sm {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    &.span-sm-auto {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    &.span-sm-1 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.span-sm-2 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.span-sm-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.span-sm-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.span-sm-5 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.span-sm-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.span-sm-7 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.span-sm-8 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.span-sm-9 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.span-sm-10 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.span-sm-11 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.span-sm-12 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (min-width: 768px) {
    &.span-md {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    &.span-md-auto {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    &.span-md-1 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.span-md-2 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.span-md-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.span-md-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.span-md-5 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.span-md-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.span-md-7 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.span-md-8 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.span-md-9 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.span-md-10 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.span-md-11 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.span-md-12 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 992px) {
    &.span-lg {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    &.span-lg-auto {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    &.span-lg-1 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.span-lg-2 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.span-lg-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.span-lg-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.span-lg-5 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.span-lg-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.span-lg-7 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.span-lg-8 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.span-lg-9 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.span-lg-10 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.span-lg-11 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.span-lg-12 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 1366px) {
    &.span-xl {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    &.span-xl-auto {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    &.span-xl-1 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    &.span-xl-2 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    &.span-xl-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    &.span-xl-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    &.span-xl-5 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    &.span-xl-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    &.span-xl-7 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    &.span-xl-8 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    &.span-xl-9 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    &.span-xl-10 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    &.span-xl-11 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &.span-xl-12 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export const Line = styled.li`
  background: ${props => props.theme.color.background};
  border-radius: 5px;
  transition: background 0.2s ease 0s;

  color: rgb(135, 134, 139);
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 8px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  a {
    color: rgb(135, 134, 139);
    &:hover {
      color: ${() => darken(0.5, 'rgb(135, 134, 139)')};
    }
  }

  .expand-button {
    cursor: pointer;
    border: none;
    background: none;
    color: ${props => props.theme.color.primary};
  }

  &:hover {
    background: ${props => lighten(0.017, props.theme.color.background)};
  }
`;

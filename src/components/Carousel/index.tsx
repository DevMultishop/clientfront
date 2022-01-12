import React from 'react';

import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import CustomLeftArrow from './CustomLeftArrow';
// import CustomRightArrow from './CustomRightArrow';

import { Container } from './styles';

const defaulrResponsive = {
  medium: {
    breakpoint: { max: 99999, min: 1000 },
    slidesToSlide: 3,
    items: 3,
    partialVisibilityGutter: 10,
  },
  small: {
    breakpoint: { max: 1000, min: 768 },
    slidesToSlide: 2,
    items: 2,
    partialVisibilityGutter: 10,
  },
  xsmall: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

interface IProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: IProps): JSX.Element {
  return (
    <Container>
      <ReactCarousel
        responsive={defaulrResponsive}
        keyBoardControl
        // customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
        // customRightArrow={<CustomRightArrow onClick={() => {}} />}
        centerMode
      >
        {children}
      </ReactCarousel>
    </Container>
  );
}

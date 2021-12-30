import React from 'react';
import { Line } from '../Grid';
import ShimmerEffect from '../Shimmer';

export default function ListPlaceholder(): JSX.Element {
  return (
    <div>
      <ul>
        <Line>
          <ShimmerEffect height={30} />
        </Line>
        <Line>
          <ShimmerEffect height={30} />
        </Line>
        <Line>
          <ShimmerEffect height={30} />
        </Line>
        <Line>
          <ShimmerEffect height={30} />
        </Line>
        <Line>
          <ShimmerEffect height={30} />
        </Line>
      </ul>
    </div>
  );
}

import { CSSProperties } from 'react';

export const getCircleStyle = (categoriesTotalCount: number, angle: number, timeOfRotation: number): CSSProperties =>
  ({
    '--count': categoriesTotalCount,
    '--angle': `${angle}deg`,
    '--time': `${timeOfRotation}ms`,
    '--delay': `${timeOfRotation + 300}ms`,
  } as CSSProperties);

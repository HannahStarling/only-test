import { useState } from 'react';

export const useSpinnerRotation = (angleBetweenDots: number) => {
  const [angle, setAngle] = useState<number>(angleBetweenDots);
  const [timeOfRotation, setTimeOfRotation] = useState<number>(0);

  const rotateSpinner = (categoryIndex: number, selectedPeriod: number, DEFAULT_ROTATION_TIME: number): void => {
    const angleOfRotation = angleBetweenDots - categoryIndex * angleBetweenDots;
    setTimeOfRotation(Math.abs(selectedPeriod - categoryIndex) * DEFAULT_ROTATION_TIME);
    setAngle(angleOfRotation);
  };

  return {
    angle,
    timeOfRotation,
    rotateSpinner,
  };
};

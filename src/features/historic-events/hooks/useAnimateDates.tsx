import { RefObject, useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FADE_TIME } from '../constants/animations';

gsap.registerPlugin(useGSAP);

export const useAnimateDates = (initialFirstYear: number, initialLastYear: number, timeOfRotation: number) => {
  const firstYearRef = useRef<HTMLHeadingElement | null>(null);
  const lastYearRef = useRef<HTMLHeadingElement | null>(null);

  const [firstYear, setFirstYear] = useState<number>(initialFirstYear);
  const [lastYear, setLastYear] = useState<number>(initialLastYear);

  const animateYear = useCallback(
    (ref: RefObject<HTMLHeadingElement | null>, targetValue: number, currentYear: number) => {
      const difference = targetValue - currentYear;
      const animationTime = (timeOfRotation + FADE_TIME) / 1000;

      gsap.to(ref.current, {
        duration: animationTime,
        textContent: `+=${difference}`,
        roundProps: 'textContent',
        ease: 'none',
        onUpdate: () => (currentYear === firstYear ? setFirstYear(targetValue) : setLastYear(targetValue)),
      });
    },
    [firstYear, lastYear, timeOfRotation]
  );

  const animateDatesRange = useCallback(
    (newStartDate: number, newEndDate: number): void => {
      animateYear(firstYearRef, newStartDate, firstYear);
      animateYear(lastYearRef, newEndDate, lastYear);
    },
    [firstYear, lastYear, animateYear] // Зависимости для функции
  );

  return {
    firstYear,
    lastYear,
    firstYearRef,
    lastYearRef,
    animateDatesRange,
  };
};

import { useRef } from 'react';
import { FADE_TIME } from '../constants/animations';

export const useFadeSwiper = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const fadeSwiper = (callback: Function): void => {
    sliderRef.current?.classList.remove('historic-events__swiper_show');
    setTimeout(() => {
      callback();
      sliderRef.current?.classList.add('historic-events__swiper_show');
    }, FADE_TIME);
  };

  return {
    sliderRef,
    fadeSwiper,
  };
};

import { useMemo } from 'react';
import { SLIDES_PER_VIEW_CONFIG } from '../constants/animations';
import { HistoricEvents } from '../../../types/historic-events';

export const useHistoricEventsSwiper = (cards: HistoricEvents) => {
  const slidesPerView = useMemo(() => Math.min(SLIDES_PER_VIEW_CONFIG[1920], cards.length), [cards.length]);

  const breakpoints = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(SLIDES_PER_VIEW_CONFIG).map(([key, value]) => [
          key,
          {
            slidesPerView: Math.min(value, cards.length),
            spaceBetween: 80,
          },
        ])
      ),
    [cards.length]
  );

  return { slidesPerView, breakpoints };
};

import { useEffect, useRef, useState } from 'react';
import { CATEGORIES, HISTORIC_EVENTS_DATA } from '../../../shared/constants/mock-api';
import { ANGLE_BETWEEN_DOTS, DEFAULT_ROTATION_TIME, FADE_TIME, INITIAL_PERIOD_INDEX } from '../constants/animations';
import { getYearsRange } from '../helpers/getYearsRange';
import { useAnimateDates } from './useAnimateDates';
import { useSpinnerRotation } from './useSpinnerRotation';
import { useFadeSwiper } from './useFadeSwiper';

export enum PeriodDirection {
  Prev = 'prev',
  Next = 'next',
}

export const useHistoricEvents = () => {
  const mainCircleRef = useRef<HTMLDivElement>(null);

  // States
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(INITIAL_PERIOD_INDEX);

  const events = HISTORIC_EVENTS_DATA[selectedCategory]?.historicEvents || [];
  const currentEvents = events[selectedPeriod] || [];
  const [initialStartDate, initialEndDate] = getYearsRange(currentEvents);

  // Используем хуки для анимаций, вращения и скрытия слайдера
  const { firstYearRef, lastYearRef, lastYear, firstYear, animateDatesRange } = useAnimateDates(
    initialStartDate,
    initialEndDate,
    DEFAULT_ROTATION_TIME
  );
  const { angle, timeOfRotation, rotateSpinner } = useSpinnerRotation(ANGLE_BETWEEN_DOTS);
  const { sliderRef, fadeSwiper } = useFadeSwiper();

  // Обновление категории или периода с анимацией
  const changePeriodOrCategory = ({
    category,
    periodIndex,
    categoryIndex,
  }: {
    category: string;
    categoryIndex?: number;
    periodIndex: number;
  }): void => {
    const [newStartDate, newEndDate] = getYearsRange(HISTORIC_EVENTS_DATA[category].historicEvents[periodIndex]);

    animateDatesRange(newStartDate, newEndDate);

    if (categoryIndex !== undefined) {
      rotateSpinner(categoryIndex, selectedPeriod, DEFAULT_ROTATION_TIME);
    }

    fadeSwiper(() => {
      setSelectedCategory(category);
      setSelectedPeriod(periodIndex);
    });
  };

  // Переход на предыдущий или следующий период с использованием enum
  const handlePeriodChange = (direction: PeriodDirection) => () => {
    const periodIndex = direction === PeriodDirection.Prev ? selectedPeriod - 1 : selectedPeriod + 1;
    changePeriodOrCategory({ category: selectedCategory, periodIndex });
  };

  // Плавный показ слайдера при изменении периода
  useEffect(() => {
    const timer = setTimeout(() => {
      sliderRef.current?.classList.add('historic-events__swiper_show');
    }, FADE_TIME);
    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, [selectedPeriod, sliderRef]);

  return {
    firstYearRef,
    lastYearRef,
    lastYear,
    firstYear,
    mainCircleRef,
    angle,
    timeOfRotation,
    categories: CATEGORIES,
    changePeriodOrCategory,
    selectedCategory,
    events,
    selectedPeriod,
    handlePeriodChange,
    sliderRef,
    currentEvents,
  };
};

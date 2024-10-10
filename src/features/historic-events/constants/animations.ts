import { CATEGORIES_TOTAL_COUNT } from '../../../shared/constants/mock-api';

export const DEFAULT_ROTATION_TIME = 300;
export const FADE_TIME = 300; // Время для плавного скрытия и показа слайдера
export const SLIDES_PER_VIEW_CONFIG = {
  426: 1.5,
  768: 2.5,
  992: 3,
  1024: 3,
  1920: 3,
};

export const FULL_CIRCLE_DEGREES = 360;
export const ANGLE_BETWEEN_DOTS = FULL_CIRCLE_DEGREES / CATEGORIES_TOTAL_COUNT;
export const INITIAL_PERIOD_INDEX = 3;

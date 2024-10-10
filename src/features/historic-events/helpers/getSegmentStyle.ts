import { CSSProperties } from 'react';
// Вспомогательная функция для вычисления стиля точек на кругу категорий
export const getSegmentStyle = (index: number): CSSProperties =>
  ({
    '--segment': index + 1,
  } as CSSProperties);

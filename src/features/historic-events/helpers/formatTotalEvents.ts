// Функция для форматирования общего числа событий
export const formatTotalEvents = (length: number, index: number): string =>
  `${String(index + 1).padStart(2, '0')}/${String(length).padStart(2, '0')}`;

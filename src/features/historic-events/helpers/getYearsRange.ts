import { HistoricEvents } from '../../../types/historic-events';

// Функция для получения первого и последнего года из событий
export const getYearsRange = (events: HistoricEvents): [number, number] => {
  const firstYear = events[0]?.year || 0;
  const lastYear = events[events.length - 1]?.year || 0;
  return [firstYear, lastYear];
};

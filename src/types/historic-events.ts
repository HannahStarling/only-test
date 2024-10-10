// События
export interface HistoricEvent {
  year: number;
  info: string;
}

// Блок содержит информацию о временных отрезках, в каждом из которых существует несколько событий.
export type HistoricEvents = Array<HistoricEvent>;

export interface HistoricCategory {
  categoryTitle: string;
  // Возможно существование от 2 до 6 временных отрезков.
  historicEvents: Array<HistoricEvents>;
}

export type HistoricEventsData = Record<string, HistoricCategory>;

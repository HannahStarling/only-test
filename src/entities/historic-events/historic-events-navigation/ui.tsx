import './styles.scss';
import React, { FC } from 'react';
import { UiButtonRound } from '../../../shared/ui-components/ui-button/ui-button-round/ui-button-round';
import { formatTotalEvents } from '../../../features/historic-events/helpers/formatTotalEvents';

interface IProps {
  numberOfEvents: number;
  currentEvent: number;
  loadPreviousPeriod: VoidFunction;
  loadNextPeriod: VoidFunction;
}

// Вспомогательная функция для рендеринга кнопки
const renderButton = (onClick: VoidFunction, isDisabled: boolean, className: string) => (
  <UiButtonRound className={className} onClick={onClick} disabled={isDisabled} />
);

export const HistoricEventsNavigation: FC<IProps> = ({ loadNextPeriod, loadPreviousPeriod, numberOfEvents, currentEvent }) => {
  return (
    <div className="historic-events__navigation">
      <p className="historic-events__navigation-total">{formatTotalEvents(numberOfEvents, currentEvent)}</p>
      <div className="historic-events__navigation-buttons">
        {renderButton(loadPreviousPeriod, currentEvent === 0, 'historic-events__navigation-buttons_prev')}
        {renderButton(loadNextPeriod, currentEvent === numberOfEvents - 1, 'historic-events__navigation-buttons_next')}
      </div>
    </div>
  );
};

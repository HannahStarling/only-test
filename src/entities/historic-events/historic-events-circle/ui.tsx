import './styles.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { HISTORIC_EVENTS_DATA } from '../../../shared/constants/mock-api';
import { getCircleStyle } from '../../../features/historic-events/helpers/getCircleStyle';
import { getSegmentStyle } from '../../../features/historic-events/helpers/getSegmentStyle';

interface IProps {
  angle: number;
  mainCircleRef: React.RefObject<HTMLDivElement>;
  categoriesTotalCount: number;
  categories: string[];
  timeOfRotation: number;
  selectedCategory: string;

  changePeriodOrCategory({ category, periodIndex, categoryIndex }: { category: string; categoryIndex?: number; periodIndex: number }): void;
}

export const HistoricEventsCircle: FC<IProps> = ({
  angle,
  mainCircleRef,
  categoriesTotalCount,
  categories,
  timeOfRotation,
  selectedCategory,
  changePeriodOrCategory,
}) => {
  return (
    <div className="historic-events__event-circle event-circle">
      <div ref={mainCircleRef} className="event-circle__main-circle" style={getCircleStyle(categoriesTotalCount, angle, timeOfRotation)}>
        {categories.map((category, index) => {
          const isActive = selectedCategory === category;
          const number = index + 1;
          const onClick = () => changePeriodOrCategory({ category, categoryIndex: index, periodIndex: 0 });

          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={category}
              className={classNames('event-circle__segment', { 'event-circle__segment_active': isActive })}
              style={getSegmentStyle(index)}
              onClick={onClick}
            >
              <div className="event-circle__circle-area">
                <p className="event-circle__circle">
                  {number}
                  <span className="event-circle__title">{HISTORIC_EVENTS_DATA[category].categoryTitle}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

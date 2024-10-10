import './styles.scss';
import React, { FC, RefObject } from 'react';
import classNames from 'classnames';

interface IProps {
  firstYear?: number;
  lastYear?: number;
  firstYearRef: RefObject<HTMLHeadingElement>;
  lastYearRef: RefObject<HTMLHeadingElement>;
}

// Вспомогательная функция для рендеринга заголовков
const renderYear = (year: number | undefined, ref: RefObject<HTMLHeadingElement>, additionalClass: string = '') => {
  return year ? (
    <h2 className={classNames(`historic-events__range-title`, additionalClass)} ref={ref}>
      {year}
    </h2>
  ) : null;
};

export const HistoricEventsRange: FC<IProps> = ({ firstYear, firstYearRef, lastYear, lastYearRef }) => {
  return (
    <div className="historic-events__range">
      {renderYear(firstYear, firstYearRef)}
      {renderYear(lastYear, lastYearRef, 'historic-events__range-title_accent')}
    </div>
  );
};

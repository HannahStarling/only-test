import { FC } from 'react';
import styles from './styles.module.scss';
import { IProps } from '../../../types/common';
import { UiYearTitle } from '../../../shared/ui-components/ui-year-title/ui-year-title';
import { UiYearText } from '../../../shared/ui-components/ui-year-text/ui-year-text';
import { HistoricEvent } from '../../../types/historic-events';

export const HistoricEventCard: FC<IProps & HistoricEvent> = ({ year, info }) => {
  return (
    <div className={styles.card}>
      <UiYearTitle>{year}</UiYearTitle>
      <UiYearText>{info}</UiYearText>
    </div>
  );
};

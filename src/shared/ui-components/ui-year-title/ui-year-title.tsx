import './ui-year-title.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { IProps } from '../../../types/common';

export const UiYearTitle: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <h3 {...props} className={classNames('ui-year-title', className)}>
      {children}
    </h3>
  );
};

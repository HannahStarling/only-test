import './ui-year-text.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { IProps } from '../../../types/common';

export const UiYearText: FC<IProps> = ({ className, children, ...props }) => {
  return (
    <p {...props} className={classNames('ui-year-text', className)}>
      {children}
    </p>
  );
};

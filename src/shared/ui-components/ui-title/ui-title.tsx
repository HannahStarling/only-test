import './ui-title.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { IProps } from '../../../types/common';

export const UiTitle: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <h1 {...props} className={classNames('ui-title', className)}>
      {children}
    </h1>
  );
};

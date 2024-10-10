import './ui-button-round.scss';
import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

interface IUiButtonRoundProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const UiButtonRound: FC<IUiButtonRoundProps> = ({ className, ...props }) => {
  return <button type="button" {...props} className={classNames('ui-button ui-button-round', className)} />;
};

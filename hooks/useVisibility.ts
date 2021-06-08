import {MouseEvent as ME, useState} from 'react';

export const useVisibility = (initState = false) => {
  const [visible, setVisible] = useState<boolean>(initState);

  const onShow = (e: ME<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    setVisible(true);
  };

  const onHide = (e: ME<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    setVisible(false);
  };

  const toggleVisibility = (e: ME<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    setVisible(prev => !prev);
  };

  return {visible, onShow, onHide, toggleVisibility};
};

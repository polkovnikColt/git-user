import {useState} from 'react';

export const useVisibility = (defaultVisibility = false) => {
  const [visible, setVisible] = useState(defaultVisibility);

  const onShow = (): void => {
    setVisible(true);
  };

  const onHide = (): void => {
    setVisible(false);
  };

  const toggleVisibility = (): void => {
    setVisible(prev => !prev);
  };

  return {visible, onShow, onHide, toggleVisibility};
};

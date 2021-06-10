import {useState} from 'react';

export const useVisibility = (initState = false) => {
  const [visible, setVisible] = useState(initState);

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

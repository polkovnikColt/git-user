import React from 'react';
import {ContentWrapper} from '../components/wrappers/ContentWrapper';
import {useRedirect} from '../hooks/useRedirect';

const HomePage = () => {
  useRedirect(false, '/auth/sign-in');
  return <ContentWrapper></ContentWrapper>;
};

export default HomePage;

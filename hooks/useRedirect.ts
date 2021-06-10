import {useEffect} from 'react';
import {useRouter} from 'next/router';

export const useRedirect = (isLogged: boolean): void => {
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push('/auth/sign-in');
    }
  }, []);
};

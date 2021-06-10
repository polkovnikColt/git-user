import {useEffect} from 'react';
import {useRouter} from 'next/router';

export const useRedirect = (isLogged: boolean, route: string): void => {
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push(route);
    }
  }, []);
};

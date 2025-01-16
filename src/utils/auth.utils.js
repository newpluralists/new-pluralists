const getCookieValue = (name) => {
  if (typeof window === 'undefined') return;
  const cookies = document.cookie.split('; ').find((row) => row.startsWith(`${name}=`));
  return cookies ? cookies.split('=')[1] : null;
};

export const isAlreadyLogged = () => {
  if (typeof window === 'undefined') return;
  const isAccessGranted = getCookieValue('access_granted') === 'true';
  return isAccessGranted;
};

import Cookies from 'js-cookie';

const name = 'Via affiliate';
console.info(name);

Cookies.set('HELLO', document.location.host, {
  expires: 7,
  path: '/',
});

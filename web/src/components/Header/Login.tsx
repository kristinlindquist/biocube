import { ReactElement } from 'react';
import { GoogleLogout, useGoogleLogin } from 'react-google-login';
import { useCookies } from 'react-cookie';

import { Button } from 'components/Button';
import { Logger } from 'logger';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const COOKIE_NAME = process.env.REACT_APP_COOKIE_ID;

const SCOPES = [
  'https://www.googleapis.com/auth/fitness.activity.read',
  'https://www.googleapis.com/auth/fitness.heart_rate.read',
  'https://www.googleapis.com/auth/fitness.sleep.read',
];

const Login = (): ReactElement => {
  const [{ [COOKIE_NAME]: cookie }, setCookie, removeCookie] = useCookies();

  const login = (response) => {
    const { accessToken, profileObj } = response;
    setCookie(COOKIE_NAME, { ...profileObj, accessToken });
  };

  const logout = () => removeCookie(COOKIE_NAME);

  const { loaded, signIn } = useGoogleLogin({
    clientId: CLIENT_ID,
    cookiePolicy: 'single_host_origin',
    isSignedIn: true,
    onFailure: () => Logger.info('Login failure'),
    onSuccess: login,
    responseType: 'token',
    scope: SCOPES.join(' '),
  });

  return cookie ? (
    <GoogleLogout
      clientId={CLIENT_ID}
      onFailure={() => Logger.info('Logout failure')}
      onLogoutSuccess={() => logout()}
      render={(props) => (
        <Button {...props} color="inherit" disabled={false} label="Log Out" />
      )}
    />
  ) : (
    <Button color="inherit" loading={!loaded} label="Log In" onClick={signIn} />
  );
};

export default Login;

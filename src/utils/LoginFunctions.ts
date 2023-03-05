export const clientId: string = import.meta.env.VITE_CLIENT_ID;
export const scope: string = "activity:read_all";
export const redirectUrl: string = import.meta.env.VITE_REDIRECT_URL;

export const handleLogin = (clientId:string, scope: string, redirectUrl:string): void => {
    (
      window as Window
    ).location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };
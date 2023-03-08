export const errorHandler = (error: number) => {
  switch (error) {
    case 444:
      return "Error: something went wrong.";
    case 400:
      return "Error: something went wrong.";
    case 401:
    case 404:
      return 'Access Forbidden: please give us permission to access your data.';
    case 403:
      return "Access Forbidden: check your privacy settings.";
    case 429:
      return "Too many requests: Strava limits requests per minute, please try again in 15 minutes";
    case 500:
      return "Strava is having technical issues.";
    default:
      return "Error: something went wrong."
  }
};
